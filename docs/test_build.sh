#!/bin/bash

# Test script for documentation build
# This script verifies that the documentation builds correctly

set -e

echo "==================================="
echo "Testing Documentation Build"
echo "==================================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if virtual environment is activated
if [ -z "$VIRTUAL_ENV" ]; then
    echo -e "${YELLOW}Virtual environment not activated. Activating...${NC}"
    if [ -f "../.venv/bin/activate" ]; then
        source ../.venv/bin/activate
    else
        echo -e "${RED}Error: Virtual environment not found${NC}"
        exit 1
    fi
fi

# Clean build
echo -e "\n${YELLOW}Cleaning previous build...${NC}"
make clean

# Build documentation
echo -e "\n${YELLOW}Building documentation...${NC}"
if make html; then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi

# Check if HTML files exist
echo -e "\n${YELLOW}Checking generated files...${NC}"

EXPECTED_FILES=(
    "build/html/index.html"
    "build/html/en/index.html"
    "build/html/en/guide.html"
    "build/html/en/features.html"
    "build/html/zh_CN/index.html"
    "build/html/zh_CN/guide.html"
    "build/html/zh_CN/features.html"
    "build/html/_static/css/custom.css"
    "build/html/_static/css/switcher.css"
    "build/html/_static/js/switcher.js"
)

ALL_EXIST=true
for file in "${EXPECTED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file"
    else
        echo -e "${RED}✗${NC} $file (missing)"
        ALL_EXIST=false
    fi
done

if [ "$ALL_EXIST" = true ]; then
    echo -e "\n${GREEN}==================================="
    echo "All tests passed!"
    echo "===================================${NC}"
    echo ""
    echo "To view the documentation, open:"
    echo "  - English: file://$(pwd)/build/html/en/index.html"
    echo "  - Chinese: file://$(pwd)/build/html/zh_CN/index.html"
    echo ""
    echo "Or run a local server:"
    echo "  cd build/html && python -m http.server 8000"
    exit 0
else
    echo -e "\n${RED}==================================="
    echo "Some tests failed!"
    echo "===================================${NC}"
    exit 1
fi
