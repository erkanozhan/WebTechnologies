const dugme = document.querySelector('.menu-dugmesi');
const menu = document.querySelector('#ana-menu');

dugme.addEventListener('click', () => {
  const acikMi = dugme.getAttribute('aria-expanded') === 'true';
  dugme.setAttribute('aria-expanded', String(!acikMi));
  menu.classList.toggle('acik', !acikMi);
});
