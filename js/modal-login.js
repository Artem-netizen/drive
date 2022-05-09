// попап для входа
let loginPopup = document.querySelector('.modal__login')
let loginOpen = document.querySelectorAll('.open-login')
let loginClose = document.querySelector('.close')

// попап регистрации
let registPopup = document.querySelector('.registration__login')
let registClose = document.querySelector('.reg-close')
let registOpen = document.querySelectorAll('.reg-open')

// попап результатов
let resultPopup = document.querySelector('.popup')
let resultClose = document.querySelector('.close-popup')
let additionalOpen = document.querySelectorAll('.open-popup')

// попап картинки
let visuallyPopup = document.querySelector('.popup-visually')
let visuallyInnerPopup = document.querySelector('.popup-visually__inner')
let visuallyClose = document.querySelector('.close-visually')
let visuallyOpen = document.querySelectorAll('.open-visually')

// открытие попап входа
loginOpen.forEach((btnLogin)=>{
    btnLogin.addEventListener('click', (e) =>{
        e.preventDefault()
        loginPopup.classList.add('open')
    })
    loginClose.addEventListener('click', () =>{
        loginPopup.classList.remove('open')
    })
})

// открытие попап регистрации
registOpen.forEach((btnLogin)=>{
    btnLogin.addEventListener('click', (e) =>{
        e.preventDefault()
        registPopup.classList.add('open')
    })
    registClose.addEventListener('click', () =>{
        registPopup.classList.remove('open')
    })
})

// открытие попапа с результатом
additionalOpen.forEach((btnLogin)=>{
    btnLogin.addEventListener('click', (e) =>{
        e.preventDefault()
        resultPopup.classList.add('open')
    })
    resultClose.addEventListener('click', () =>{
        resultPopup.classList.remove('open')
    })
})

// попап картинки
visuallyOpen.forEach((btnLogin)=>{
    btnLogin.addEventListener('click', (e) =>{
        e.preventDefault()
        visuallyPopup.classList.add('open')
        visuallyInnerPopup.classList.add('open')
    })
    visuallyClose.addEventListener('click', () =>{
        visuallyPopup.classList.remove('open')
        visuallyInnerPopup.classList.remove('open')
    })
})

// открытие попап входа
document.addEventListener('click', (e) => { 
    if(e.target === loginPopup) { 
        loginPopup.classList.remove('open')
    }
});

// открытие попапа с результатом
document.addEventListener('click', (e) => { 
    if(e.target === resultPopup) { 
        resultPopup.classList.remove('open')
    }
});

// попап картинки
document.addEventListener('click', (e) => { 
    if(e.target === visuallyPopup) { 
        visuallyPopup.classList.remove('open')
        visuallyInnerPopup.classList.remove('open')
    }
});

// проверка на соответствие паролей
const checkPassword = function() {
    const mainInputChange = document.getElementById('password-change')
    const mainInputReType = document.getElementById('passwordReTypeId')
    if (mainInputChange.value == mainInputReType.value) {
        mainInputReType.style.border = ' 2px solid #fff';
    } else {
        mainInputReType.style.border = ' 2px solid var(--error)';
    }
}

// задизейбленные кнопки в формах
document.querySelectorAll(".btn__submit").forEach(d => {
    d.setAttribute("disabled", true);
});