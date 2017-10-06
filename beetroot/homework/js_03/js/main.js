window.onload = () => {
  let title = document.querySelectorAll('.menu__title');
  let desc = document.querySelectorAll('.menu__desc');

  function hideDesc() {
    for(let i = 0; i < title.length; i++) {
      title[i].classList.remove('menu__title--active');
      desc[i].classList.remove('menu__desc--open');
    }
  }

  function activeItem(title, desc) {
    title.classList.add('menu__title--active');
    desc.classList.add('menu__desc--open');
  }


  for(let j = 0; j < title.length; j++) {
    title[j].addEventListener('click', () => {
      hideDesc();
      activeItem(title[j], desc[j]);
    })
  }
}
