
function initThemeAndLanguageSwitchers() {
  var body = document.body;
  
  var themeSwitcher = document.createElement('div');
  themeSwitcher.className = 'theme-switcher';
  themeSwitcher.innerHTML = `
    <button id="theme-toggle" class="theme-toggle-btn" onclick="toggleTheme()" title="切换主题">
      <svg id="theme-icon-sun" class="theme-icon theme-icon-sun" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <svg id="theme-icon-moon" class="theme-icon theme-icon-moon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
  `;

  var langSwitcher = document.createElement('div');
  langSwitcher.className = 'language-switcher';
  var currentPath = window.location.pathname;
  var pathParts = currentPath.split('/');
  var currentLang = pathParts.find(function(part) {
    return part === 'en' || part === 'zh_CN';
  }) || 'zh_CN';

  langSwitcher.innerHTML = `
    <select id="lang-selector" class="lang-selector" onchange="switchLanguage()" title="切换语言">
      <option value="en" ${currentLang === 'en' ? 'selected' : ''}>English</option>
      <option value="zh_CN" ${currentLang === 'zh_CN' ? 'selected' : ''}>中文</option>
    </select>
  `;

  var sideScroll = document.querySelector('.wy-side-scroll');
  if (sideScroll) {
    sideScroll.appendChild(themeSwitcher);
    sideScroll.appendChild(langSwitcher);
  }

  var savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
  } else {
    body.classList.add('light-mode');
  }
}

function toggleTheme() {
  var body = document.body;
  var isDark = body.classList.contains('dark-mode');
  
  if (isDark) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  }
}

function switchLanguage() {
  var lang = document.getElementById('lang-selector').value;
  var currentPath = window.location.pathname;
  var pathParts = currentPath.split('/');
  
  var langIndex = pathParts.findIndex(function(part) {
    return part === 'en' || part === 'zh_CN';
  });
  
  if (langIndex !== -1) {
    pathParts[langIndex] = lang;
  } else {
    pathParts.unshift(lang);
  }
  
  var newPath = pathParts.join('/');
  window.location.href = newPath;
}

document.addEventListener('DOMContentLoaded', initThemeAndLanguageSwitchers);
