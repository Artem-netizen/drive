// подсчет суммы
const totalPrice = document.querySelector(".total-price");
const copyPrice = totalPrice.textContent;
const init = () => {
  const value = document.getElementById("counterId");
  totalPrice.textContent = copyPrice * parseInt(value.value, 10);
};

function stepper(btn) {
  const id = btn.dataset.action;
  const MainInp = btn.closest(".counter").querySelector("input");
  const min = MainInp.getAttribute("min");
  const max = MainInp.getAttribute("max");
  const step = MainInp.getAttribute("step");
  const val = MainInp.getAttribute("value");
  const calcStep = id === "increment" ? step * 1 : step * -1;
  const newValue = parseInt(val, 10) + calcStep;

  if (newValue >= min && newValue <= max) {
    MainInp.setAttribute("value", newValue);
  }
}

document.querySelectorAll("#stepButton").forEach((step) => {
  step.addEventListener("click", () => {
    stepper(step);
    init();
  });
});

// код для множества счетчиков без подсчета
function stepper(btn) {
    let id = btn.dataset.action;
    let MainInp = btn.closest('.number').querySelector('input');
    let min = MainInp.getAttribute("min");
    let max = MainInp.getAttribute("max");
    let step = MainInp.getAttribute("step");
    let val = MainInp.getAttribute("value");
    let calcStep = (id == "increment") ? (step * 1) : (step * -1);
    let newValue = parseInt(val) + calcStep;


    if (newValue >= min && newValue <= max) {
        MainInp.setAttribute("value", newValue);
    }
}