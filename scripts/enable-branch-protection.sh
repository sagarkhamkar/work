#!/usr/bin/env bash
# Enable branch protection on main for sagarkhamkar/work
# Usage: GITHUB_TOKEN=ghp_xxx ./scripts/enable-branch-protection.sh
# Token needs classic "repo" scope, or fine-grained admin on this repo.

set -euo pipefail

REPO="${GITHUB_REPO:-sagarkhamkar/work}"
BRANCH="${GITHUB_BRANCH:-main}"

if [[ -z "${GITHUB_TOKEN:-}" ]]; then
  echo "Error: Set GITHUB_TOKEN first."
  echo "  export GITHUB_TOKEN=ghp_your_token_here"
  echo "  ./scripts/enable-branch-protection.sh"
  exit 1
fi

echo "Protecting ${REPO} branch ${BRANCH}..."

curl -sf -X PUT \
  -H "Authorization: Bearer ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  "https://api.github.com/repos/${REPO}/branches/${BRANCH}/protection" \
  -d '{
    "required_status_checks": null,
    "enforce_admins": true,
    "required_pull_request_reviews": null,
    "restrictions": null,
    "allow_force_pushes": false,
    "allow_deletions": false
  }'

echo ""
echo "Done. Verify at: https://github.com/${REPO}/settings/branches"
