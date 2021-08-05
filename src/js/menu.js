// (() => {
//   const menuBtnRef = document.querySelector('[data-menu-button]');
//   const mobileMenuRef = document.querySelector('[data-menu]');

//   menuBtnRef.addEventListener('click', () => {
//     mobileMenuRef.classList.toggle('is-active');
//     menuBtnRef.classList.toggle('is-active');
//   });
// })();
(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileBtnLinks = document.querySelectorAll('[data-item]');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-active');
    menuBtnRef.classList.toggle('is-active');
  });

  mobileBtnLinks.forEach((element) => {
    element.addEventListener('click', function() {
      mobileMenuRef.classList.remove('is-active');
      menuBtnRef.classList.remove('is-active');
    });
  })
})();