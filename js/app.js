require('../scss/main.scss');

document.addEventListener("DOMContentLoaded", () => {

  const openMenuButton = document.querySelector('.open-menu');
  const overlay = document.querySelector('.overlay');
  const closeMenuButton = document.querySelector('.close-menu');
  const backMenuButton = document.querySelector('.back-menu');
  const ul = document.querySelector('.overlay__menu');
  const pageAbout = document.querySelector('.overlay__menu--about');
  const pageWork = document.querySelector('.overlay__menu--work');
  const pageContact = document.querySelector('.overlay__menu--contact');
  const lis = document.querySelector('.overlay__menu ul').children;

  openMenuButton.addEventListener('click', event => {
    overlay.classList.toggle("open");
    openMenuButton.style.visibility = 'hidden';
    closeMenuButton.style.display = 'block';
  });

  closeMenuButton.addEventListener('click', event => {
    overlay.classList.toggle("open");
    openMenuButton.style.visibility = 'visible';
  });

  [...lis].forEach((li, index) => {
    li.addEventListener('click', function(event) {
      ul.style.display = 'none';
      backMenuButton.style.display = 'block';
      if (index === 0) {
        pageAbout.classList.add('current-page');
      } else if (index === 1) {
        pageWork.classList.add('current-page');
      } else {
        pageContact.classList.add('current-page');
      }
    })

  })
  backMenuButton.addEventListener('click', function(event) {
    backMenuButton.style.display = 'none';
    document.querySelector('.current-page').classList.remove('current-page');
    ul.style.display = 'block';
  })

});
