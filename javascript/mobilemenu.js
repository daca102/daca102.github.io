
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

// JavaScript for toggling the mobile menu overlay
const hamburgerIcon = document.getElementById('hamburger-icon');
const overlay = document.querySelector('.overlay');

hamburgerIcon.addEventListener('click', () => {
    overlay.classList.toggle('open');
});






