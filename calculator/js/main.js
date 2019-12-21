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

plus.addEventListener("click", addOperate);
minus.addEventListener("click", addOperate);
divide.addEventListener("click", addOperate);
times.addEventListener("click", addOperate);

let statement = [];
let answers = [];
let has_result = false;

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

function addOperate(event) {
  if (calculatorAnswer.innerHTML == "") {
    has_result = false;
    if (statement.length == 0) {
      statement.push({
        val: event.target.value,
        type: "operate"
      });
      calculatorResult.innerHTML += event.target.value;
    } else if (statement.slice(-1)[0].type == "operate") {
      statement.splice(-1, 1);
      statement.push({
        val: event.target.value,
        type: "operate"
      });
      let result = calculatorResult.innerHTML;
      let separate = result.substring(0, result.length - 1);
      calculatorResult.innerHTML = separate;
      calculatorResult.innerHTML += statement.slice(-1)[0].val;
    } else if (statement.slice(-1)[0].type == "num") {
      statement.push({
        val: event.target.value,
        type: "operate"
      });
      calculatorResult.innerHTML += event.target.value;
    }
    calculatorAnswer.innerHTML = "";
  } else {
    statement.push({
      val: calculatorAnswer.innerHTML,
      type: "num"
    });
    statement.push({
      val: event.target.value,
      type: "operate"
    });
    calculatorAnswer.innerHTML = "";
    calculatorResult.innerHTML += event.target.value;
  }
}

function renderAnswers() {
  if (answers.length >= 20) {
    answers.splice(0, 1);
    calculatorLastAnswers.innerHTML = "";
    answers.forEach(element => {
      let p = document.createElement("p");
      calculatorLastAnswers.appendChild(p);
      p.innerHTML = element;
    });
  } else {
    calculatorLastAnswers.innerHTML = "";
    answers.forEach(element => {
      let p = document.createElement("p");
      calculatorLastAnswers.appendChild(p);
      p.innerHTML = element;
    });
  }
}

equal.addEventListener("click", operateEqual);
function operateEqual() {
  has_result = true;
  if (calculatorAnswer.innerHTML != "") {
    statement.push({
      val: calculatorAnswer.innerHTML,
      type: "num"
    });
  } else if (statement.slice(-1)[0].type == "operate") {
    statement.splice(-1, 1);
  }
  let result = calculatorResult.innerHTML;
  if (
    result.slice(-1) == "+" ||
    result.slice(-1) == "-" ||
    result.slice(-1) == "/" ||
    result.slice(-1) == "*"
  ) {
    result.substring(0, result.length - 1);
    let firstFinish = eval(result.substring(0, result.length - 1));
    calculatorResult.innerHTML = firstFinish;
    calculatorAnswer.innerHTML = firstFinish;
    let equation = result;
    let addItem = `<span>${equation}=</span><br><span class="calculator__result_equal">${firstFinish}</span>`;
    answers.push(addItem);
    renderAnswers();
    calculatorAnswer.innerHTML = "";
    statement = [];
    statement.push({
      val: firstFinish,
      type: "num"
    });
  } else {
    let secondFinish = eval(calculatorResult.innerHTML);
    calculatorResult.innerHTML = secondFinish;
    calculatorAnswer.innerHTML = secondFinish;
    let equation = result;
    let addItem = `<span>${equation}=</span><br><span class="calculator__result_equal">${secondFinish}</span>`;
    answers.push(addItem);
    renderAnswers();
    calculatorAnswer.innerHTML = "";
    statement = [];
    statement.push({
      val: secondFinish,
      type: "num"
    });
  }
}

square.addEventListener("click", operateSquare);
function operateSquare() {}

/* square.addEventListener("click", operateSquare);
function operateSquare() {
  let stringAnswer = calculatorAnswer.innerHTML;
  let sizeStringAnswer = stringAnswer.length;
  let stringResult = calculatorResult.innerHTML;
  let deleteLast = stringResult.substring(
    0,
    stringResult.length - sizeStringAnswer
  );
  let parsing = parseInt(stringAnswer);
  let square = parsing * parsing;
  calculatorAnswer.innerHTML = square;
  calculatorResult.innerHTML = deleteLast + calculatorAnswer.innerHTML;
  if (isNaN(square)) {
    calculatorAnswer.innerHTML = "";
    calculatorResult.innerHTML = deleteLast + calculatorAnswer.innerHTML;
  }
} */

// statement.slice(-1)[0].val

/* function addOperate(event) {
  if (statement.length == 0) {

    if(calculatorAnswer.innerHTML == "") {
      statement.push({
        val: event.target.value,
        type: "operate"
      });
    } else {
      statement.push({
        val: calculatorAnswer.innerHTML,
        type: "num"
      });
      statement.push({
        val: event.target.value,
        type: "operate"
      });
    }

  } else if (statement.slice(-1)[0].type == "num") {
    statement.push({
      val: event.target.value,
      type: "operate"
    });
  } else if (statement.slice(-1)[0].type == "operate") {
    statement.push({
      val: calculatorAnswer.innerHTML,
      type: "num"
    });
    statement.push({
      val: event.target.value,
      type: "operate"
    });
  }
  console.log(statement);
} */

/* let answer = "0";
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

plus.addEventListener("click", operatePlus);
function operatePlus() {
  calculatorAnswer.innerHTML = "";
  let sizeCalculatorResult = calculatorResult.innerHTML;
  let lastSymbol = sizeCalculatorResult.slice(-1);
  if (
    lastSymbol == "-" ||
    lastSymbol == "/" ||
    lastSymbol == "*" ||
    lastSymbol == "+"
  ) {
    let circumcisionString = sizeCalculatorResult.substring(
      0,
      sizeCalculatorResult.length - 1
    );
    calculatorResult.innerHTML = circumcisionString;
  }
  calculatorResult.innerHTML += "+";
  has_result = false;
}

times.addEventListener("click", operateTimes);
function operateTimes() {
  calculatorAnswer.innerHTML = "";
  let sizeCalculatorResult = calculatorResult.innerHTML;
  let lastSymbol = sizeCalculatorResult.slice(-1);
  if (
    lastSymbol == "+" ||
    lastSymbol == "/" ||
    lastSymbol == "-" ||
    lastSymbol == "*"
  ) {
    let circumcisionString = sizeCalculatorResult.substring(
      0,
      sizeCalculatorResult.length - 1
    );
    calculatorResult.innerHTML = circumcisionString;
  }
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
  let sizeCalculatorResult = calculatorResult.innerHTML;
  let lastSymbol = sizeCalculatorResult.slice(-1);
  if (
    lastSymbol == "-" ||
    lastSymbol == "+" ||
    lastSymbol == "*" ||
    lastSymbol == "/"
  ) {
    let circumcisionString = sizeCalculatorResult.substring(
      0,
      sizeCalculatorResult.length - 1
    );
    calculatorResult.innerHTML = circumcisionString;
  }
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
  let stringAnswer = calculatorAnswer.innerHTML;
  let sizeStringAnswer = stringAnswer.length;
  let stringResult = calculatorResult.innerHTML;
  let deleteLast = stringResult.substring(
    0,
    stringResult.length - sizeStringAnswer
  );
  let parsing = parseInt(stringAnswer);
  let square = parsing * parsing;
  calculatorAnswer.innerHTML = square;
  calculatorResult.innerHTML = deleteLast + calculatorAnswer.innerHTML;
  if (isNaN(square)) {
    calculatorAnswer.innerHTML = "";
    calculatorResult.innerHTML = deleteLast + calculatorAnswer.innerHTML;
  }
}

square.addEventListener("click", operateSquare);
function operateSquare() {
  let sizeCalculatorResult = calculatorResult.innerHTML;
  let lastSymbol = sizeCalculatorResult.slice(-1);
  if (
    lastSymbol == "+" ||
    lastSymbol == "-" ||
    lastSymbol == "/" ||
    lastSymbol == "*"
  ) {
    let circumcisionString = sizeCalculatorResult.substring(
      0,
      sizeCalculatorResult.length - 1
    );
    let squareCircumcisionString = circumcisionString * circumcisionString;
    calculatorResult.innerHTML = squareCircumcisionString;
  } else {
    let stringAnswer = calculatorAnswer.innerHTML;
    let sizeStringAnswer = stringAnswer.length;
    let stringResult = calculatorResult.innerHTML;
    let deleteLast = stringResult.substring(
      0,
      stringResult.length - sizeStringAnswer
    );
    let parsing = parseInt(stringAnswer);
    let square = parsing * parsing;
    calculatorAnswer.innerHTML = square;
    calculatorResult.innerHTML = deleteLast + calculatorAnswer.innerHTML;
    if (isNaN(square)) {
      calculatorAnswer.innerHTML = "";
      calculatorResult.innerHTML = deleteLast + calculatorAnswer.innerHTML;
    }
  }
}

onex.addEventListener("click", operateOneDivide);
function operateOneDivide() {
  let stringAnswer = calculatorAnswer.innerHTML;
  let sizeStringAnswer = stringAnswer.length;
  let stringResult = calculatorResult.innerHTML;
  let deleteLast = stringResult.substring(
    0,
    stringResult.length - sizeStringAnswer
  );
  let parsing = parseInt(stringAnswer);
  let oneDivide = 1 / parsing;
  calculatorAnswer.innerHTML = oneDivide;
  calculatorResult.innerHTML = deleteLast + calculatorAnswer.innerHTML;
  if (isNaN(rounding)) {
    calculatorAnswer.innerHTML = "";
    calculatorResult.innerHTML = deleteLast + calculatorAnswer.innerHTML;
  }
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
} */
