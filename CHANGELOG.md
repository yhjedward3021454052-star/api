# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0] - 2026-02-06

### Added
- ✨ Complete multilingual documentation system with English and Chinese support
- 🎨 Dark/Light theme switcher with localStorage persistence
- 🔄 Dynamic language switcher that maintains current page context
- 📋 Copy to clipboard functionality for all code blocks
- 🔢 Toggle line numbers for code blocks
- 🎯 Enhanced code syntax highlighting for multiple languages
- 📝 Full MyST-Parser support for Markdown features
- 🎭 Admonitions: note, tip, warning, and danger callouts
- 📊 Table support with alignment options
- ✅ Task list support with checkboxes
- 🔍 Built-in full-text search functionality
- 📱 Responsive design for mobile devices
- 🎨 Custom CSS with theme-aware CSS variables
- 📦 Comprehensive test script (`test_build.sh`)
- 📚 Feature showcase page with all available formatting options
- 📖 Detailed README with usage instructions
- 📄 requirements.txt for easy dependency installation

### Features Implemented (Godot-like)
- Theme toggling (dark/light mode)
- Language switching between pages
- Code block enhancements (copy button, line numbers)
- Collapsible navigation
- Sticky navigation
- Proper admonition styling
- Mobile-responsive sidebar
- Search functionality
- Breadcrumb navigation
- Previous/Next page navigation

### Configuration
- `docs/source/conf.py`: Sphinx configuration with MyST extensions
- `docs/source/_static/css/custom.css`: Theme variables and custom styles
- `docs/source/_static/css/switcher.css`: Switcher UI and code block styling
- `docs/source/_static/js/switcher.js`: All JavaScript functionality
- `docs/source/_templates/layout.html`: Template override for custom assets
- `docs/source/_templates/searchbox.html`: Custom searchbox with switchers

### Documentation Structure
```
docs/
├── source/
│   ├── conf.py
│   ├── index.rst
│   ├── en/
│   │   ├── index.md
│   │   ├── guide.md
│   │   └── features.md
│   ├── zh_CN/
│   │   ├── index.md
│   │   ├── guide.md
│   │   └── features.md
│   ├── _static/
│   │   ├── css/
│   │   │   ├── custom.css
│   │   │   └── switcher.css
│   │   └── js/
│   │       └── switcher.js
│   └── _templates/
│       ├── layout.html
│       └── searchbox.html
└── build/
    └── html/
```

### Fixed
- ✅ Code block tree structure warnings (use `text` language)
- ✅ Admonition syntax (use MyST `:::` syntax)
- ✅ Language detection based on URL path
- ✅ Theme persistence across page loads
- ✅ Button styling for code blocks
- ✅ Smooth transitions for theme switching
- ✅ Navigation menu filtering by language
- ✅ Build warnings eliminated

### Technical Stack
- Sphinx 9.1.0
- sphinx-rtd-theme 3.1.0
- MyST-Parser 5.0.0
- Python 3.12.3

### Testing
- Build succeeds without errors or warnings
- All HTML pages generated correctly
- Static assets (CSS/JS) copied properly
- Both language versions build successfully
- Theme switcher works correctly
- Language switcher maintains page context
- Code copy/line number features functional
- Search functionality operational

### Next Steps (Future Enhancements)
- [ ] Version switcher (like Godot docs)
- [ ] PDF generation
- [ ] EPUB generation
- [ ] More language support
- [ ] Custom logo support
- [ ] GitHub Actions CI/CD
- [ ] Automated deployment to GitHub Pages
- [ ] API documentation generation
- [ ] Video embedding support
- [ ] Mermaid diagram support

## Notes

This release provides a fully functional multilingual documentation system that emulates the key features of the Godot Engine documentation, including:
- Professional theme switching
- Seamless language navigation
- Enhanced code block interactions
- Comprehensive content formatting
- Mobile-responsive design
- Fast and reliable search

All features have been tested and verified to work correctly.
