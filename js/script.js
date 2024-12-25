// toogle class active
const navbarNav = document.querySelector('.navbar-nav');

//ketika hambuger menu di klikk
document.querySelector('#hamburger-menu').onclick = ( ) => {
    navbarNav.classList.toggle('active');
};

//kilk di luar  sidebar untuk menghilangkan nav
const hambuger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hambuger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})