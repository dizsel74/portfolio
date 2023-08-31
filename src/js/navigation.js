document.addEventListener('DOMContentLoaded', function() {
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


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  console.log('click');
}

// Attach the scroll-to-top functionality to the button
mybutton.addEventListener('click', topFunction);
});