"use strict";
let calculator = document.querySelector(".calculator");
let calculatorMain = document.querySelector(".calculator__main");
let calculatorAnswer = document.querySelector(".calculator__answer");
let calculatorResult = document.querySelector(".calculator__result");
let calculatorKeyboard = document.querySelector(".calculator__keyboard");
let percent = document.querySelector(".percent");
let ce = document.querySelector("#ce");
let c = document.querySelector("#c");
let backspace = document.querySelector("#backspace");
let onex = document.querySelector("#onex");
let square = document.querySelector("#square");
let root = document.querySelector("#root");
let changePlusMinus = document.querySelector("#change_plus_minus");
let coma = document.querySelector("#coma");
let equal = document.querySelector("#equal");
let plus = document.querySelector("#plus");
let times = document.querySelector("#times");
let divide = document.querySelector("#divide");
let minus = document.querySelector("#minus");

let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let zero = document.querySelector("#zero");

seven.addEventListener("click", addNumber);
eight.addEventListener("click", addNumber);
nine.addEventListener("click", addNumber);
four.addEventListener("click", addNumber);
five.addEventListener("click", addNumber);
six.addEventListener("click", addNumber);
one.addEventListener("click", addNumber);
two.addEventListener("click", addNumber);
three.addEventListener("click", addNumber);
zero.addEventListener("click", addNumber);

let answer = "0";
/* сделать переменную с ответом если при клике не совпадает то очищать и иннерхтмл */

function addNumber(event) {
  if (calculatorAnswer.innerHTML == answer) {
    calculatorResult.innerHTML = event.target.innerHTML;
  } else {
    calculatorAnswer.innerHTML += event.target.innerHTML;
    calculatorResult.innerHTML += event.target.innerHTML;
  }
}

plus.addEventListener("click", operatePlus);
function operatePlus() {
  calculatorAnswer.innerHTML = "";
  calculatorResult.innerHTML += "+";
}

equal.addEventListener("click", operateEqual);
function operateEqual() {
  let result = eval(calculatorResult.innerHTML);
  calculatorAnswer.innerHTML = result;
  calculatorResult.innerHTML = result;
  answer = result;
  console.log(answer);
}
