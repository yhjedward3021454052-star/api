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
}

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
    pass
