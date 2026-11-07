const toggle = document.querySelector('.theme-toggle');
const media = window.matchMedia('(prefers-color-scheme: dark)');
const root = document.documentElement;

function applyTheme(theme) {
  root.dataset.theme = theme;
  root.dataset.mode = theme;
  document.querySelector('meta[name="color-scheme"]').content = theme;
}

function syncToggle() {
  toggle.setAttribute('aria-pressed',
    String(root.dataset.theme === 'dark'));
}

applyTheme(root.dataset.theme || root.dataset.mode || (media.matches ? 'dark' : 'light'));

syncToggle();
toggle.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark'
    ? 'light' : 'dark';
  applyTheme(theme);
  syncToggle();
  try { sessionStorage.setItem('mode', theme); } catch { /* storage unavailable */ }
});

media.addEventListener('change', event => {
  let saved;
  try { saved = sessionStorage.getItem('mode'); } catch { /* storage unavailable */ }
  if (!saved) {
    applyTheme(event.matches ? 'dark' : 'light');
    syncToggle();
  }
});

// Contents stay in the reading flow on small screens and in a desktop rail.
const contents = document.querySelector('#toc-wrapper');
if (contents) {
  const wide = window.matchMedia('(min-width: 951px)');
  contents.open = wide.matches;
  wide.addEventListener('change', event => { contents.open = event.matches; });
}
