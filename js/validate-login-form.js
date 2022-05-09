// проверка почты в модальном окне логина
const emailValidateLogIn = document.getElementById('email-input');
const errorLogIn = document.getElementById('errorText')
const successfullyLogIn = document.getElementById('successfullyText')
const term = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

function eVal(value) {
    return term.test(value);
}
  
function eIn() {
    // проверка почты на отдельной странице
    if(!emailValidateLogIn.value) {
        errorLogIn.classList.remove("notice");
        successfullyLogIn.classList.remove("notice");
    } else if(eVal(emailValidateLogIn.value)) {
        errorLogIn.classList.remove("notice");
        successfullyLogIn.classList.add("notice");
    } else if(!eVal(emailValidateLogIn.value)) {
        errorLogIn.classList.add("notice");
        successfullyLogIn.classList.remove("notice");
    }
    
    document.querySelector('ion-icon.close__correct').onclick = function(e) {
        let el = e.target.parentNode.parentNode;
        el.style.opacity = '0';
        el.style.top = '-100%';
        el.style.transition = '1s';
    }
}
  
  emailValidateLogIn.addEventListener("input", eIn);


const passwordInputLogin = document.getElementById('password-input')
passwordInputLogin.addEventListener("input", e => {
    const button = document.querySelectorAll(".btn__submit");
    passwordInputLogin.value.length >= 5? button.forEach(btn => btn.removeAttribute('disabled')): button.forEach(btn => btn.setAttribute("disabled", "disabled"));
})