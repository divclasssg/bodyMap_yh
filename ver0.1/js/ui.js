(() => {
  const buttonToggle = document.querySelector('.button-toggle');
  const html = document.querySelector('html');

  buttonToggle.addEventListener('change', () => {
    if (buttonToggle.checked === true) html.dataset.darkMode = 'true';
    else if (buttonToggle.checked === false) html.dataset.darkMode = 'false';
  });
})();