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

const navSocialList = document.getElementById('navSocialList');

const apple = document.getElementById('apple');
const facebook = document.getElementById('facebook');
const instagram = document.getElementById('instagram');
const linkedIn = document.getElementById('instagram');
const soundcloud = document.getElementById('soundcloud');
const spotify = document.getElementById('spotify');
const youtube = document.getElementById('youtube');
const social = [apple, facebook, instagram, linkedIn, soundcloud, spotify, youtube];

const navResume = document.getElementById('navResume');

const header = document.querySelector('header');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const background = document.getElementById('background');
const content = [header, main, footer, background]





const menuOpen = () => {

    menu.classList.remove('menuShrink');
    menuBtn.classList.remove('wrapperGrow');

    menu.classList.add('menuGrow');

    navText.forEach(element => {

        element.classList.remove('shrink');
        element.classList.add('grow');

    });

    navSocialList.style.alignContent = 'flex-start';

    navListItems.forEach(element => {

        element.style.justifyContent = 'flex-start';

    });

    content.forEach(element => {

        element.classList.remove('focus');
        element.classList.add('blur');

    });

    menuBtn.style.width = "fit-content"
    menuBtn.style.margin = '0 0 8px 0';
    opnMenu.style.display = 'none';
    clsMenu.style.display = 'block';

    setTimeout(function() {

        social.forEach(element => {
           
            element.style.display = 'flex';
    
        });
        
    }, 125);

    setTimeout(function() {

        navText.forEach(element => {
           
            element.style.display = 'inline';
    
        });

        content.forEach(element => {

            element.style.filter = 'blur(5px)'
    
        });

        menu.style.maxWidth = '320px';

        navResume.style.display = 'flex';
        navResume.classList.remove('slideOutRight');
        navResume.classList.add('slideInRight');
        
    }, 495);

};

opnMenu.addEventListener('click', menuOpen);

opnMenu.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        menuOpen();

    };

});





const menuClose = () => {

    
    
    navResume.classList.remove('slideInRight');
    navResume.classList.add('slideOutRight');

    navText.forEach(element => {

        element.classList.remove('grow');
       
        element.classList.add('shrink');

    });

    setTimeout(function() {

        navText.forEach(element => {

            element.style.display = '';
    
        });

        menu.classList.remove('menuGrow');

        menu.classList.add('menuShrink');
        menuBtn.classList.add('wrapperGrow');

    content.forEach(element => {

        element.classList.remove('blur');
        element.classList.add('focus');

    });

        opnMenu.style.display = '';
        clsMenu.style.display = '';

        navResume.style.display = '';
        
    }, 195);

    setTimeout(function() {

        social.forEach(element => {
           
            element.style.display = '';
    
        });
        
    }, 255);


    setTimeout(function() {

        menuBtn.style.width = ""
        menuBtn.style.margin = '';
        menu.style.maxWidth = '';

        navListItems.forEach(element => {

            element.style.justifyContent = '';
    
        });
        
        content.forEach(element => {

            element.style.filter = ''
    
        });

        navSocialList.style.alignContent = '';
        
    }, 495);

};

clsMenu.addEventListener('click', menuClose);

clsMenu.addEventListener('keydown', function(e) {

    if (e.key === 'Enter') {

        menuClose();

    };

});
