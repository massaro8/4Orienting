const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo')


//display mobile menu
const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

}

menu.addEventListener('click', mobileMenu);

// show active menu when scrolling

const highlightMenu = () =>{
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const testMenu = document.querySelector('#test-page')
    const orientamentoMenu = document.querySelector('#orientamento-page')
    const borseMenu = document.querySelector('#borse-page')
    let scrollPos = window.scrollY

    // adds 'highlits' class to my menu items
    if(window.innerWidth>960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        testMenu.classList.remove('highlist')
        orientamentoMenu.classList.remove('highlist')
        return
    }else if (window.innerWidth > 960 && scrollPos > 1400){
        testMenu.classList.add('highlight')
        orientamentoMenu.classList.remove('highlight')
        borseMenu.classList.remove('highlight')
        homeMenu.classList.remove('highlight')
        return
    }else if (window.innerWidth > 960 && scrollPos > 2345){
        testMenu.classList.add('highlight')
        orientamentoMenu.classList.remove('highlight')
        borseMenu.classList.remove('highlight')
        return
    }

    if(elem && window.innerWidth <960 && scrollPos <600){
        elem.classList.remove('highlight')
    }
}

window.addEventListener('scroll',highlightMenu)
window.addEventListener('clic',highlightMenu)

//close mobile menu when clickin on a menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);