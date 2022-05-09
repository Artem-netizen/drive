const menu = document.querySelector('.menu-btn')
const arrowDown = document.querySelector('.down')
const menuList = document.querySelector('.mobile__list')
const subMenuList = document.querySelector('.submenu-dropdown')
const subMenuDropdown = document.querySelector('.mobile-dropdown')
menu.addEventListener('click', () =>{
    menu.classList.toggle('show-menu')
    menuList.classList.toggle('show-menu')

})
subMenuDropdown.addEventListener('click', () =>{
    subMenuList.classList.toggle('show-menu')
    arrowDown.classList.toggle('show-menu')
})

// выбор языков
const languageItem = document.getElementsByClassName('language__item')

for (let lang = 0; lang < languageItem.length; lang++) {
    languageItem[lang].addEventListener('mousedown', showLang)
    languageItem[lang].addEventListener('mouseleave', hideLang)
}

function showLang(){
    if(this.children.length > 1){
        this.children[1].style.pointerEvents = 'all';
        this.children[1].style.transform = 'translateY(-5px)';
        this.children[1].style.opacity = '1';
    }
}
function hideLang(){
    if(this.children.length > 1){
        this.children[1].style.pointerEvents = 'none';
        this.children[1].style.transform = 'translateY(0)';
        this.children[1].style.opacity = '0';
    }
}
// проверка поля статуса на странице профиля
let button = document.querySelectorAll('.save-btn');
let input = document.querySelector('#status');
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        if (input.value !== '') {
        input.style.borderColor = 'transparent'
        }else{
            input.style.borderColor = 'var(--error)'
        }
    })
}