"use strict";
let calculator = document.querySelector(".calculator");
let calculatorMain = document.querySelector(".calculator__main");
let calculatorResult = document.querySelector(".calculator__result");
let calculatorKeyboard = document.querySelector(".calculator__keyboard");
let numbers = document.querySelectorAll(".numbers");
let operations = document.querySelectorAll(".operations");
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

for (let i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  number.addEventListener("click", function(e) {
    console.log("number");
  });
}

for (let i = 0; i < operations.length; i++) {
  let operation = operations[i];
  operation.addEventListener("click", function(e) {
    operate(e.target.textContent);
  });
}

equal.addEventListener("click", function(e) {});

let input = document.querySelector("#input");
console.log(input.value);
