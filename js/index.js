const botaoMenu = document.querySelector('.menu-button')
const menuLateral = document.querySelector('.nav')

botaoMenu.addEventListener('click', () => {
    menuLateral.classList.toggle('nav--active')
})