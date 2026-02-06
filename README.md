# Sphinx Multilingual Documentation Site

A modern multilingual documentation website built with Sphinx, featuring language switching and theme toggling similar to [Godot Engine documentation](https://docs.godotengine.org/en/stable/).

## ✨ Features

- 🌍 **Multilingual Support**: Separate documentation for English (en) and Chinese (zh_CN)
- 🎨 **Theme Switcher**: Dark/Light mode toggle with persistent localStorage
- 🔄 **Language Switcher**: Smooth switching between languages on the same page
- 📝 **Markdown Support**: Write documentation in Markdown using MyST-Parser
- 🎯 **Code Highlighting**: Syntax highlighting for multiple programming languages
- 📋 **Copy to Clipboard**: One-click code copying with visual feedback
- 🔢 **Line Numbers**: Toggle line numbers for code blocks
- 🔍 **Built-in Search**: Full-text search across all documentation
- 📱 **Responsive Design**: Mobile-friendly interface
- 🎭 **Admonitions**: Note, tip, warning, and danger callouts
- 📊 **Tables**: Full table support with alignment
- ✅ **Task Lists**: Checkbox lists for todos
- 🔗 **Internal Links**: Easy navigation between pages

## 🚀 Quick Start

### Requirements

- Python 3.8+
- pip or uv

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-name>
```

2. Create and activate virtual environment:
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

Or using `uv`:
```bash
uv venv
source .venv/bin/activate
```

3. Install dependencies:
```bash
pip install sphinx sphinx-rtd-theme myst-parser
```

Or using `uv`:
```bash
uv pip install sphinx sphinx-rtd-theme myst-parser
```

### Build Documentation

```bash
cd docs
make html
```

### View Documentation

Open the generated HTML files in your browser:

- **Main page**: `docs/build/html/index.html`
- **English**: `docs/build/html/en/index.html`
- **Chinese**: `docs/build/html/zh_CN/index.html`

Or serve locally with Python:

```bash
cd docs/build/html
python -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

### Test Build

Run the test script to verify everything works:

```bash
cd docs
./test_build.sh
```

## 📁 Project Structure

```
.
├── docs/
│   ├── source/
│   │   ├── conf.py              # Sphinx configuration
│   │   ├── index.rst            # Main TOC with all languages
│   │   ├── en/                  # English documentation
│   │   │   ├── index.md
│   │   │   ├── guide.md
│   │   │   └── features.md
│   │   ├── zh_CN/               # Chinese documentation
│   │   │   ├── index.md
│   │   │   ├── guide.md
│   │   │   └── features.md
│   │   ├── _static/             # Static assets
│   │   │   ├── css/
│   │   │   │   ├── custom.css   # Theme variables
│   │   │   │   └── switcher.css # Switcher styling
│   │   │   └── js/
│   │   │       └── switcher.js  # All JavaScript functionality
│   │   └── _templates/          # Custom templates
│   │       ├── layout.html      # Includes custom CSS/JS
│   │       └── searchbox.html   # Custom searchbox with switchers
│   ├── build/                   # Generated HTML output
│   ├── Makefile
│   └── test_build.sh            # Test script
├── .venv/                       # Virtual environment
├── .gitignore
└── README.md
```

## 📝 Adding New Documentation

### English Documentation

1. Create a new Markdown file in `docs/source/en/`:
```bash
touch docs/source/en/new-page.md
```

2. Add content using Markdown and MyST syntax

3. Update `docs/source/index.rst` to include the new page:
```rst
.. toctree::
   :maxdepth: 2
   :caption: English Documentation:
   
   en/index
   en/guide
   en/features
   en/new-page
```

### Chinese Documentation

Follow the same process in `docs/source/zh_CN/` and keep filenames consistent with the English version for language switching to work properly.

## 🎨 Theme Configuration

Edit `docs/source/conf.py` to customize:

```python
html_theme_options = {
    'prev_next_buttons_location': 'both',
    'navigation_depth': 4,
    'collapse_navigation': False,
    'sticky_navigation': True,
}
```

### Color Scheme

Customize colors in `docs/source/_static/css/custom.css`:

- Dark theme: `:root` CSS variables
- Light theme: `body.light-theme` CSS variables

## ✍️ Writing Documentation

### Code Blocks

Use fenced code blocks with language specification:

\`\`\`python
def hello():
    print("Hello, World!")
\`\`\`

### Admonitions

Use MyST syntax for admonitions:

```markdown
:::{note}
This is a note
:::

:::{tip}
This is a tip
:::

:::{warning}
This is a warning
:::

:::{danger}
This is a danger warning
:::
```

### Tables

Standard Markdown tables are supported:

```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data 1   | Data 2   | Data 3   |
```

### Task Lists

```markdown
- [x] Completed task
- [ ] Pending task
```

### Internal Links

```markdown
[Link text](other-page.md)
[Section link](page.md#section-name)
```

## 🔧 Development

### Clean Build

```bash
cd docs
make clean
make html
```

### Watch Mode (Optional)

Install sphinx-autobuild:

```bash
pip install sphinx-autobuild
```

Run:

```bash
cd docs
sphinx-autobuild source build/html
```

## 🌐 Deployment

The documentation is static HTML and can be deployed to:

- **GitHub Pages**: Copy `docs/build/html/` to your gh-pages branch
- **GitLab Pages**: Use the `.gitlab-ci.yml` configuration
- **Netlify**: Deploy the `docs/build/html/` directory
- **Vercel**: Deploy the `docs/build/html/` directory
- **Any static hosting**: Just upload the `docs/build/html/` folder

### GitHub Pages Example

```bash
cd docs
make html
cd build/html
git init
git add .
git commit -m "Deploy documentation"
git branch -M gh-pages
git remote add origin <your-repo-url>
git push -f origin gh-pages
```

## 🧪 Testing

Run the test script to verify the build:

```bash
cd docs
./test_build.sh
```

The script checks:
- ✅ Build succeeds without errors
- ✅ All expected HTML files are generated
- ✅ Static assets (CSS/JS) are copied
- ✅ Both language versions are built

## 🛠️ Technical Stack

- **[Sphinx](https://www.sphinx-doc.org/)**: Documentation generator
- **[MyST-Parser](https://myst-parser.readthedocs.io/)**: Markdown support for Sphinx
- **[sphinx-rtd-theme](https://sphinx-rtd-theme.readthedocs.io/)**: Read the Docs theme
- **Custom JavaScript**: Theme and language switching
- **CSS Variables**: Dynamic theming

## 🎯 Features Comparison with Godot Docs

| Feature | This Project | Godot Docs | Status |
|---------|-------------|------------|--------|
| Multilingual | ✅ | ✅ | ✅ |
| Theme Switcher | ✅ | ✅ | ✅ |
| Language Switcher | ✅ | ✅ | ✅ |
| Code Highlighting | ✅ | ✅ | ✅ |
| Copy Code Button | ✅ | ✅ | ✅ |
| Line Numbers Toggle | ✅ | ✅ | ✅ |
| Search | ✅ | ✅ | ✅ |
| Responsive Design | ✅ | ✅ | ✅ |
| Version Switcher | ❌ | ✅ | Future |

## 📄 License

Copyright © 2026 MonkeyCode

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📚 References

- [Sphinx Documentation](https://www.sphinx-doc.org/)
- [MyST Parser Documentation](https://myst-parser.readthedocs.io/)
- [Godot Engine Documentation](https://docs.godotengine.org/en/stable/)
- [Read the Docs Theme](https://sphinx-rtd-theme.readthedocs.io/)

## 💡 Tips

1. **Keep filenames consistent** between languages for the language switcher to work
2. **Use `text` language** for file tree structures to avoid syntax highlighting errors
3. **Test regularly** with `./test_build.sh` to catch issues early
4. **Use MyST syntax** for admonitions instead of markdown-it-py syntax
5. **Check the features page** for examples of all available formatting options

---

Made with ❤️ using Sphinx and MyST-Parser
