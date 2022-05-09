const selectedList = document.querySelectorAll(".selected");
const optionsList = document.querySelectorAll(".option-item");

selectedList.forEach((selected) => {
  selected.addEventListener("click", function () {
    const parent = this.closest(".select-box");
    const parentContainer = parent.querySelector(".options-container");

    parentContainer.classList.toggle("deploy");
  });
});

optionsList.forEach((options) => {
  options.addEventListener("click", function () {
    const parent = this.closest(".select-box");
    const parentContainer = parent.querySelector(".options-container");
    const selected = parent.querySelector(".selected");

    selected.innerHTML = this.querySelector("label").innerHTML;
    parentContainer.classList.remove("deploy");
  });
});


// 2 select
document.querySelectorAll('.select-toggle').forEach(function(selectDropdown) {

    let selectBtn = selectDropdown.querySelector('.arrow-down-icon')
    let selectChangeBtn = selectDropdown.querySelector('.select__list-sub')
    let selectSubItem = selectChangeBtn.querySelectorAll('.select__item-sub')
    let selectInputValue = selectDropdown.querySelector('.select__input-hidden')
    
    selectBtn.addEventListener('click', function() {
        selectChangeBtn.classList.toggle('show-select')
        selectBtn.classList.toggle('show-select')
    })
    
    selectSubItem.forEach(function(listItem){
        listItem.addEventListener('click', function(e){
            e.stopPropagation()
            selectBtn.innerText = this.innerText
            selectInputValue.value = this.dataset.value
            selectChangeBtn.classList.remove('show-select')
        })
    })
    
    document.addEventListener('click', function(e){
        if(e.target !== selectBtn){
            selectChangeBtn.classList.remove('show-select')
        }
    })
})

