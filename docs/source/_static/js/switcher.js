// Configuration
const CONFIG = {
    colors: {
        primary: '#007aff',
        success: '#28a745',
        danger: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8',
        light: '#f8f9fa',
        dark: '#1e1e1e',
        border: '#e1e4e8',
        text: '#2c3e50',
        muted: '#6c757d',
        darkBg: '#2d2d2d',
        codeBg: '#2a2a2a',
        codeText: '#e0e0e0',
        lineNumberBg: '#2a2a2a',
        lineNumberText: '#ffffff'
    }
};

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }
    
    init() {
        if (this.currentTheme === 'dark') {
            document.body.classList.remove('light-theme');
            this.applyDarkTheme();
        } else {
            document.body.classList.add('light-theme');
            this.applyLightTheme();
        }
        this.updateIcons();
    }
    
    applyDarkTheme() {
        document.body.classList.remove('light-theme');
        document.body.style.background = '#1e1e1e';
        document.body.style.color = '#e0e0e0';

        this.updateElementStyle('.wy-nav-side', { background: '#2d2d2d' });
        this.updateElementStyle('.wy-nav-content-wrap', { background: '#2d2d2d' });
        this.updateElementStyle('.wy-nav-content', { background: '#1e1e1e', color: '#e0e0e0' });
        this.updateElementStyle('.wy-side-nav-search', { background: '#1e1e1e' });

        document.querySelectorAll('.wy-menu-vertical a').forEach(el => {
            el.style.color = '#b0b0b0';
        });

        document.querySelectorAll('.rst-content .admonition').forEach(el => {
            el.style.background = '#2a2a2a';
            el.style.borderColor = '#444444';
        });

        document.querySelectorAll('.rst-content table').forEach(el => {
            el.style.background = '#2a2a2a';
        });

        document.querySelectorAll('.rst-content code, .rst-content pre').forEach(el => {
            el.style.background = '#2a2a2a';
            el.style.color = '#e0e0e0';
        });

        document.querySelectorAll('.rst-content blockquote').forEach(el => {
            el.style.background = '#2a2a2a';
            el.style.borderLeftColor = '#666666';
        });
    }
    
    applyLightTheme() {
        document.body.classList.add('light-theme');
        document.body.style.background = '#ffffff';
        document.body.style.color = '#2c3e50';
        this.updateElementStyle('.wy-nav-side', { background: '#ffffff' });
        this.updateElementStyle('.wy-nav-content-wrap', { background: '#ffffff' });
        this.updateElementStyle('.wy-nav-content', { background: '#ffffff', color: '#2c3e50' });
        this.updateElementStyle('.wy-side-nav-search', { background: '#ffffff' });
        
        document.querySelectorAll('.wy-menu-vertical a').forEach(el => {
            el.style.color = '';
        });
        
        document.querySelectorAll('.rst-content .admonition').forEach(el => {
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
    }
    
    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);

        if (theme === 'dark') {
            document.body.classList.remove('light-theme');
            this.applyDarkTheme();
            const icon = document.getElementById('theme-icon');
            if (icon) icon.innerHTML = '🌙';
        } else {
            document.body.classList.add('light-theme');
            this.applyLightTheme();
            const icon = document.getElementById('theme-icon');
            if (icon) icon.innerHTML = '☀️';
        }
    }
    
    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }
    
    updateElementStyle(selector, styles) {
        document.querySelectorAll(selector).forEach(el => {
            Object.assign(el.style, styles);
        });
    }
    
    updateIcons() {
        const langIcon = document.getElementById('lang-icon');
        if (langIcon) {
            const currentPath = window.location.pathname;
            const isZh = currentPath.includes('/zh_CN/');
            langIcon.innerHTML = isZh ? '🇨🇳' : '🇺🇸';
        }
    }
}

// Language Menu
class LanguageManager {
    constructor() {
        this.currentLanguage = this.detectLanguage();
        this.init();
    }
    
    detectLanguage() {
        const currentPath = window.location.pathname;
        if (currentPath.includes('/en/')) {
            return 'en';
        } else if (currentPath.includes('/zh_CN/')) {
            return 'zh_CN';
        }
        return localStorage.getItem('language') || 'zh_CN';
    }
    
    init() {
        this.updateIcons();
        this.filterMenu();
    }
    
    updateIcons() {
        const langIcon = document.getElementById('lang-icon');
        if (langIcon) {
            langIcon.innerHTML = this.currentLanguage === 'zh_CN' ? '🇨🇳' : '🇺🇸';
        }
    }
    
    filterMenu() {
        const captions = document.querySelectorAll('.wy-menu-vertical p.caption');
        
        captions.forEach(caption => {
            const text = caption.textContent;
            const parentUl = caption.nextElementSibling;
            
            if (parentUl) {
                if (text.includes('English')) {
                    if (this.currentLanguage === 'en') {
                        caption.style.display = 'block';
                        parentUl.style.display = 'block';
                    } else {
                        caption.style.display = 'none';
                        parentUl.style.display = 'none';
                    }
                } else if (text.includes('中文')) {
                    if (this.currentLanguage === 'zh_CN') {
                        caption.style.display = 'block';
                        parentUl.style.display = 'block';
                    } else {
                        caption.style.display = 'none';
                        parentUl.style.display = 'none';
                    }
                }
            }
        });
    }
    
    setLanguage(lang) {
        this.currentLanguage = lang;
        localStorage.setItem('language', lang);

        // Get the current page path
        const currentPath = window.location.pathname;

        // Detect current language from path
        let currentLang = '';
        if (currentPath.includes('/en/')) {
            currentLang = 'en';
        } else if (currentPath.includes('/zh_CN/')) {
            currentLang = 'zh_CN';
        }

        // If we're not on a language page, go to the language index
        if (!currentLang) {
            if (lang === 'zh_CN') {
                window.location.href = 'zh_CN/index.html';
            } else {
                window.location.href = 'en/index.html';
            }
            return;
        }

        // Build the new URL by replacing the language in the path
        const newPath = currentPath.replace('/' + currentLang + '/', '/' + lang + '/');
        window.location.href = newPath;
    }
}

// Search Manager
class SearchManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.updateSearchForms();
    }
    
    updateSearchForms() {
        const searchForms = document.querySelectorAll('#rtd-search-form');
        searchForms.forEach(form => {
            const currentPath = window.location.pathname;

            // Check if we're inside a language folder
            if (currentPath.includes('/en/') || currentPath.includes('/zh_CN/')) {
                // Find the position after the language folder
                const langMatch = currentPath.match(/\/(en|zh_CN)\//);
                if (langMatch) {
                    const langIndex = langMatch.index + langMatch[0].length;
                    const remainingPath = currentPath.substring(langIndex);

                    // Count how many directories are after the language folder
                    const depth = remainingPath ? (remainingPath.match(/\//g) || []).length : 0;

                    // Build the relative path: go up (depth + 1) levels to reach docs root
                    let relativePath = '';
                    for (let i = 0; i <= depth; i++) {
                        relativePath += '../';
                    }
                    form.action = relativePath + 'search.html';
                }
            } else {
                // Not in a language folder, search is at current level
                form.action = 'search.html';
            }
        });
    }
}

// Code Manager
class CodeManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.addCopyButtons();
        this.addLineButtons();
    }
    
    addCopyButtons() {
        document.querySelectorAll('div.highlight').forEach(highlightDiv => {
            if (!highlightDiv.querySelector('.highlight-buttons')) {
                this.createHighlightButtons(highlightDiv);
            }
        });
    }
    
    addLineButtons() {
        document.querySelectorAll('div.highlight').forEach(highlightDiv => {
            const lineButton = highlightDiv.querySelector('.line-button');
            if (lineButton) {
                this.setupLineButton(lineButton);
            }
        });
    }
    
    createHighlightButtons(highlightDiv) {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'highlight-buttons';
        
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.textContent = 'Copy';
        copyButton.addEventListener('click', (e) => {
            this.copyCode(e.target);
        });
        
        const lineButton = document.createElement('button');
        lineButton.className = 'line-button';
        lineButton.textContent = 'Line';
        lineButton.addEventListener('click', (e) => {
            this.toggleLineNumbers(e.target);
        });
        
        buttonContainer.appendChild(copyButton);
        buttonContainer.appendChild(lineButton);
        
        highlightDiv.style.position = 'relative';
        highlightDiv.appendChild(buttonContainer);
    }
    
    setupLineButton(lineButton) {
        const highlightDiv = lineButton.closest('.highlight');
        
        if (highlightDiv.classList.contains('with-lines')) {
            highlightDiv.classList.remove('with-lines');
            lineButton.classList.remove('active');
        } else {
            highlightDiv.classList.add('with-lines');
            lineButton.classList.add('active');
        }
    }
    
    copyCode(button) {
        const highlightDiv = button.closest('.highlight');
        const preElement = highlightDiv.querySelector('pre');
        const textToCopy = preElement ? preElement.textContent : '';
        
        if (!textToCopy.trim()) {
            console.log('Nothing to copy');
            return;
        }
        
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
                
                setTimeout(() => {
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
    
    toggleLineNumbers(button) {
        const highlightDiv = button.closest('.highlight');
        
        if (!highlightDiv) {
            return;
        }
        
        if (highlightDiv.classList.contains('with-lines')) {
            highlightDiv.classList.remove('with-lines');
            
            const lineNumberDiv = highlightDiv.querySelector('.line-number');
            if (lineNumberDiv) {
                lineNumberDiv.remove();
            }
            
            button.classList.remove('active');
        } else {
            highlightDiv.classList.add('with-lines');
            
            const preElement = highlightDiv.querySelector('pre');
            if (!preElement) {
                return;
            }
            
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
            button.classList.add('active');
        }
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('Switcher script loaded successfully');

    // Initialize all managers
    window.themeManager = new ThemeManager();
    window.languageManager = new LanguageManager();
    window.searchManager = new SearchManager();
    window.codeManager = new CodeManager();
});

document.addEventListener('click', (event) => {
    const dropdown = document.querySelector('.language-dropdown');
    const icon = document.querySelector('.switcher-icon');
    
    if (dropdown && !dropdown.contains(event.target) && icon && !icon.contains(event.target)) {
        dropdown.classList.remove('show');
        icon.classList.remove('active');
    }
});

// Global functions for HTML onclick attributes
function toggleTheme() {
    if (window.themeManager) {
        window.themeManager.toggleTheme();
    } else {
        console.error('Theme manager not initialized');
    }
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

function switchLanguage(lang) {
    if (window.languageManager) {
        window.languageManager.setLanguage(lang);
    } else {
        console.error('Language manager not initialized');
    }
}
