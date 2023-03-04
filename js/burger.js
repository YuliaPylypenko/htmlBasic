(function () {
  const burgerMenu = document.querySelector('.burger');
  const headerMenu = document.querySelector('.header__nav-container');
  
  burgerMenu.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    burgerMenu.classList.toggle('active');
  });
})();