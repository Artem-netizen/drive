const pswdField = document.querySelector("input[type='password']"),
    toggleBtn = document.querySelector(".form__icon");

if (pswdField && toggleBtn) {

    toggleBtn.onclick = () => {

        if (pswdField.type == "password") {
            pswdField.type = "text";
            toggleBtn.classList.add("show");
        } else {
            pswdField.type = "password";
            toggleBtn.classList.remove("show");
        }
    }
}
// error - email is incorrect - recovery page
const emailValidateRecover = document.getElementById('email-recovery');
const errorlValidateStep = document.getElementById('errorText')
const successfullylValidateStep = document.getElementById('successfullyText')
const ereg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

function eVal(value) {
    return ereg.test(value);
}
  
function eIn() {
    if(!emailValidateRecover.value) {
        errorlValidateStep.classList.remove("notice");
        successfullylValidateStep.classList.remove("notice");
    } else if(eVal(emailValidateRecover.value)) {
        errorlValidateStep.classList.remove("notice");
        successfullylValidateStep.classList.add("notice");
    } else if(!eVal(emailValidateRecover.value)) {
        errorlValidateStep.classList.add("notice");
        successfullylValidateStep.classList.remove("notice");
    }
    
    document.querySelector('ion-icon.close__correct').onclick = function(e) {
        let el = e.target.parentNode.parentNode;
        el.style.opacity = '0';
        el.style.top = '-100%';
        el.style.transition = '1s';
    }
}
  
  emailValidateRecover.addEventListener("input", eIn);
// проверка на ввод не меньше 9 символов в почте
emailValidateRecover.addEventListener("input", e => {
    const button = document.querySelectorAll(".btn__submit");
    emailValidateRecover.value.length >= 9? button.forEach(btn => btn.removeAttribute('disabled')): button.forEach(btn => btn.setAttribute("disabled", "disabled"));
})