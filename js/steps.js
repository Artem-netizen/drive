const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');

const btnNext = document.querySelectorAll('#btnNext');
btnNext.forEach((btn) => {
    btn.addEventListener("click", () => {
        step1.style.display = "none";
        step2.style.display = "flex";
        allStepper.style.display = 'flex';
        stepper1.classList.add("step-progressbar-item-complete");
        stepper2.classList.add("step-progressbar-item-active");
        footerElement.style.display = "none";
        footerElement.classList.add("step-progressbar-item-complete");
        footerElement.classList.add("step-progressbar-item-active");
    });
})
const btnNext2 = document.getElementById('btnNext2');

//validation
const continueSection = document.getElementById('continue');

// progress
const innerSteper = document.getElementById('progressInner')
const allStepper = document.getElementById('progress');
const stepper1 = document.getElementById('step-1');
const stepper2 = document.getElementById('step-2');

allStepper.style.display = 'none'

const footerElement = document.getElementById('footerStep')

// btnNext2.addEventListener("click", () => {
//     stepper2.classList.add("step-progressbar-item-complete");
// });

// перебор кнопок 
const moreBtnStep = document.querySelectorAll('.buy__link')
moreBtnStep.forEach((btn, ind) => {
    btn.addEventListener("click", () => {
        console.log(ind);
    })
})
// disable button in step "email" 
// btnStepDisable = document.querySelector('.regist-btn')
// btnStepDisable.setAttribute('disabled', true);
// stepValidateCheckbox = document.querySelectorAll('.option__input')
// for (node of stepValidateCheckbox){
//     node.addEventListener('input', ()=>{
//         let activatedButton = false;
//         for(checkboxValid of stepValidateCheckbox){
//             if(checkboxValid.checked) {
//                 activatedButton = true;
//             }
//         }
//         if(activatedButton) {
//             btnStepDisable.removeAttribute('disabled');
//         }else{
//             btnStepDisable.setAttribute('disabled', true);
//         }
//     })
// }

// error - email is incorrect
const emailValidateStep = document.getElementById('mail');
const errorlValidateStep = document.getElementById('errorText')
const successfullylValidateStep = document.getElementById('successfullyText')
const ereg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

function eVal(value) {
    return ereg.test(value);
}
  
  function eIn() {
    //   проверка почты на 2 шаге страницы билетов
        if(!emailValidateStep.value) {
            errorlValidateStep.classList.remove("notice");
            successfullylValidateStep.classList.remove("notice");
        } else if(eVal(emailValidateStep.value)) {
            errorlValidateStep.classList.remove("notice");
            successfullylValidateStep.classList.add("notice");
        } else if(!eVal(emailValidateStep.value)) {
            errorlValidateStep.classList.add("notice");
            successfullylValidateStep.classList.remove("notice");
        }
        // проверка почты на отдельной странице
        document.querySelector('ion-icon.close__correct').onclick = function(e) {
            let el = e.target.parentNode.parentNode;
            el.style.opacity = '0';
            el.style.top = '-100%';
            el.style.transition = '1s';
        }
  }
  
  emailValidateStep.addEventListener("input", eIn);