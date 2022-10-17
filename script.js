const burger = document.querySelector('.burger-box');
const mainContainer = document.querySelector('.main-container');

function changeBurger() {
    burger.classList.toggle('change');
    mainContainer.classList.toggle('show-nav');

}
burger.addEventListener('click', changeBurger);

