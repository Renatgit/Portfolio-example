//Block_animations

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }
            // else {
            //     animItem.classList.remove('_active');
            // }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    
    setTimeout(() => {
        animOnScroll();
    }, 300);}

//Menu

document.getElementById('menu__btn').addEventListener('click', showMenu);

function showMenu(event) {
    
    let menu = document.getElementById('menu__btn');
    let line1 = document.getElementById('line1');
    let line2 = document.getElementById('line2');
    let line3 = document.getElementById('line3');
    let menuContainer = document.getElementById('menu');
    let menuContent = document.getElementById('header__content');
    let home = document.getElementById('home');
    let translate = document.getElementById('translate__btns__mob')

    if (menu.classList == 'menu__btn _closed') {
        menu.classList.remove('_closed');
        menu.classList.add('_opened');
        line1.classList.add('_line1__active');
        line2.classList.add('_line2__active');
        line3.classList.add('_line3__active');
        menuContainer.classList.add('menu__open');
        menuContent.classList.add('menu__content__open');
        home.classList.add('home__open');
        translate.classList.add('translate__open');

        let headerSpan = document.querySelectorAll('.header__span');
        for (let index = 0; index < headerSpan.length; index++) {
            const headerItem = headerSpan[index];
            headerItem.classList.add('header__span__open');
        }
        
    }else {
        menu.classList.add('_closed');
        menu.classList.remove('_opened');
        line1.classList.remove('_line1__active');
        line2.classList.remove('_line2__active');
        line3.classList.remove('_line3__active');
        menuContainer.classList.remove('menu__open');
        menuContent.classList.remove('menu__content__open');
        home.classList.remove('home__open');
        translate.classList.remove('translate__open');

        let headerSpan = document.querySelectorAll('.header__span');
        for (let index = 0; index < headerSpan.length; index++) {
            const headerItem = headerSpan[index];
            headerItem.classList.remove('header__span__open');
        }
    }
}


//Translate

document.getElementById('translate__ru').addEventListener('click', translateRu);
document.getElementById('translate__eng').addEventListener('click', translateEng);

function translateRu(event) {
    let buttonRu = document.getElementById('translate__ru');
    let buttonEng = document.getElementById('translate__eng');

    if (buttonEng.classList == 'translate__eng _lang__active') {
        buttonEng.classList.remove('_lang__active');
        buttonRu.classList.add('_lang__active');
    }

    let autorInfo = document.getElementById('autor__info');
    autorInfo.innerHTML = 'UX | UI designer<br>24 года, Минск';
    
    let headerSpan = document.querySelectorAll('.header__span');
        for (let index = 0; index < headerSpan.length; index++) {
            const headerItem0 = headerSpan[0];
            const headerItem1 = headerSpan[1];
            const headerItem2 = headerSpan[2];
            const headerItem3 = headerSpan[3];

            headerItem0.innerHTML = 'Обо мне';
            headerItem1.innerHTML = 'Навыки';
            headerItem2.innerHTML = 'Портфолио';
            headerItem3.innerHTML = 'Контакты';
        }
    
    let aboutMeHeader = document.getElementById('aboutMe__header');
    aboutMeHeader.innerHTML = 'Обо мне';

    let aboutMeContent = document.getElementById('aboutMe__content');
    aboutMeContent.innerHTML = 'Привет, Я Денис – UX/UI дизайнер из Минска.<br>Интересуюсь дизайном и всем, что с ним связано.<br><br><br>Я учусь на курсах "Веб и мобильный дизайн интерфейсов" в IT-Академии.<br><br><br>Готовы реализовать отличные проекты<br>с замечательными людьми.';

    let skillsHeader = document.getElementById('skills__header');
    skillsHeader.innerHTML = 'Навыки';

    let skillsContent = document.getElementById('skills__content');
    skillsContent.innerHTML = 'Работаю в таких программах как';

    let portfolioHeader = document.getElementById('portfolio__header');
    portfolioHeader.innerHTML = 'Портфолио';

    let contactsHeader = document.getElementById('contacts__header');
    contactsHeader.innerHTML = 'Контакты';

    let contactsContent = document.getElementById('contacts__content');
    contactsContent.innerHTML = 'Хотите узнать больше или просто поболтать?<br>Пожалуйста!';

    let btnText = document.getElementById('send__message');
    btnText.innerHTML = 'Отправить сообщение';
    btnText.classList.add('footer__btnRu');

    let footerEnd = document.getElementById('footer__end');
    footerEnd.innerHTML = 'Лайкни меня в<br>LinkedIn, Instagram, Behance, Dribble';
}
function translateEng(event) {
    let buttonRu = document.getElementById('translate__ru');
    let buttonEng = document.getElementById('translate__eng');

    if (buttonRu.classList == 'translate__ru _lang__active') {
        buttonRu.classList.remove('_lang__active');
        buttonEng.classList.add('_lang__active');
    }
    window.location.reload();
}




document.getElementById('translate__ru__mob').addEventListener('click', translateRuMob);
document.getElementById('translate__eng__mob').addEventListener('click', translateEngMob);

function translateRuMob(event) {
    let buttonRu = document.getElementById('translate__ru__mob');
    let buttonEng = document.getElementById('translate__eng__mob');

    if (buttonEng.classList == 'translate__eng _lang__active') {
        buttonEng.classList.remove('_lang__active');
        buttonRu.classList.add('_lang__active');
    }
    let autorInfo = document.getElementById('autor__info');
    autorInfo.innerHTML = 'UX | UI designer<br>24 года, Минск';
    
    let headerSpan = document.querySelectorAll('.header__span');
        for (let index = 0; index < headerSpan.length; index++) {
            const headerItem0 = headerSpan[0];
            const headerItem1 = headerSpan[1];
            const headerItem2 = headerSpan[2];
            const headerItem3 = headerSpan[3];

            headerItem0.innerHTML = 'Обо мне';
            headerItem1.innerHTML = 'Навыки';
            headerItem2.innerHTML = 'Портфолио';
            headerItem3.innerHTML = 'Контакты';

            const headerItem4 = headerSpan[4];
            const headerItem5 = headerSpan[5];
            const headerItem6 = headerSpan[6];
            const headerItem7 = headerSpan[7];

            headerItem4.innerHTML = 'Обо мне';
            headerItem5.innerHTML = 'Навыки';
            headerItem6.innerHTML = 'Портфолио';
            headerItem7.innerHTML = 'Контакты';
        }
    
    let aboutMeHeader = document.getElementById('aboutMe__header');
    aboutMeHeader.innerHTML = 'Обо мне';

    let aboutMeContent = document.getElementById('aboutMe__content');
    aboutMeContent.innerHTML = 'Привет, Я Денис – UX/UI дизайнер из Минска.<br>Интересуюсь дизайном и всем, что с ним связано.<br><br><br>Я учусь на курсах "Веб и мобильный дизайн интерфейсов" в IT-Академии.<br><br><br>Готовы реализовать отличные проекты<br>с замечательными людьми.';

    let skillsHeader = document.getElementById('skills__header');
    skillsHeader.innerHTML = 'Навыки';

    let skillsContent = document.getElementById('skills__content');
    skillsContent.innerHTML = 'Работаю в таких программах как';

    let portfolioHeader = document.getElementById('portfolio__header');
    portfolioHeader.innerHTML = 'Портфолио';

    let contactsHeader = document.getElementById('contacts__header');
    contactsHeader.innerHTML = 'Контакты';

    let contactsContent = document.getElementById('contacts__content');
    contactsContent.innerHTML = 'Хотите узнать больше или просто поболтать?<br>Пожалуйста!';

    let btnText = document.getElementById('send__message');
    btnText.innerHTML = 'Отправить сообщение';
    btnText.classList.add('footer__btnRu');

    let footerEnd = document.getElementById('footer__end');
    footerEnd.innerHTML = 'Лайкни меня в<br>LinkedIn, Instagram, Behance, Dribble';

    
}
function translateEngMob(event) {
    let buttonRu = document.getElementById('translate__ru__mob');
    let buttonEng = document.getElementById('translate__eng__mob');

    if (buttonRu.classList == 'translate__ru _lang__active') {
        buttonRu.classList.remove('_lang__active');
        buttonEng.classList.add('_lang__active');
    }
    window.location.reload();
}
