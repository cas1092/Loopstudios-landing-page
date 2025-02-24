const hamburgerMenu = document.querySelector('.hamburger-menu');
const navBarMobile = document.querySelector('.nav-bar-mobile');
const closeButton = document.querySelector('.nav-bar-mobile .icon');

hamburgerMenu.addEventListener('click', () => {
    navBarMobile.classList.remove('hidden');
    navBarMobile.classList.add('active'); // Agrega la clase 'active' para la transición
    hamburgerMenu.setAttribute('aria-expanded', 'true');
    
});

closeButton.addEventListener('click', () => {
    navBarMobile.classList.remove('active'); // Quita la clase 'active' para la transición
    
        navBarMobile.classList.add('hidden');
    
    hamburgerMenu.setAttribute('aria-expanded', 'false');
    hamburgerMenu.setAttribute('aria-label', 'Abrir menú de navegación');
});