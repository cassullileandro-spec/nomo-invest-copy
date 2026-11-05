const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menu.classList.remove('is-open');
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
});
menu.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
matchMedia('(min-width: 1024px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

// Review tools are loaded only through the explicit grid review URL.
if (new URLSearchParams(location.search).get('grid') === '1') {
  const rootStyle = getComputedStyle(document.documentElement);
  const edge = document.querySelector('.wrap').getBoundingClientRect().left;
  const config = document.createElement('script');
  config.type = 'application/json';
  config.id = 'grid-inspector-config';
  config.textContent = JSON.stringify({
    viewportWidth: document.documentElement.clientWidth,
    grid: {left: edge, right: edge, columns: Number(rootStyle.getPropertyValue('--grid-columns')), gap: parseFloat(rootStyle.getPropertyValue('--gutter')), fine: 8, strong: 64, origin: 0},
    showSections: true,
    sectionSelector: 'main > section, footer'
  });
  document.body.append(config);
  const inspector = document.createElement('script');
  inspector.src = 'grid-inspector.js';
  document.body.append(inspector);
}
