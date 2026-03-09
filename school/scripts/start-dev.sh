#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SERVER_DIR="${ROOT_DIR}/server"
CLIENT_DIR="${ROOT_DIR}/client"
SYNC_SCRIPT="${ROOT_DIR}/scripts/sync-env.sh"
SERVER_SCRIPT="${SCHOOL_SERVER_SCRIPT:-start}"

if [[ ! -f "${SERVER_DIR}/.env" ]]; then
  echo "No school server .env found. Syncing from compiler env..."
  bash "${SYNC_SCRIPT}"
fi

if [[ ! -f "${CLIENT_DIR}/.env.local" ]]; then
  echo "No client .env.local found. Creating from server env..."
  bash "${SYNC_SCRIPT}"
fi

if [[ ! -d "${SERVER_DIR}/node_modules" ]]; then
  echo "Installing server dependencies..."
  npm --prefix "${SERVER_DIR}" install
fi

if [[ ! -d "${CLIENT_DIR}/node_modules" ]]; then
  echo "Installing client dependencies..."
  npm --prefix "${CLIENT_DIR}" install
fi

cleanup() {
  if [[ -n "${SERVER_PID:-}" ]]; then
    kill "${SERVER_PID}" 2>/dev/null || true
  fi
}

trap cleanup EXIT INT TERM

echo "Starting school backend using npm script '${SERVER_SCRIPT}' ..."
npm --prefix "${SERVER_DIR}" run "${SERVER_SCRIPT}" &
SERVER_PID=$!

sleep 2
if ! kill -0 "${SERVER_PID}" 2>/dev/null; then
  echo "Backend failed to start. Check server logs above." >&2
  exit 1
fi

echo "Starting school frontend..."
npm --prefix "${CLIENT_DIR}" start
