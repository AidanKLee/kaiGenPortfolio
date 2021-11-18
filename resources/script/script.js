const opnMenu = document.getElementById('navOpenMenu');
const clsMenu = document.getElementById('navCloseMenu');
const menuBtn = document.getElementById('menuToggle');

const menu = document.getElementById('nav');

const homeText = document.getElementById('homeText');
const aboutText = document.getElementById('aboutText');
const servicesText = document.getElementById('servicesText');
const portfolioText = document.getElementById('portfolioText');
const musicText = document.getElementById('musicText');
const contactText = document.getElementById('contactText');
const navText = [homeText, aboutText, servicesText, portfolioText, musicText, contactText];

const listHome = document.getElementById('listHome');
const listAbout = document.getElementById('listAbout');
const listServices = document.getElementById('listServices');
const listPortfolio = document.getElementById('listPortfolio');
const listMusic = document.getElementById('listMusic');
const listContact = document.getElementById('listContact');
const navListItems = [listHome, listAbout, listServices, listPortfolio, listMusic, listContact];

const apple = document.getElementById('apple');
const facebook = document.getElementById('facebook');
const instagram = document.getElementById('instagram');
const linkedIn = document.getElementById('instagram');
const soundcloud = document.getElementById('soundcloud');
const spotify = document.getElementById('spotify');
const youtube = document.getElementById('youtube');
const social = [apple, facebook, instagram, linkedIn, soundcloud, spotify, youtube];





const menuOpen = () => {

    menu.classList.remove('menuShrink');
    menuBtn.classList.remove('wrapperGrow');

    menu.classList.add('menuGrow');

    navText.forEach(element => {

        element.classList.remove('shrink');

    });

    navListItems.forEach(element => {

        element.style.justifyContent = 'flex-start';

    })

    menuBtn.style.width = "fit-content"
    menuBtn.style.margin = '0 0 8px 0';
    opnMenu.style.display = 'none';
    clsMenu.style.display = 'block';


    setTimeout(function() {

        social.forEach(element => {
           
            element.style.display = 'flex';
    
        });
        
    }, 95);

    setTimeout(function() {

        navText.forEach(element => {
           
            element.style.display = 'inline';
            element.classList.add('grow');
    
        });

        menu.style.width = '320px';
        
    }, 495);

};

opnMenu.addEventListener('click', menuOpen);





const menuClose = () => {

    menu.classList.remove('menuGrow');

    menu.classList.add('menuShrink');
    menuBtn.classList.add('wrapperGrow');

    navText.forEach(element => {

        element.classList.remove('grow');
       
        element.classList.add('shrink');

    });


    opnMenu.style.display = '';
    clsMenu.style.display = '';

    setTimeout(function() {

        navText.forEach(element => {

            element.style.display = '';
    
        });
        
    }, 195);

    setTimeout(function() {

        social.forEach(element => {
           
            element.style.display = '';
    
        });
        
    }, 255);


    setTimeout(function() {

        menuBtn.style.width = ""
        menuBtn.style.margin = '';
        menu.style.width = '';

        navListItems.forEach(element => {

            element.style.justifyContent = '';
    
        })
        
    }, 495);

};

clsMenu.addEventListener('click', menuClose);