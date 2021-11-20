const popUp = document.getElementById('popUp');
const aboutTextPopUp = document.getElementById('popUpAboutText');
const aboutLangPopUp = document.getElementById('popUpAboutLang');
const aboutSkillsPopUp = document.getElementById('popUpAboutSkills');

const aboutTextBtn = document.getElementById('aboutTextBtn');
const aboutLangBtn = document.getElementById('aboutLangBtn');
const aboutSkillsBtn = document.getElementById('aboutSkillsBtn');

const closePopUpBtn = document.getElementById('popUpCloseImg');

const openPopUp = () => {

    popUp.style.display = 'flex';

}





const openAboutText = () => {

    popUp.classList.remove('fadeOut');
    openPopUp();
    aboutTextPopUp.style.display = 'flex';
    popUp.classList.add('fadeIn');

}

aboutTextBtn.addEventListener('click', openAboutText);





const openAboutLang = () => {

    popUp.classList.remove('fadeOut');
    openPopUp();
    aboutLangPopUp.style.display = 'flex';
    popUp.classList.add('fadeIn');

}

aboutLangBtn.addEventListener('click', openAboutLang);





const openAboutSkills = () => {

    popUp.classList.remove('fadeOut');
    openPopUp();
    aboutSkillsPopUp.style.display = 'flex';
    popUp.classList.add('fadeIn');

}

aboutSkillsBtn.addEventListener('click', openAboutSkills);





const closePopUp = () => {

    popUp.classList.remove('fadeIn');
    popUp.classList.add('fadeOut');

    setTimeout(function() {

        popUp.style.display = '';
        aboutTextPopUp.style.display = '';
        aboutLangPopUp.style.display = '';
        aboutSkillsPopUp.style.display = '';

    }, 495);

};

popUp.addEventListener('click', closePopUp);