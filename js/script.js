const hamMenu = document.querySelector('.ham-menu input');
const header = document.querySelector('header ul');

hamMenu.addEventListener('click', function () {
    header.classList.toggle('slide');
});