const toggleButton = document.getElementsByClassName('toggle-btn')[0];
const navbarLinks = document.getElementsByClassName('nav-links')[0];
const loader = document.getElementById('preloader');

toggleButton.addEventListener('click', ()=> {
    navbarLinks.style.display = "flex";
})

window.addEventListener('load', function(){
    loader.style.display = 'none';
})