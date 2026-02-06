# Welcome to Multilingual Documentation Site

This is an example of a multilingual documentation site built with Sphinx, supporting language switching.

## Features

- Multilingual support (English / 中文)
- Written in Markdown
- Responsive theme design
- Modern documentation interface

## Quick Start

### Install Dependencies

```bash
pip install --break-system-packages sphinx sphinx-intl sphinx-rtd-theme myst-parser
```

### Build Documentation

```bash
make html
```

### View Documentation

Open `build/en/html/index.html` for English or `build/zh_CN/html/index.html` for Chinese.

## Documentation Structure

```
.
├── Makefile
├── source/
│   ├── conf.py
│   ├── index.md
│   └── guide.md
└── build/
    ├── en/
    └── zh_CN/
```

## Tech Stack

- **Sphinx**: Documentation framework
- **MyST-Parser**: Markdown parser
- **sphinx-rtd-theme**: Read the Docs theme
- **sphinx-intl**: Multilingual support

## User Guide

See [User Guide](guide.md).

---

Copyright © 2026 MonkeyCode
