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
    document.querySelector('.current-page').classList.remove('current-page');
    ul.style.display = 'block';
  })














  const name = document.querySelector('#name');
  const phone = document.querySelector('#phone');
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const form = document.querySelector('form');
  const errorMessage = document.querySelector('.error-message');

  form.addEventListener('submit', function( event ){
      if ( email.value.indexOf('@') === -1 ){
          event.preventDefault();
          errorMessage.innerText = 'Incorrect e-mail address';
          return;
      }
  })




});
