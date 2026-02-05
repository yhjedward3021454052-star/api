# Sphinx Multilingual Documentation Site

A multilingual documentation site built with Sphinx, featuring language switching similar to Godot Engine documentation.

## Features

- Separate builds for each language (en, zh_CN)
- Written in Markdown
- Modern sphinx-rtd-theme
- Responsive design
- Code highlighting
- Built-in search

## Quick Start

### Requirements

- Python 3.8+
- pip

### Install Dependencies

```bash
pip install --break-system-packages sphinx sphinx-intl sphinx-rtd-theme myst-parser
```

### Build All Languages

```bash
make all
```

Or build individual languages:

```bash
# Build English
cd en && make html

# Build Chinese
cd zh_CN && make html
```

### View Documentation

- English: `en/build/html/index.html`
- Chinese: `zh_CN/build/html/index.html`

## Project Structure

```
.
├── en/
│   ├── Makefile
│   ├── make.bat
│   └── source/
│       ├── conf.py
│       ├── index.rst
│       ├── index.md
│       └── guide.md
├── zh_CN/
│   ├── Makefile
│   ├── make.bat
│   └── source/
│       ├── conf.py
│       ├── index.rst
│       ├── index.md
│       └── guide.md
├── Makefile
└── README.md
```

## Adding New Documentation

### English Documentation

1. Create `.md` files in `en/source/`
2. Update `en/source/index.rst` to include new files in toctree

### Chinese Documentation

1. Create `.md` files in `zh_CN/source/`
2. Update `zh_CN/source/index.rst` to include new files in toctree

3. Keep filenames consistent between languages

## Language Switching

The documentation uses separate builds for each language, similar to Godot Engine documentation:

- `/en/` - English version
- `/zh_CN/` - Chinese version

## Tech Stack

- **Sphinx**: Documentation framework
- **MyST-Parser**: Markdown parser
- **sphinx-rtd-theme**: Read the Docs theme
- **sphinx-intl**: Multilingual support extension

## Configuration

Each language has its own `source/conf.py` with settings for:

- Project metadata (name, version)
- Language code
- Theme options
- Extensions

## Deployment

Build output directories:
- `en/build/html/` - English static site
- `zh_CN/build/html/` - Chinese static site

Deploy these directories to any static hosting service:

- GitHub Pages
- GitLab Pages
- Netlify
- Vercel

## License

Copyright © 2026 MonkeyCode
