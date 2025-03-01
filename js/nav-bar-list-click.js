let navbarList = document.querySelector('.nav-info');
let navbarIcons = document.querySelector('.sign-in');
const auth = document.querySelector('.auth-button');
let sandwich = document.querySelector('.nav-bar');

sandwich.addEventListener('click', () => {
    navbarList.classList.toggle('active'); 
    navbarIcons.classList.toggle('active');
});

auth.addEventListener('click', () => {
    window.location.href = '/auth.html';
});




