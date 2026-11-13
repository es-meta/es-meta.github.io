// Light/dark theme: follows the system by default, and the visitor can switch it
// with the button at the top right. The choice is remembered in localStorage;
// switching back to the system's theme forgets it, so the page follows the
// system again. Loaded in <head> (not deferred) to avoid a flash of the wrong theme.
(() => {
  const KEY = 'theme';
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  const load = () => { try { return localStorage.getItem(KEY); } catch { return null; } };
  const save = (value) => {
    try { value ? localStorage.setItem(KEY, value) : localStorage.removeItem(KEY); } catch {}
  };
  const system = () => (media.matches ? 'dark' : 'light');
  const current = () => root.dataset.theme || system();

  const saved = load();
  if (saved === 'light' || saved === 'dark') root.dataset.theme = saved;

  const ICONS = {
    // shown in light mode: switch to dark
    light: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
    // shown in dark mode: switch to light
    dark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  };

  function render(button) {
    const theme = current();
    const next = theme === 'dark' ? 'light' : 'dark';
    button.innerHTML = ICONS[theme];
    button.setAttribute('aria-label', `Switch to ${next} mode`);
    button.title = `Switch to ${next} mode`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.type = 'button';
    button.addEventListener('click', () => {
      const next = current() === 'dark' ? 'light' : 'dark';
      if (next === system()) {
        delete root.dataset.theme;
        save(null);
      } else {
        root.dataset.theme = next;
        save(next);
      }
      render(button);
    });
    media.addEventListener('change', () => render(button));
    render(button);
    document.body.append(button);
  });
})();
