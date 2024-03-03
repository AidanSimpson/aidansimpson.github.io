const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 40em)');
const topNavMenu = document.querySelector('.topnav__menu');

function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  topNavMenu.removeAttribute('style');
  btnClose.focus();
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  btnOpen.focus();
}

function setupTopNav(e) {
  if (e.matches) {
    topNavMenu.style.transition = 'none';
  } else {
    closeMobileMenu();
  }
}

setupTopNav(media);

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
  setupTopNav(e);
});
