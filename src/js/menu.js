(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-active');
    menuBtnRef.classList.toggle('is-active');
  });
})();
