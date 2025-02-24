const hamburgerMenu = document.querySelector('.hamburger-menu');
const navBarMobile = document.querySelector('.nav-bar-mobile');
const closeButton = document.querySelector('.nav-bar-mobile .icon');

hamburgerMenu.addEventListener('click', () => {
    navBarMobile.classList.remove('hidden');
    navBarMobile.classList.add('active'); // Agrega la clase 'active' para la transición
    hamburgerMenu.setAttribute('aria-expanded', 'true');
    hamburgerMenu.setAttribute('aria-label', 'Cerrar menú de navegación');
});

closeButton.addEventListener('click', () => {
    navBarMobile.classList.remove('active'); // Quita la clase 'active' para la transición
    setTimeout(() => {
        navBarMobile.classList.add('hidden');
    }, 300); // Espera a que termine la transición antes de ocultar
    hamburgerMenu.setAttribute('aria-expanded', 'false');
    hamburgerMenu.setAttribute('aria-label', 'Abrir menú de navegación');
});