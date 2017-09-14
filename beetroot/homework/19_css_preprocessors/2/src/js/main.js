window.onload = function() {
  var btn = document.querySelector('#nav-btn');
  var menu = document.querySelector('#nav-list');
  var logo = document.querySelector('#logo');

  btn.addEventListener('click', function() {
    btn.classList.toggle('nav__btn--show');
    menu.classList.toggle('nav__list--show');
    logo.classList.toggle('logo-wrap--hide');
  });
}
