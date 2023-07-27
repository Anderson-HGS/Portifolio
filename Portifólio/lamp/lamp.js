const turnOn = document.getElementById ('ligada');
const turnOff = document.getElementById ('desligada');
const lamp = document.getElementById ('lamp');

function lampOn () {
    lamp.src='./img/ligada.jpeg';
}

function lampOff () {
    lamp.src='./img/desligada.jpeg';
}

turnOn.addEventListener ( 'click', lampOn);
turnOff.addEventListener ( 'click', lampOff);

class MobileNavBar{
    constructor (mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this)
    }

    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5 ease forward 0.3`)
        })
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    Init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-itens",
    ".nav-itens li",
);

mobileNavBar.Init();