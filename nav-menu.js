const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile__menu');
const blurs = document.querySelector('#main');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  blurs.classList.toggle('active');
});

document.querySelectorAll('.mobile__nav__link').forEach(
  (n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
    blurs.classList.remove('active');
  }),
);
