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

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

language = 'en'

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
    'current_language': 'en',
    'languages': [
        ('en', 'English'),
        ('zh_CN', '中文'),
    ],
}

html_sidebars = {
    '**': [
        'relations.html',
        'searchbox.html',
    ],
}
