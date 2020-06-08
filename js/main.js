const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#header-nav');


function showMenu () {
    hamburger.classList.toggle('open');
    hamburger.classList.toggle('closed');
    nav.classList.toggle('show');
    nav.classList.toggle('up');

    if (nav.classList.contains('up')) {

        setTimeout(function() {
                nav.classList.toggle('hide');
        }, 1000);
    } else {
        nav.classList.toggle('hide');
    }
    

}

hamburger.addEventListener('click', showMenu);