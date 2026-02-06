function setTheme(theme) {
    const sidebar = document.querySelector('.wy-nav-side');
    const contentWrap = document.querySelector('.wy-nav-content-wrap');
    const content = document.querySelector('.wy-nav-content');
    const searchBox = document.querySelector('.wy-side-nav-search');
    const documentBody = document.querySelector('[role="main"]');
    
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
        sidebar.style.background = 'var(--sidebar-bg)';
        contentWrap.style.background = 'var(--sidebar-bg)';
        content.style.background = 'var(--content-bg)';
        content.style.color = 'var(--content-text)';
        searchBox.style.background = 'var(--search-box-bg)';
        
        if (documentBody) {
            documentBody.style.background = 'var(--content-bg)';
        }
        
        document.querySelectorAll('.wy-menu-vertical a').forEach(el => {
            el.style.color = 'var(--sidebar-text)';
        });
        
        document.querySelectorAll('.rst-content .admonition, .rst-content .note, .rst-content .warning').forEach(el => {
            el.style.background = 'var(--admonition-bg)';
            el.style.borderColor = 'var(--admonition-border)';
        });
        
        document.querySelectorAll('.rst-content table').forEach(el => {
            el.style.background = 'var(--table-bg)';
        });
        
        document.querySelectorAll('.rst-content code, .rst-content pre').forEach(el => {
            el.style.background = 'var(--code-bg)';
            el.style.color = 'var(--code-text)';
        });
        
        document.querySelectorAll('.rst-content blockquote').forEach(el => {
            el.style.background = 'var(--blockquote-bg)';
            el.style.borderLeftColor = 'var(--blockquote-border)';
        });
        
        localStorage.setItem('theme', 'dark');
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) {
            themeIcon.innerHTML = '🌙';
        }
    } else {
        document.body.classList.remove('dark-theme');
        sidebar.style.background = '';
        contentWrap.style.background = '';
        content.style.background = '';
        content.style.color = '';
        searchBox.style.background = '';
        
        if (documentBody) {
            documentBody.style.background = '';
        }
        
        document.querySelectorAll('.wy-menu-vertical a').forEach(el => {
            el.style.color = '';
        });
        
        document.querySelectorAll('.rst-content .admonition, .rst-content .note, .rst-content .warning').forEach(el => {
            el.style.background = '';
            el.style.borderColor = '';
        });
        
        document.querySelectorAll('.rst-content table').forEach(el => {
            el.style.background = '';
        });
        
        document.querySelectorAll('.rst-content code, .rst-content pre').forEach(el => {
            el.style.background = '';
            el.style.color = '';
        });
        
        document.querySelectorAll('.rst-content blockquote').forEach(el => {
            el.style.background = '';
            el.style.borderLeftColor = '';
        });
        
        localStorage.setItem('theme', 'light');
        const themeIcon = document.getElementById('theme-icon');
        if (themeIcon) {
            themeIcon.innerHTML = '☀️';
        }
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
}

function toggleLanguageDropdown() {
    const dropdown = document.querySelector('.language-dropdown');
    const icon = document.querySelector('.switcher-icon');
    
    if (dropdown && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        if (icon) {
            icon.classList.remove('active');
        }
    } else {
        if (dropdown) {
            dropdown.classList.add('show');
        }
        if (icon) {
            icon.classList.add('active');
        }
    }
}

function filterMenuByLanguage() {
    const currentPath = window.location.pathname;
    const isZh = currentPath.includes('/zh_CN/');
    
    const captions = document.querySelectorAll('.wy-menu-vertical p.caption');
    
    captions.forEach(caption => {
        const text = caption.textContent;
        const parentUl = caption.nextElementSibling;
        
        if (parentUl) {
            if (isZh) {
                if (text.includes('English')) {
                    caption.style.display = 'none';
                    parentUl.style.display = 'none';
                } else if (text.includes('中文')) {
                    caption.style.display = 'block';
                    parentUl.style.display = 'block';
                }
            } else {
                if (text.includes('中文')) {
                    caption.style.display = 'none';
                    parentUl.style.display = 'none';
                } else if (text.includes('English')) {
                    caption.style.display = 'block';
                    parentUl.style.display = 'block';
                }
            }
        }
    });
}

function updateSearchForm() {
    const searchForm = document.getElementById('rtd-search-form');
    if (searchForm) {
        searchForm.action = '../../search.html';
    }
}

function copyCode(button) {
    const highlightDiv = button.closest('.highlight');
    const preElement = highlightDiv.querySelector('pre');
    const textToCopy = preElement ? preElement.textContent : '';
    
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        
        if (successful) {
            button.textContent = 'Copied!';
            button.classList.add('copied');
            
            setTimeout(function() {
                button.textContent = 'Copy';
                button.classList.remove('copied');
            }, 2000);
        }
    } catch (err) {
        document.body.removeChild(textarea);
        console.error('Copy failed:', err);
        alert('复制失败，请手动复制');
    }
}

function toggleLineNumbers(button) {
    const highlightDiv = button.closest('.highlight');
    
    if (highlightDiv && highlightDiv.classList.contains('with-lines')) {
        highlightDiv.classList.remove('with-lines');
        
        const lineNumberDiv = highlightDiv.querySelector('.line-number');
        if (lineNumberDiv) {
            lineNumberDiv.remove();
        }
        
        button.classList.remove('active');
    } else {
        if (highlightDiv) {
            highlightDiv.classList.add('with-lines');
            
            const preElement = highlightDiv.querySelector('pre');
            if (preElement) {
                const lineNumberDiv = document.createElement('div');
                lineNumberDiv.className = 'line-number';
                
                const lines = preElement.textContent.split('\n');
                lines.forEach((line, index) => {
                    if (index < lines.length) {
                        const lineNum = document.createElement('span');
                        lineNum.className = 'line-num';
                        lineNum.textContent = (index + 1);
                        lineNum.style.display = 'block';
                        lineNum.style.height = '1.6em';
                        lineNum.style.lineHeight = '1.6';
                        lineNumberDiv.appendChild(lineNum);
                    }
                });
                
                highlightDiv.insertBefore(lineNumberDiv, preElement);
            }
            
            button.classList.add('active');
        }
    }
}

function addCopyButtons() {
    document.querySelectorAll('div.highlight').forEach(highlightDiv => {
        if (!highlightDiv.querySelector('.highlight-buttons')) {
            const buttonContainer = document.createElement('div');
            buttonContainer.className = 'highlight-buttons';
            
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.textContent = 'Copy';
            copyButton.addEventListener('click', function() {
                copyCode(this);
            });
            
            const lineButton = document.createElement('button');
            lineButton.className = 'line-button';
            lineButton.textContent = 'Line';
            lineButton.addEventListener('click', function() {
                toggleLineNumbers(this);
            });
            
            buttonContainer.appendChild(copyButton);
            buttonContainer.appendChild(lineButton);
            
            highlightDiv.style.position = 'relative';
            highlightDiv.appendChild(buttonContainer);
        }
    });
}

document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.language-dropdown');
    const icon = document.querySelector('.switcher-icon');
    
    if (dropdown && !dropdown.contains(event.target) && icon && !icon.contains(event.target)) {
        dropdown.classList.remove('show');
        icon.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    const currentPath = window.location.pathname;
    const isZh = currentPath.includes('/zh_CN/');
    
    const langIcon = document.getElementById('lang-icon');
    if (langIcon) {
        langIcon.innerHTML = isZh ? '🇨🇳' : '🇺🇸';
    }
    
    filterMenuByLanguage();
    updateSearchForm();
    addCopyButtons();
});
