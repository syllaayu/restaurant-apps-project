import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

const skipToContent = document.querySelector('.skip-link');
skipToContent.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    document.querySelector('#main').focus();
  }
});

var swiper = new Swiper('.home-slider', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
});
