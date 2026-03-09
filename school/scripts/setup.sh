#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

echo "Installing school backend dependencies..."
npm --prefix "${ROOT_DIR}/server" install

echo "Installing school frontend dependencies..."
npm --prefix "${ROOT_DIR}/client" install

echo "Syncing environment from compiler app..."
bash "${ROOT_DIR}/scripts/sync-env.sh"

echo "Setup complete. From ${ROOT_DIR}, run: npm start"
