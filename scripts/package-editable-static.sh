#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_DIR="$ROOT_DIR/editable-static"
OUTPUT_ZIP="$ROOT_DIR/releases/Realtor-Website-Setup-editable-static.zip"

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "Missing source directory: $SOURCE_DIR" >&2
  exit 1
fi

mkdir -p "$ROOT_DIR/releases"
rm -f "$OUTPUT_ZIP"

(
  cd "$ROOT_DIR"
  zip -r "$OUTPUT_ZIP" "editable-static"
)

echo "Created: $OUTPUT_ZIP"
