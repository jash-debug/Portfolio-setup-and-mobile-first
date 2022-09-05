const hamburger = document.querySelector('.nav__hamburger');
const navLink = document.querySelector('.Enter-mobile-menu-here');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('call it whatever');
  navLink.classList.toggle('call it whatever');
});