window.onload = function() {
    const cameFromAuthPage = sessionStorage.getItem('cameFromAuthPage') === 'true';

    const icon = document.querySelector('.sign-in-icon');

    if (cameFromAuthPage) {
        icon.src = 'favicons/user.png';
        sessionStorage.removeItem('cameFromAuthPage');
    } else {
        icon.src = 'favicons/log-in.png';
    }
}