console.log('JavaScript file loaded');

const primaryNav = document.querySelector('.nav__list');
const navToggle = document.querySelector('.mobile-toggle');

const iconHamburger = document.getElementById('hamburgerIcon');
const iconClose = document.getElementById('closeIcon')

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');
    console.log(visibility);

  if(visibility === 'false'){
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
    iconClose.style.display='block';
    iconHamburger.style.display='none';
  }else {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
    iconClose.style.display='none';
    iconHamburger.style.display='block';
  }
});
