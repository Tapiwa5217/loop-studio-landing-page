var nav = document.querySelector('header #nav-menu nav');
var closeBtn = document.querySelector('.close-btn');
var hamburger = document.querySelector('.hamburger-menu');

hamburger.addEventListener('click', function() {

    nav.style.height = '100vh';
    closeBtn.style.transform = 'rotate(180deg)';
});

closeBtn.addEventListener('click', function() {

    nav.style.height = '0';
    closeBtn.style.transform = 'rotate(-180deg)';
});