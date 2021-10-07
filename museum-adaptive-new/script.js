const menuIcon = document.querySelector('.burger-icon')
const menu = document.querySelector('.header-menu')
// const welcome = document.querySelector('.section-welcome__content')

menuIcon.onclick = function () {
  menuIcon.classList.toggle('burger-icon_close');
  menu.classList.toggle('header-menu-open');
  // welcome.classList.toggle('section-welcome__content_close');
};
