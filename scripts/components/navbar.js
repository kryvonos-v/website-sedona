;(function () {
  var mainMenuSwitcherEl = document.getElementById('main-menu-switcher')
  var mainMenuEl = document.getElementById('main-menu')

  mainMenuSwitcherEl.addEventListener('click', function () {
    mainMenuEl.classList.toggle('navbar__menu--active-mobile')
  })
})();