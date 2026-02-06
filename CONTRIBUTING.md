# Contributing Guide

Thank you for your interest in contributing to this documentation project! This guide will help you get started.

## Getting Started

### Prerequisites

- Python 3.8 or higher
- Git
- A text editor or IDE

### Setup Development Environment

1. Fork and clone the repository:
```bash
git clone <your-fork-url>
cd <repository-name>
```

2. Create a virtual environment:
```bash
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Build the documentation:
```bash
cd docs
make html
```

5. Run tests:
```bash
./test_build.sh
```

## Project Structure

```
docs/
├── source/
│   ├── conf.py              # Sphinx configuration
│   ├── index.rst            # Main table of contents
│   ├── en/                  # English documentation
│   ├── zh_CN/               # Chinese documentation
│   ├── _static/             # Static assets (CSS, JS, images)
│   └── _templates/          # Custom Jinja2 templates
└── build/                   # Generated HTML output (git-ignored)
```

## Writing Documentation

### Adding a New Page

1. Create a Markdown file in the appropriate language directory:

**English**: `docs/source/en/my-page.md`
```markdown
# My Page Title

Content goes here...
```

**Chinese**: `docs/source/zh_CN/my-page.md`
```markdown
# 我的页面标题

内容在这里...
```

2. Add it to `docs/source/index.rst`:
```rst
.. toctree::
   :maxdepth: 2
   :caption: English Documentation:
   
   en/index
   en/guide
   en/features
   en/my-page

.. toctree::
   :maxdepth: 2
   :caption: 中文文档:
   
   zh_CN/index
   zh_CN/guide
   zh_CN/features
   zh_CN/my-page
```

3. Build and test:
```bash
make clean && make html
```

### Markdown Syntax

#### Headings

```markdown
# H1 Heading
## H2 Heading
### H3 Heading
```

#### Code Blocks

````markdown
```python
def hello():
    print("Hello, World!")
```
````

Supported languages: python, javascript, bash, text, json, yaml, html, css, and more.

#### Admonitions

```markdown
:::{note}
This is a note
:::

:::{tip}
This is a helpful tip
:::

:::{warning}
This is a warning
:::

:::{danger}
This is a critical warning
:::
```

#### Tables

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
```

#### Links

```markdown
[Link text](other-page.md)
[External link](https://example.com)
```

#### Images

```markdown
![Alt text](path/to/image.png)
```

#### Lists

```markdown
- Unordered item 1
- Unordered item 2
  - Nested item

1. Ordered item 1
2. Ordered item 2

- [x] Completed task
- [ ] Pending task
```

## Code Style

### Python (conf.py)

- Use 4 spaces for indentation
- Follow PEP 8 guidelines
- Add comments for complex configurations

### JavaScript (switcher.js)

- Use 4 spaces for indentation
- Use ES6+ features where appropriate
- Add JSDoc comments for functions
- Keep functions focused and small

### CSS (custom.css, switcher.css)

- Use CSS variables for colors and common values
- Organize by component
- Add comments for sections
- Support both light and dark themes

### Markdown

- Use ATX-style headings (`#` instead of underlines)
- One sentence per line for easier diffs
- Use fenced code blocks with language specification
- Use MyST syntax for directives

## Testing

Before submitting a pull request:

1. Clean build:
```bash
cd docs
make clean && make html
```

2. Run tests:
```bash
./test_build.sh
```

3. Check for build warnings:
```bash
make html 2>&1 | grep -i warning
```

4. Verify in browser:
```bash
cd build/html
python -m http.server 8000
```

## Submitting Changes

### Commit Messages

Use clear, descriptive commit messages:

- feat: Add new feature
- fix: Fix a bug
- docs: Update documentation
- style: Code style changes
- refactor: Code refactoring
- test: Add or update tests
- chore: Maintenance tasks

Examples:
```
feat: Add version switcher dropdown
fix: Correct language detection in subdirectories
docs: Update README with deployment instructions
style: Format JavaScript with consistent spacing
```

### Pull Request Process

1. Create a feature branch:
```bash
git checkout -b feature/my-feature
```

2. Make your changes and commit:
```bash
git add .
git commit -m "feat: Add my awesome feature"
```

3. Push to your fork:
```bash
git push origin feature/my-feature
```

4. Create a Pull Request with:
   - Clear title and description
   - Screenshots (if UI changes)
   - Link to related issues
   - Checklist of completed tasks

### Pull Request Checklist

- [ ] Code follows project style guidelines
- [ ] Documentation builds without errors
- [ ] Test script passes
- [ ] New features are documented
- [ ] Both EN and ZH versions updated (if applicable)
- [ ] Commit messages are clear
- [ ] Branch is up to date with main

## Common Issues

### Build Errors

**Problem**: `No module named sphinx`
**Solution**: Activate virtual environment and install dependencies

**Problem**: `WARNING: Lexing literal_block`
**Solution**: Use `text` language for file tree structures

**Problem**: `unsupported theme option`
**Solution**: Check sphinx-rtd-theme documentation for supported options

### Theme Issues

**Problem**: Theme not persisting
**Solution**: Check localStorage in browser console

**Problem**: Styles not applying
**Solution**: Clear browser cache and rebuild docs

### Language Switcher

**Problem**: Language switch goes to wrong page
**Solution**: Ensure filenames match between `en/` and `zh_CN/` directories

## Questions?

If you have questions:
- Open an issue on GitHub
- Check existing issues and discussions
- Review the documentation

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

Thank you for contributing! 🎉
