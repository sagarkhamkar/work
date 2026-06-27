# Repository governance

## Owner & approver

**@sagarkhamkar** is the owner and sole code approver (see `.github/CODEOWNERS`).

## How changes work

| Who | Can push to `main` directly? | Needs approval? |
|-----|------------------------------|-----------------|
| **@sagarkhamkar** (repo owner/admin) | Yes | No |
| Anyone else with write access | No — must open a PR | Yes — @sagarkhamkar must approve |
| Read-only collaborators | No — fork & PR | Yes |

## Enable protection (one-time)

```bash
export GITHUB_TOKEN=ghp_your_token   # classic token with "repo" scope
./scripts/enable-branch-protection.sh
```

Or via GitHub UI: **Settings → Branches → Add rule for `main`**

- Require pull request before merging
- Require approval from CODEOWNERS
- **Do not** check “Include administrators” (lets you push freely)
- Block force pushes and deletions

## Adding collaborators safely

- **Trusted helpers (read only):** Settings → Collaborators → Read
- **Never give Admin** to anyone else
- Write access only if someone must push branches — they still cannot merge to `main` without your PR approval
