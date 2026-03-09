#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
COMPILER_ENV="${ROOT_DIR}/../compiler/backend/.env"
SERVER_ENV="${ROOT_DIR}/server/.env"
CLIENT_ENV="${ROOT_DIR}/client/.env.local"

if [[ ! -f "${COMPILER_ENV}" ]]; then
  echo "Missing compiler env file: ${COMPILER_ENV}" >&2
  exit 1
fi

cp "${COMPILER_ENV}" "${SERVER_ENV}"

mongo_uri="$(sed -n 's/^MONGO_URI=//p' "${SERVER_ENV}" | head -n 1)"
if [[ -n "${mongo_uri}" ]]; then
  tmp_file="$(mktemp)"
  awk -v uri="${mongo_uri}" '
    BEGIN { written = 0 }
    /^MONGODB_URI=/ {
      if (!written) {
        print "MONGODB_URI=" uri
        written = 1
      }
      next
    }
    { print }
    END {
      if (!written) {
        print "MONGODB_URI=" uri
      }
    }
  ' "${SERVER_ENV}" > "${tmp_file}"
  mv "${tmp_file}" "${SERVER_ENV}"
fi

server_port="$(sed -n 's/^PORT=//p' "${SERVER_ENV}" | head -n 1)"
if [[ -z "${server_port}" ]]; then
  server_port="5000"
fi

api_url="${SCHOOL_API_URL:-http://localhost:${server_port}}"
cat > "${CLIENT_ENV}" <<EOF
REACT_APP_API_URL=${api_url}
EOF

echo "Synced school env from compiler env."
echo "Server env: ${SERVER_ENV}"
echo "Client env: ${CLIENT_ENV} (REACT_APP_API_URL=${api_url})"
