#!/usr/bin/env python3
"""Configure branch protection: owner pushes freely, others need PR + owner approval.

Usage:
  export GITHUB_TOKEN=ghp_your_token_here   # classic "repo" scope OR Administration: write
  ./scripts/enable-branch-protection.sh

What this sets on `main`:
  - Pull requests required for non-admins (1 approval, CODEOWNERS review)
  - enforce_admins=false  →  you (repo admin/owner) push directly without approval
  - Force pushes and branch deletion blocked
"""

import json
import os
import sys
import urllib.error
import urllib.request

REPO = os.environ.get("GITHUB_REPO", "sagarkhamkar/work")
BRANCH = os.environ.get("GITHUB_BRANCH", "main")
TOKEN = os.environ.get("GITHUB_TOKEN", "")
OWNER = os.environ.get("GITHUB_OWNER", "sagarkhamkar")

if not TOKEN:
    print("Error: Set GITHUB_TOKEN first.")
    print("  export GITHUB_TOKEN=ghp_your_token_here")
    print("  ./scripts/enable-branch-protection.sh")
    print("\nToken needs classic 'repo' scope OR fine-grained 'Administration: Read and write'.")
    sys.exit(1)

owner, name = REPO.split("/", 1)
headers = {
    "Authorization": f"Bearer {TOKEN}",
    "Accept": "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "Content-Type": "application/json",
    "User-Agent": "dinesh-thibak-setup",
}


def api(method, path, body=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(
        f"https://api.github.com{path}",
        data=data,
        method=method,
        headers=headers,
    )
    with urllib.request.urlopen(req) as resp:
        return resp.status, resp.read().decode()


def api_or_error(method, path, body=None):
    try:
        return api(method, path, body)
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()


print(f"Configuring {REPO} branch {BRANCH}...")
print(f"Owner/approver: @{OWNER}")
print("Policy: owner pushes freely; others need PR + CODEOWNERS approval\n")

# Classic branch protection — enforce_admins=false lets repo admin (you) bypass PR rules
payload = {
    "required_status_checks": None,
    "enforce_admins": False,
    "required_pull_request_reviews": {
        "dismiss_stale_reviews": True,
        "require_code_owner_reviews": True,
        "required_approving_review_count": 1,
    },
    "restrictions": None,
    "allow_force_pushes": False,
    "allow_deletions": False,
}

status, body = api_or_error(
    "PUT",
    f"/repos/{owner}/{name}/branches/{BRANCH}/protection",
    payload,
)

if status in (200, 201):
    print(f"Branch protection enabled (HTTP {status}).")
    print(f"Verify: https://github.com/{REPO}/settings/branches")
    print("\nYou (@{0}) can push to main directly.".format(OWNER))
    print("Others with write access must open a PR and get your approval.")
    sys.exit(0)

print(f"Branch protection API failed (HTTP {status}): {body}\n")

# Fallback: repository ruleset with explicit owner bypass
print("Trying repository ruleset with owner bypass...")
user_status, user_body = api_or_error("GET", f"/users/{OWNER}")
if user_status != 200:
    print(f"Could not resolve owner user id: {user_body}")
    sys.exit(1)

actor_id = json.loads(user_body)["id"]
ruleset = {
    "name": "Protect main — owner bypass",
    "target": "branch",
    "enforcement": "active",
    "conditions": {
        "ref_name": {
            "include": [f"refs/heads/{BRANCH}"],
            "exclude": [],
        }
    },
    "bypass_actors": [
        {
            "actor_id": actor_id,
            "actor_type": "User",
            "bypass_mode": "always",
        }
    ],
    "rules": [
        {
            "type": "pull_request",
            "parameters": {
                "required_approving_review_count": 1,
                "require_code_owner_review": True,
                "dismiss_stale_reviews_on_push": True,
            },
        },
        {"type": "deletion"},
        {"type": "non_fast_forward"},
    ],
}

rs_status, rs_body = api_or_error("POST", f"/repos/{owner}/{name}/rulesets", ruleset)
if rs_status in (200, 201):
    print(f"Ruleset created (HTTP {rs_status}).")
    print(f"Verify: https://github.com/{REPO}/settings/rules")
    sys.exit(0)

print(f"Ruleset also failed (HTTP {rs_status}): {rs_body}")
print(
    "\nManual setup (no token needed):\n"
    f"  1. https://github.com/{REPO}/settings/branches\n"
    f"  2. Add rule for `{BRANCH}`\n"
    "  3. Enable: Require pull request, Require approval from CODEOWNERS\n"
    "  4. Disable: 'Include administrators' (so you bypass rules)\n"
    "  5. Enable: Block force pushes, Block deletions\n"
    f"  6. CODEOWNERS already sets * @{OWNER}\n"
)
sys.exit(1)
