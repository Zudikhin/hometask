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
let calculatorLastAnswers = document.querySelector(".calculator__answers");
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
let answers = [];
let has_result = false;

function renderAnswers() {
  if (answers.length >= 20) {
    answers.splice(0, 1);
    calculatorLastAnswers.innerHTML = "";
    answers.forEach(element => {
      let p = document.createElement("p");
      calculatorLastAnswers.appendChild(p);
      p.innerHTML = element;
    });
    console.log(answers);
  } else {
    calculatorLastAnswers.innerHTML = "";
    answers.forEach(element => {
      let p = document.createElement("p");
      calculatorLastAnswers.appendChild(p);
      p.innerHTML = element;
    });
  }
}

function addNumber(event) {
  if (has_result) {
    has_result = false;
    calculatorAnswer.innerHTML = event.target.innerHTML;
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
  has_result = false;
}

times.addEventListener("click", operateTimes);
function operateTimes() {
  calculatorAnswer.innerHTML = "";
  calculatorResult.innerHTML += "*";
  has_result = false;
}

minus.addEventListener("click", operateMinus);
function operateMinus() {
  calculatorAnswer.innerHTML = "";
  calculatorResult.innerHTML += "-";
  has_result = false;
}

divide.addEventListener("click", operateDivide);
function operateDivide() {
  calculatorAnswer.innerHTML = "";
  calculatorResult.innerHTML += "/";
  has_result = false;
}

backspace.addEventListener("click", deleteLast);
function deleteLast() {
  let beforeCalculatorAnswer = calculatorAnswer.innerHTML;
  let afterCalculatorAnswer = beforeCalculatorAnswer.slice(0, -1);
  let beforeCalculatorResult = calculatorResult.innerHTML;
  let afterCalculatorResult = beforeCalculatorResult.slice(0, -1);
  calculatorAnswer.innerHTML = afterCalculatorAnswer;
  calculatorResult.innerHTML = afterCalculatorResult;
}

square.addEventListener("click", operateSquare);
function operateSquare() {
  let square = calculatorAnswer.innerHTML * calculatorAnswer.innerHTML;
  let result = calculatorResult.innerHTML;
  console.log(calculatorResult.innerHTML);
  result.forEach(element => {
    console.log(element);
  });
  calculatorResult.innerHTML = square;
}

equal.addEventListener("click", operateEqual);
function operateEqual() {
  has_result = true;
  let equation = calculatorResult.innerHTML;
  let result = eval(calculatorResult.innerHTML);
  calculatorAnswer.innerHTML = result;
  calculatorResult.innerHTML = result;
  answer = result;
  let addItem = `<span>${equation}=</span><br><span class="calculator__result_equal">${result}</span>`;
  answers.push(addItem);
  renderAnswers();
}
