# User Guide

This guide will help you use and maintain this multilingual documentation site.

## Adding New Documentation

### English Documentation

1. Create new Markdown files in the `en/source/` directory
2. Add links in `index.md` or other pages

### Chinese Documentation

1. Create new Markdown files in the `zh_CN/source/` directory
2. Keep filenames and structure consistent with English version

## Building Multilingual Documentation

### Build English Version

```bash
cd en
make html
```

### Build Chinese Version

```bash
cd zh_CN
make html
```

### Build All Versions

```bash
make all
```

## Theme Configuration

Theme configuration is in the `source/conf.py` file:

```python
html_theme = 'sphinx_rtd_theme'
html_theme_options = {
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
| Multilingual | Multiple language builds |
| Theme | sphinx-rtd-theme |

### Alert Boxes

:::{note}
This is a note
:::

:::{warning}
This is a warning
:::

:::{tip}
This is a tip
:::
