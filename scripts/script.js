/*(function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    setTheme(theme);
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = [...document.documentElement.classList]
    .find((cn) => cn.startsWith('theme-'))
    ?.replace('theme-', '');
  const themeButtons = [
    ...document.querySelectorAll('.header__theme-menu-button'),
  ];
  setActiveButton(themeButtons, currentTheme);

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const chosenTheme = [...button.classList]
        .find((cn) => cn.includes('_type_'))
        .split('_type_')[1];
      setTheme(chosenTheme);
      setActiveButton(themeButtons, chosenTheme);
    });
  });
});

function setTheme(theme) {
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}

function setActiveButton(buttonsArray, theme) {
  buttonsArray.forEach((button) => {
    button.classList.remove('header__theme-menu-button_active');
    button.removeAttribute('disabled');
  });
  const target = buttonsArray.find((button) =>
    button.classList.contains(`header__theme-menu-button_type_${theme}`)
  );
  if (target) {
    target.classList.add('header__theme-menu-button_active');
    target.setAttribute('disabled', true);
  } else {
    const autoButton = document.querySelector(
      '.header__theme-menu-button_type_auto'
    );
    autoButton.classList.add('header__theme-menu-button_active');
    autoButton.setAttribute('disabled', true);
  }
}*/
/*(function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme && theme !== 'auto') {
    setTheme(theme);
  } else {
    // Если нет темы или 'auto' — проверяем системную предпочтительную тему
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight ? 'light' : 'dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = [...document.documentElement.classList]
    .find((cn) => cn.startsWith('theme-'))
    ?.replace('theme-', '') || 'auto';  // Если нет класса — считаем 'auto'
  const themeButtons = [
    ...document.querySelectorAll('.header__theme-menu-button'),
  ];
  setActiveButton(themeButtons, currentTheme);

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      let chosenTheme = [...button.classList]
        .find((cn) => cn.includes('_type_'))
        .split('_type_')[1];
      if (chosenTheme === 'auto') {
        // Для 'auto' — сбрасываем класс и сохраняем 'auto'
        document.documentElement.className = '';
        localStorage.setItem('theme', 'auto');
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        chosenTheme = prefersLight ? 'light' : 'dark';  // Для активации кнопки используем текущую
      } else {
        setTheme(chosenTheme);
      }
      setActiveButton(themeButtons, chosenTheme);
    });
  });
});

function setTheme(theme) {
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}

function setActiveButton(buttonsArray, theme) {
  buttonsArray.forEach((button) => {
    button.classList.remove('header__theme-menu-button_active');
    button.removeAttribute('disabled');
  });
  const target = buttonsArray.find((button) =>
    button.classList.contains(`header__theme-menu-button_type_${theme}`)
  );
  if (target) {
    target.classList.add('header__theme-menu-button_active');
    target.setAttribute('disabled', true);
  } else {
    const autoButton = document.querySelector(
      '.header__theme-menu-button_type_auto'
    );
    autoButton.classList.add('header__theme-menu-button_active');
    autoButton.setAttribute('disabled', true);
  }
}*/
(function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme && savedTheme !== 'auto') {
    setTheme(savedTheme);
  } else {
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    setTheme(prefersLight ? 'light' : 'dark');
    localStorage.setItem('theme', 'auto');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const themeButtons = document.querySelectorAll('.header__theme-menu-button');

  const getCurrentTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved === 'auto' || !saved) {
      return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }
    return saved;
  };

  const currentTheme = getCurrentTheme();
  setActiveButton(currentTheme);

  themeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const type = [...button.classList].find(c => c.includes('_type_')).split('_type_')[1];

      if (type === 'auto') {
        document.documentElement.className = '';
        localStorage.setItem('theme', 'auto');
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        setActiveButton(prefersLight ? 'light' : 'dark');
      } else {
        setTheme(type);
        setActiveButton(type);
      }
    });
  });

  function setActiveButton(theme) {
    themeButtons.forEach(btn => {
      btn.classList.remove('header__theme-menu-button_active');
      btn.removeAttribute('disabled');
    });

    const activeBtn = document.querySelector(`.header__theme-menu-button_type_${theme}`);
    if (activeBtn) {
      activeBtn.classList.add('header__theme-menu-button_active');
      activeBtn.setAttribute('disabled', true);
    } else {
      const autoBtn = document.querySelector('.header__theme-menu-button_type_auto');
      autoBtn.classList.add('header__theme-menu-button_active');
      autoBtn.setAttribute('disabled', true);
    }
  }
});

function setTheme(theme) {
  document.documentElement.className = `theme-${theme}`;
  localStorage.setItem('theme', theme);
}
