const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuBurguer = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

menuEmail-addEventListener('click', toggleDesktopMenu);
menuBurguer-addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu(){
    menuMobile.classList.toggle('inactive');
}
