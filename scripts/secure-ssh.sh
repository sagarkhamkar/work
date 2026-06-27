#!/usr/bin/env bash
# Add a passphrase to your SSH key and load it into ssh-agent.
# Run: ./scripts/secure-ssh.sh

set -euo pipefail

KEY="${HOME}/.ssh/id_ed25519"

if [[ ! -f "$KEY" ]]; then
  echo "Error: SSH key not found at $KEY"
  exit 1
fi

echo "=== Step 1: Add passphrase to SSH key ==="
echo "You will be prompted for a NEW passphrase (choose a strong one)."
echo ""
ssh-keygen -p -f "$KEY"

echo ""
echo "=== Step 2: Start ssh-agent and add key ==="
eval "$(ssh-agent -s)"
ssh-add "$KEY"

echo ""
echo "=== Step 3: Test GitHub connection ==="
ssh -T git@github.com || true

echo ""
echo "=== Optional: persist agent across sessions ==="
echo "Add this to your ~/.bashrc if not already present:"
echo ""
cat <<'SNIPPET'

# SSH agent — load GitHub key once per login
if [ -z "${SSH_AUTH_SOCK:-}" ] || ! ssh-add -l >/dev/null 2>&1; then
  eval "$(ssh-agent -s)" >/dev/null
  ssh-add ~/.ssh/id_ed25519 2>/dev/null
fi
SNIPPET

echo ""
echo "Done. Your SSH key is now passphrase-protected."
