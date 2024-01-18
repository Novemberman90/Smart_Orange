const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.menu_body');

if(iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.documentElement.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
};

const closeMenu = () => {
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
    document.documentElement.classList.remove('_lock');
};

document.body.addEventListener("click", (e)=>{
    if(
        e.target.closest('.menu_icon') == null && 
        e.target.closest('.menu_body') != menuBody
    )
    {closeMenu()}
});


menuBody.addEventListener('click', () => {
    if(menuBody.classList.contains('active')) {
        closeMenu();
    } else {
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        document.documentElement.classList.remove('_lock');
    }
});


const menuLink = document.querySelectorAll('a[href^="#"]');
for (let menuLink of menuLink) {
    menuLink.addEventListener('click', function(e) {
        e.preventDefault();
        const id = menuLink.getAttribute('href');

        closeMenu();

        document.querySelector(id).scrollIntoView ({
            behavior: 'smooth',
            block: 'start',
          });
    });
}