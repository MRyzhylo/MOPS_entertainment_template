'use strict'

const MainSliderContent = [ 
    {
        id: 1,
        title: 'Бла',
        desc: 'lorem ipsum dolor set amet',
        url: 'img/img1.jpg',
    },
    {
        id: 2,
        title: 'blah',
        desc: 'lorem ipsum dolor set amet',
        url: 'img/img2.jpg',
    },
    {
        id: 3,
        title: 'blah-blah-',
        desc: 'lorem ipsum dolor set amet',
        url: 'img/img3.jpg',
    },
    {
        id: 4,
        title: '--',
        desc: 'lorem ipsum dolor set amet',
        url: 'img/img4.jpg',
    },
    {
        id: 5,
        title: ',kd ,kfh',
        desc: 'lorem ipsum dolor set amet',
        url: 'img/img5.jpg',
    },
    {
        id: 6,
        title: 'бла бла бла',
        desc: 'lorem ipsum dolor set amet',
        url: 'img/img6.jpg',
    },
];

const menuContent = ['Головна', 'Про нас', 'Наши контакты', 'Акции', 'Відео', ];

const logoSide = {
    id: 1,
    url: 'img/logo.png',
};

function Bodycreator (id, mainContent, sideMenuContent, sideMenuLogo) {
    this.container = document.querySelector(id);
    this.content = mainContent; 
    this.sideMenuContent = sideMenuContent;
    this.sideMenuLogo = sideMenuLogo;
    let logoUrl = this.sideMenuLogo.url;   

    this.clientWindowSize = document.documentElement.clientWidth;
    this.clientWindowHeight = document.documentElement.clientHeight;
    this.menuWrapSize = Math.round(this.clientWindowSize / 4);

    this.menuSize =  this.menuWrapSize * this.content.length;

    let stylesheet = document.createElement('style');
    document.head.append(stylesheet);
    stylesheet.innerHTML = `
    .desctop-wrap {
        width: ${this.menuSize}px;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow-x: scroll;
        position: relative;
    }

    .content-wrap {
        width: ${this.menuWrapSize}px;
        height: 100vh;
    }

    .side-menu-wrap {
        display: none;
        position: fixed;
        top: 0;
        right: 0;
        background-color: white;
        height: ${this.clientWindowHeight}px;
    }

    .side-menu-logo {
        width: ${this.clientWindowSize/2}px;
    }

    .menu-wrap {
        width: ${this.clientWindowSize/2}px;
    }
    
    `
    this.MainMenuDesctopCreator = function () {
        this.container.className = 'desctop-wrap';
        this.content.forEach( ({title, desc, url}) => {
            this.contentDiv = document.createElement('div');
            this.contentDiv.className = 'content-wrap';
            this.contentImg = document.createElement('img');
            this.contentImg.className = 'main-menu-wrap';
            this.contentImg.src = url;
            this.title = document.createElement('h1');
            this.title.innerText = title;
            this.description = document.createElement('p');
            this.description.innerText = desc;
            this.contentDiv.appendChild(this.contentImg);
            this.contentDiv.appendChild(this.title);
            this.contentDiv.appendChild(this.description);
            this.container.appendChild(this.contentDiv);
            
        });
    }.bind(this);

    this.mainMenuMobileCreator = function () {
        this.container.className = 'mobile-wrap';
        this.content.forEach( ({title, desc, url}) => {
            this.contentDiv = document.createElement('div');
            this.contentDiv.className = 'mobile-content-wrap';
            this.contentImg = document.createElement('img');
            this.contentImg.className = 'mobile-main-menu-wrap';
            this.contentImg.src = url;
            this.title = document.createElement('h1');
            this.title.innerText = title;
            this.description = document.createElement('p');
            this.description.innerText = desc;
            this.contentDiv.appendChild(this.contentImg);
            this.contentDiv.appendChild(this.title);
            this.contentDiv.appendChild(this.description);
            this.container.appendChild(this.contentDiv);

        });
    }.bind(this);

    this.windowWidthCheker = function () {
        if (this.clientWindowSize >= 720) {
            this.MainMenuDesctopCreator();
        } else {
            this.mainMenuMobileCreator();
        }; 
    }.bind(this);
    this.windowWidthCheker();

    this.navDiv = document.createElement('div');
    this.navDiv.className = 'navigation-wrap';
    this.navUl = document.createElement('ul');
    this.navDiv.appendChild(this.navUl);
    this.container.appendChild(this.navDiv);

    this.sideMenuMain = document.createElement('div');
    this.sideMenuMain.className = 'side-menu-wrap';
    this.sideMenuLogo = document.createElement('div');
    this.wrapDiv = document.createElement('div');
    this.wrapDiv.className = 'side-wrap';
    this.sideMenuLogo.className = 'side-menu-logo';
    this.logoImg = document.createElement('img');
    this.logoImg.className = 'side-logo';
    this.logoImg.src = logoUrl;
    this.sideMenuDiv = document.createElement('div');
    this.sideMenuDiv.className = 'menu-wrap';
    this.sideMenuUl = document.createElement('ul');
    this.sideMenuUl.className = 'side-menu';
    this.closeMenuButton = document.createElement('button');
    this.closeMenuButton.className = 'close-menu-button';
    this.closeMenuButton.innerHTML = '&#10006;';
    this.openSideMenuButton = document.createElement('button');
    this.openSideMenuButton.className = 'open-menu-button';
    this.openSideMenuButton.innerHTML = '&#9776;';
    this.mailMeButton = document.createElement('button');
    this.mailMeButton.className = 'mail-button';
    this.mailMeButton.innerHTML = '&#9993;';
    this.sideMenuDiv.appendChild(this.closeMenuButton);
    this.sideMenuDiv.appendChild(this.sideMenuUl);
    this.wrapDiv.appendChild(this.sideMenuLogo);
    this.wrapDiv.appendChild(this.sideMenuDiv);
    this.sideMenuMain.appendChild(this.wrapDiv);
    this.sideMenuLogo.appendChild(this.logoImg);
    this.container.appendChild(this.openSideMenuButton);
    this.container.appendChild(this.mailMeButton);
    this.container.appendChild(this.sideMenuMain);

    this.desctopNavigationCreator = function () {
        this.content.forEach(() => {
            this.li = document.createElement('li');
            this.li.className = 'nav-dots';
            this.navUl.appendChild(this.li)
        });
    }.bind(this);
    
    this.sideMenuCreator = function () {
        this.sideMenuContent.forEach((menuItem)=> {
            this.menuLi = document.createElement('li');
            this.menuLi.className = 'side-menu-item';
            this.menuLink = document.createElement('a');
            this.menuLink.href = '#';
            this.menuLink.innerText = menuItem;
            this.menuLi.appendChild(this.menuLink);
            this.sideMenuUl.appendChild(this.menuLi);
        });
    }.bind(this);
    this.sideMenuCreator();

    this.feedbackFormCreator = function () {
        this.feedbackDiv = document.createElement('div');
        this.feedbackDiv.className = 'feedback-form-wrap';
        this.feedbackForm = document.createElement('form');
        this.feedbackForm.className = 'feedback-form';
        this.closeFormButton = document.createElement('button');
        this.closeFormButton.className = 'close-form-btn';
        this.closeFormButton.innerHTML = '&#10006;';
        this.nameInput = document.createElement('input');
        this.nameInput.className = 'input-cell';
        this.nameInput.placeholder = 'Имя';
        this.messageInput = document.createElement('textarea');
        this.messageInput.className = 'input-cell';
        this.messageInput.placeholder = 'Сообщение';
        this.phoneInput = document.createElement('input');
        this.phoneInput.className = 'input-cell';
        this.phoneInput.type = 'tel';
        this.phoneInput.placeholder = 'Телефон';
        this.submitInput = document.createElement('input');
        this.submitInput.className = 'submit-cell';
        this.submitInput.type = 'submit';
        this.submitInput.innerText = 'Отправить';
        this.feedbackForm.appendChild(this.closeFormButton);
        this.feedbackForm.appendChild(this.nameInput);
        this.feedbackForm.appendChild(this.phoneInput);
        this.feedbackForm.appendChild(this.messageInput);
        this.feedbackForm.appendChild(this.submitInput);
        this.feedbackDiv.appendChild(this.feedbackForm);
        this.container.appendChild(this.feedbackDiv);
    }.bind(this);
 
    this.contentScroll = function () {
        let xCoord = window.pageXOffset;

        if ( xCoord <= this.menuWrapSize ) {
        window.scrollBy(this.menuWrapSize, 0);
        } 
        else  {
        window.scrollTo(0, 0);
        }
    }.bind(this);

    this.windowWidthChekerForNavBar = function () {
        if (this.clientWindowSize >= 720) {
            this.timerId = setInterval(this.contentScroll, 1500);
            this.container.addEventListener('pointerdown', this.contentScroll);
            this.container.addEventListener('pointerdown', ()=> {
            clearInterval(this.timerId);
    });
            this.desctopNavigationCreator();
        } else {
            this.navDiv.style.display = 'none';
            document.body.style.overflow = 'scroll';
        }
    }.bind(this);

    this.windowWidthChekerForNavBar()

    this.openSideMenuButton.addEventListener('pointerdown', ()=>{
        this.sideMenuMain.style.display = 'unset';
    });
    this.closeMenuButton.addEventListener('pointerdown', ()=> {
        this.sideMenuMain.style.display = 'none';
    });
    this.mailMeButton.addEventListener('pointerdown', ()=> {
        this.feedbackFormCreator();
    });
    
}

let webTemplate = new Bodycreator('#container', MainSliderContent, menuContent, logoSide);