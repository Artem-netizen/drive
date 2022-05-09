// проверка ввода символов в пароле модального окна входа
const loginForm = document.getElementById('login-form')
const errorMessage = document.getElementById('error')

loginForm.addEventListener('input', (e) => {
    let message = []
    if(passwordInputLogin.value === '' || passwordInputLogin.value == null) {
        message.push('Forgot your password')
    }
    // if(passwordInputLogin.value.length <= 8){
    //     message.push('Have at least 8 characters')
    // }
    if(message.length > 0){
        e.preventDefault()
        errorMessage.innerText = message.join(', ')
    }
})
// открытие кнопки при вооде больше 8 символов
const retypePassword = document.getElementById('passwordReTypeId')
retypePassword.addEventListener("input", e => {
    const button = document.querySelectorAll(".btn__submit");
    retypePassword.value.length >= 8? button.forEach(btn => btn.removeAttribute('disabled')): button.forEach(btn => btn.setAttribute("disabled", "disabled"));
})

// открытие кнопки при вооде больше 4 символов на странице контактов
const emailContact = document.getElementById('email-contact')
emailContact.addEventListener("input", e => {
    const button = document.querySelectorAll(".btn__submit");
    emailContact.value.length >= 4? button.forEach(btn => btn.removeAttribute('disabled')): button.forEach(btn => btn.setAttribute("disabled", "disabled"));
})

// проверка поля статуса на странице профиля
let statusBtn = document.querySelectorAll('.save-btn');
let statusInput = document.querySelector('#status');
for (let i = 0; i < statusBtn.length; i++) {
    statusBtn[i].addEventListener('click', function() {
        if (statusInput.value !== '') {
        statusInput.style.borderColor = 'transparent'
        }else{
            statusInput.style.borderColor = 'var(--error)'
        }
    })
}