# User Guide

This guide will help you use and maintain this multilingual documentation site.

## Adding New Documentation

### Chinese Documentation

1. Create new Markdown files in the `docs/source/zh_CN/` directory
2. Add links in `index.md` or other pages

### English Documentation

1. Create new Markdown files in the `docs/source/en/` directory
2. Keep filenames and structure consistent with Chinese version

## Building Multilingual Documentation

### Extract Translation Strings

```bash
cd docs
sphinx-build -b gettext source locale
```

### Generate Translation Files

```bash
sphinx-intl update -p locale -l en
```

### Translate Content

Edit the `locale/en/LC_MESSAGES/docs.po` file for translation.

### Build Documentation

```bash
make html
```

## Theme Configuration

Theme configuration is in the `docs/source/conf.py` file:

```python
html_theme = 'sphinx_rtd_theme'
html_theme_options = {
    'display_version': True,
    'prev_next_buttons_location': 'both',
}
```

## Extended Features

### Code Highlighting

```python
print("Hello, World!")
```

### Table Support

| Feature | Description |
|---------|-------------|
| Markdown | Supported using MyST-Parser |
| Multilingual | Implemented with sphinx-intl |
| Theme | sphinx-rtd-theme |

### Alert Boxes

!!! note
    This is a note

!!! warning
    This is a warning

!!! tip
    This is a tip
