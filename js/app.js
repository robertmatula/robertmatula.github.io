require('../scss/main.scss');

document.addEventListener("DOMContentLoaded", () => {

    const openMenuButton = document.querySelector('.open-menu');
    const overlay = document.querySelector('.overlay');
    const closeButton = document.querySelector('.close-menu');

    openMenuButton.addEventListener('click', event => {
      overlay.classList.toggle("open");
      openMenuButton.style.visibility = 'hidden';
    })

    closeButton.addEventListener('click', event => {
      overlay.classList.toggle("open");
      openMenuButton.style.visibility = 'visible';
    })

});
