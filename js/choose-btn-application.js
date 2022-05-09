document.addEventListener("DOMContentLoaded", function(event) { 
const createBtn = document.querySelectorAll('.form__choose-item');
const chooseBtnStatic = document.querySelectorAll('.choose-btn');

    if (createBtn) {
        createBtn.forEach(function(el, key){
            el.addEventListener('click', function () {
            el.classList.toggle("assign");
            });
        });
    }
    if (chooseBtnStatic) {
        chooseBtnStatic.forEach(function(el, key){
            el.addEventListener('click', function () {
            el.classList.toggle("choose-btn__active");
            });
        });
    }
});
// расскрытие поиска по клику
const searchBox = document.querySelector(".search");
const searchBtn = document.querySelector(".search-inner");

searchBox.onclick = function () {
    searchBox.classList.toggle('uncover')
    searchBtn.classList.toggle('uncover')
}
