document.querySelector('.btn-submit-auth').addEventListener('click', function(event) {
    event.preventDefault();
    sessionStorage.setItem('cameFromAuthPage', 'true');
    
    window.location.href = '/index.html';
});