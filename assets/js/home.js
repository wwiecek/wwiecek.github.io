const toggle = document.querySelector('.theme-toggle');
const media = window.matchMedia('(prefers-color-scheme: dark)');

function syncToggle() {
  toggle.setAttribute('aria-pressed',
    String(document.documentElement.dataset.theme === 'dark'));
}

syncToggle();
toggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark'
    ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  syncToggle();
  try { sessionStorage.setItem('mode', theme); } catch { /* storage unavailable */ }
});

media.addEventListener('change', event => {
  let saved;
  try { saved = sessionStorage.getItem('mode'); } catch { /* storage unavailable */ }
  if (!saved) {
    document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
    syncToggle();
  }
});
