"use strict";
let btn = document.querySelector("#btn");
btn.addEventListener("click", checkSpam);
function checkSpam(e) {
  let input = document.querySelector(".input").value;
  let lowerStr = input.toLowerCase();
  if (lowerStr.includes("viagra") || lowerStr.includes("xxx")) {
    alert("error");
  }
}

//Получаем кнпоку
//отслеживаем клик на этот элемент и передаем функцию
//получаем значение инпута
//переводим инпут в нижний регистр
//если инпут содержит слова то выводим ошибку
