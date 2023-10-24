let iconMenu = document.querySelector('.icon-menu');
let menuConteiner = document.querySelector('.menu-conteiner');

iconMenu.addEventListener('click', () => {
    menuConteiner.classList.toggle('menu-conteiner-visible')
})