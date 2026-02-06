function setTheme(theme) {
    const sidebar = document.querySelector('.wy-nav-side');
    const content = document.querySelector('.wy-nav-content');
    const searchBox = document.querySelector('.wy-side-nav-search');
    
    if (theme === 'dark') {
        sidebar.style.background = '#2d2d2d';
        content.style.background = '#1e1e1e';
        content.style.color = '#e0e0e0';
        searchBox.style.background = '#1e1e1e';
        document.querySelectorAll('.wy-menu-vertical a').forEach(el => {
            el.style.color = '#b0b0b0';
        });
        localStorage.setItem('theme', 'dark');
        document.getElementById('theme-icon').innerHTML = '🌙';
    } else {
        sidebar.style.background = '';
        content.style.background = '';
        content.style.color = '';
        searchBox.style.background = '';
        document.querySelectorAll('.wy-menu-vertical a').forEach(el => {
            el.style.color = '';
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
});
