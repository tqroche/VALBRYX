#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_DIR="$ROOT_DIR/editable-static"
OUTPUT_ZIP="$ROOT_DIR/releases/Realtor-Website-Setup-dist-traditional-static.zip"
TMP_DIR="$ROOT_DIR/.tmp-static-package"
DIST_DIR="$TMP_DIR/dist"

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "Missing source directory: $SOURCE_DIR" >&2
  exit 1
fi

rm -rf "$TMP_DIR"
mkdir -p "$DIST_DIR" "$ROOT_DIR/releases"
cp -R "$SOURCE_DIR"/. "$DIST_DIR"/
# Keep legacy dist package contents clean (no maintenance docs served publicly).
rm -f "$DIST_DIR/README.md"

rm -f "$OUTPUT_ZIP"
(
  cd "$TMP_DIR"
  zip -r "$OUTPUT_ZIP" "dist"
)

rm -rf "$TMP_DIR"

echo "Created: $OUTPUT_ZIP"
