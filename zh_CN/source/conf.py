# Configuration file for the Sphinx documentation builder.
import os
import sys

sys.path.insert(0, os.path.abspath('.'))

project = '多语言文档站点'
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
}

html_context = {
    'current_language': 'zh_CN',
    'languages': [
        ('zh_CN', '中文'),
        ('en', 'English'),
    ],
}

html_sidebars = {
    '**': [
        'theme_switcher.html',
        'language_switcher.html',
        'relations.html',
        'searchbox.html',
    ],
}

def setup(app):
    app.add_css_file('theme.css', priority=500)
    app.add_js_file('switcher.js', priority=500)
