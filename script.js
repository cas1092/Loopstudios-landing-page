const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.navigation-bar');

hamburgerMenu.addEventListener('click', () => {
    const isExpanded = mainNav.classList.contains('active');
    mainNav.classList.toggle('active');
    hamburgerMenu.setAttribute('aria-expanded', !isExpanded);
    hamburgerMenu.setAttribute('aria-label', isExpanded ? 'Abrir menú de navegación' : 'Cerrar menú de navegación');
});