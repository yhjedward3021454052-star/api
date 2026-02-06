function setTheme(theme) {
    const sidebar = document.querySelector('.wy-nav-side');
    const contentWrap = document.querySelector('.wy-nav-content-wrap');
    const content = document.querySelector('.wy-nav-content');
    const searchBox = document.querySelector('.wy-side-nav-search');
    const documentBody = document.querySelector('[role="main"]');
    
    if (theme === 'dark') {
        sidebar.style.background = '#2d2d2d';
        contentWrap.style.background = '#2d2d2d';
        content.style.background = '#1e1e1e';
        content.style.color = '#e0e0e0';
        searchBox.style.background = '#1e1e1e';
        
        if (documentBody) {
            documentBody.style.background = '#1e1e1e';
        }
        
        document.querySelectorAll('.wy-menu-vertical a').forEach(el => {
            el.style.color = '#b0b0b0';
        });
        
        document.querySelectorAll('.rst-content .admonition, .rst-content .note, .rst-content .warning').forEach(el => {
            el.style.background = '#2a2a2a';
            el.style.borderColor = '#444';
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
            el.style.borderLeftColor = '#666';
        });
        
        localStorage.setItem('theme', 'dark');
        document.getElementById('theme-icon').innerHTML = '🌙';
    } else {
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
        document.getElementById('theme-icon').innerHTML = '☀️';
    }
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
}

function toggleLanguageDropdown() {
    const dropdown = document.querySelector('.language-dropdown');
    const icon = document.querySelector('.switcher-icon');
    
    if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        icon.classList.remove('active');
    } else {
        dropdown.classList.add('show');
        icon.classList.add('active');
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

document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.language-dropdown');
    const icon = document.querySelector('.switcher-icon');
    
    if (!dropdown.contains(event.target) && !icon.contains(event.target)) {
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
    
    setTimeout(function() {
        const searchForm = document.getElementById('rtd-search-form');
        if (searchForm) {
            const searchInput = searchForm.querySelector('input[type="text"]');
            if (searchInput) {
                searchInput.value = '';
                searchForm.action = '../search.html';
            }
        }
    }, 500);
});
