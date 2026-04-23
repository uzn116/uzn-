const menuButton = document.getElementById('menu-button');
const menu = document.querySelector('ul');

menuButton.style.color = 'black';

menuButton.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
        menuButton.style.color = 'yellow';
    } else {
        menu.style.display = 'none';
        menuButton.style.color = 'black';
    }
});