const tbodyPlace = document.querySelector(".tbody-place");
let count = 0;

function createRow() {
    count++;

    const fillInOption = {
        td: { class: "tbody-place__td info-text" },
        label: { for: `fillValue_${count}` },
        textarea: {
        class: "table-input",
        id: `fillValue_${count}`,
        placeholder: "Fill in"
        }
    };
    const textForStageOption = {
        td: { class: "tbody-place__td info-text" },
        label: { for: `textValue_${count}` },
        textarea: {
        class: "table-input",
        id: `textValue_${count}`,
        placeholder: "Text for Stage"
        }
    };
    const locationOption = {
        td: { class: "tbody-place__td info-text" },
        label: { for: `locationValue_${count}` },
        textarea: {
        class: "table-input",
        id: `locationValue_${count}`,
        placeholder: "Location"
        }
    };
    const noteTr = document.createElement("tr");
    const button = document.createElement("button");
    const containerButton = document.createElement("td");

    const fillIn = createCol(fillInOption);
    const location = createCol(locationOption);
    const textForStage = createCol(textForStageOption);

    button.classList.add("control");
    button.setAttribute("type", "button");

    containerButton.classList.add("info-text");
    containerButton.append(button);

    noteTr.append(fillIn, textForStage, location, containerButton);

    save(button);

    return { tr: noteTr, fillIn, textForStage, location, button };
}

// сохранение после обновления страницы
function save(button) {
    const a = document.querySelectorAll(".table-input")[0]?.value;
    const b = document.getElementsByTagName("td");
    b.innerHTML = a;

    button.onclick = () => {
        const localStorageValue = [];
        const oldValue = JSON.parse(localStorage.getItem("key"));
        document
        .querySelectorAll("tbody.tbody-place tr")[0]
        .querySelectorAll("textarea.table-input")
        .forEach((el) => localStorageValue.push(el.value));
        console.log(oldValue, localStorageValue);
        if (oldValue) {
        if (oldValue.length > 0) {
            localStorage.setItem(
            "key",
            JSON.stringify([...oldValue, localStorageValue])
            );
        } else {
            localStorage.setItem(
            "key",
            JSON.stringify([oldValue, localStorageValue])
            );
        }
        } else {
        localStorage.setItem("key", JSON.stringify([localStorageValue]));
        }
    };
}

function render() {
    const savedData = JSON.parse(localStorage.getItem("key"));

  if (savedData) {
    const tablePlace = document.querySelector("tbody.tbody-place");
    savedData.forEach((el) => {
        tablePlace.innerHTML += `
            <tr>
                <td class="tbody-place__td info-text">${el[0]}</td>
                <td class="tbody-place__td info-text">${el[1]}</td>
                <td class="tbody-place__td info-text">${el[2]}</td>
                <td class="info-text"><button class="" type="button"></button></td>
            </tr>
        `;
    });
  }
}

// задаем динамическую высоту при переполнении текста
function auto_grow(elements) {
    elements.style.height = "5px";
    elements.style.height = elements.scrollHeight + "px";
}

function createCol(attr) {
    const elements = {
        td: document.createElement("td"),
        label: document.createElement("label"),
        textarea: document.createElement("textarea")
    };
    elements.textarea.addEventListener("input", (event) =>
        auto_grow(event.target)
    );

    Object.entries(attr).forEach(([element, attributes]) => {
        Object.entries(attributes).forEach(([tag, value]) => {
        elements[element].setAttribute(tag, value);
        });
    });

    elements.label.append(elements.textarea);
    elements.td.append(elements.label);

    return elements.td;
}

function handler(event) {
    const target = event.target;

    if (target.tagName !== "BUTTON") {
        return false;
    }

    const parent = target.closest("tr");
    const checkValues = Array.from(
        parent.querySelectorAll("textarea")
    ).every(({ value }) => value.trim());

    if (!checkValues) {
        return alert("Заполните все поля!");
    }

    if (checkValues && target.classList.contains("control")) {
        tbodyPlace.prepend(createRow().tr);
        target.classList.remove("control");
    } else {
        parent.remove();
    }
}

new Promise((res, rej) => {
    tbodyPlace.append(createRow().tr);
    tbodyPlace.addEventListener("click", handler);
}).then(render());
// 



// заметки
// const newBlock = document.createElement("li");
const newLabel = document.getElementById("dataInput");
const newInput = document.getElementById("dataId");
const rowList = document.querySelector(".notes-list");

function addBlock(data) {
  const newLi = document.createElement("li");
  newLi.innerHTML = `
              <div class="notes-inner">
                  <p class="enumiration">
                      ${document.querySelectorAll(".notes-inner").length + 1 + '.'}
                  </p>
                  <label class="notes-text bold">${data}</label>
                  <input class="notes-input bold" type="text" placeholder="Write text to create another one..." >
                  <button class="notes-btn notes-btn__delete" type="button">
                      <img src="./img/events/create-event/delete.svg" alt="Удалить">
                  </button>
              </div>
        `;
    newInput.value = "";

    rowList.append(newLi);

    // удаление
    const deleteBtn = document.querySelectorAll(".notes-btn__delete");

    deleteBtn.forEach((deleteLiParent) => {
        deleteLiParent.addEventListener("click", (data) => {
        data.target.closest("li").remove();
        });
    });
}
// добавление
document.querySelector(".notes-btn__save").addEventListener("click", () => {
  addBlock(newInput.value);
});

// проверка
// function handler(event) {
//   const target = event.target;

//   if (target.tagName !== "BUTTON") {
//     return false;
//   }

//   const parentList = target.closest("li");
//   const checkValues = Array.from(
//     parent.querySelectorAll(".notes-text")
//   ).every(({ value }) => value.trim());

//   if (!checkValues) {
//     return alert("Заполните все поля!");
//   }

//   if (checkValues && target.classList.contains("notes-btn__save")) {
//     tbodyPlace.prepend(createRow().tr);
//     target.classList.remove("notes-btn__save");
//   } else {
//     parent.remove();
//   }
// }

// new Promise((res, rej) => {
//   tbodyPlace.append(createRow().tr);
//   tbodyPlace.addEventListener("click", handler);
// }).then(render());

// сохранение при перезагрузке
// function render() {
//   const savedData = JSON.parse(localStorage.getItem("key"));

//   if (savedData) {
//     const tablePlace = document.querySelector("notes");
//     savedData.forEach((el) => {
//       tablePlace.innerHTML = `
//           <div class="notes-inner">
//                   <p class="enumiration">
//                       ${document.querySelectorAll(".notes-inner").length + 1}
//                   </p>
//                   <label class="notes-text bold">${data}</label>
//                   <input class="notes-input bold" type="text" placeholder="Write text to create another one..." >
//                   <button class="notes-btn notes-btn__delete" type="button">
//                       <img src="./img/events/create-event/delete.svg" alt="Удалить">
//                   </button>
//               </div>
//         `;
//     });
//   }
// }

// динамическая ширинa при переполнении текста
const nodeCards = document.querySelectorAll(".notes-inner");

nodeCards.forEach((card) => {
  const nodeinput = card.querySelector(".notes-input");
  const nodelabel = card.querySelector(".notes-text");

  nodeinput.addEventListener("input", (event) => {
    nodelabel.textContent = "";
    nodelabel.textContent = event.target.value;
  });
});