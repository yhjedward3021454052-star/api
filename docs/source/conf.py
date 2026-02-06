# Configuration file for the Sphinx documentation builder.
import os
import sys

sys.path.insert(0, os.path.abspath('.'))

project = 'Multilingual Documentation Site'
copyright = '2026, MonkeyCode'
author = 'MonkeyCode'

version = '1.0'
release = '1.0'

extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.viewcode',
    'sphinx.ext.intersphinx',
    'myst_parser',
]

# MyST-Parser configuration
myst_enable_extensions = [
    "colon_fence",
    "deflist",
    "dollarmath",
    "fieldlist",
    "html_admonition",
    "html_image",
    "replacements",
    "smartquotes",
    "substitution",
    "tasklist",
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

language = 'zh_CN'

source_suffix = {
    '.rst': 'restructuredtext',
    '.md': 'markdown',
}

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']

html_theme_options = {
    'prev_next_buttons_location': 'both',
    'navigation_depth': 4,
    'collapse_navigation': False,
    'sticky_navigation': True,
    'includehidden': True,
    'titles_only': False,
    'logo_only': False,
    'style_nav_header_background': '#2980B9',
}

pygments_style = 'dracula'
highlight_language = 'python'

html_context = {
    'current_language': 'zh_CN',
    'languages': [
        ('en', 'English'),
        ('zh_CN', '中文'),
    ],
    'display_github': True,
    'github_user': 'yhjedward3021454052-star',
    'github_repo': 'api',
    'github_version': 'main',
    'conf_py_path': '/docs/source/',
}

html_sidebars = {
    '**': [
        'relations.html',
        'searchbox.html',
    ],
}

def setup(app):
    app.add_css_file('css/custom.css')
    app.add_css_file('css/switcher.css')
    app.add_js_file('js/switcher.js')
