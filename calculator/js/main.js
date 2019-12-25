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
  if (statement.length == 0) {
    if (has_result) {
      has_result = false;
      calculatorAnswer.innerHTML = event.target.innerHTML;
      calculatorResult.innerHTML = event.target.innerHTML;
    } else {
      calculatorAnswer.innerHTML += event.target.innerHTML;
      calculatorResult.innerHTML += event.target.innerHTML;
    }
  } else if (statement.slice(-1)[0].type == "num") {
    has_result = false;
    let lastElement = statement.slice(-1)[0].val;
    statement.pop();
    calculatorResult.innerHTML = calculatorResult.innerHTML.substring(
      0,
      calculatorResult.innerHTML.length - lastElement.length
    );
    calculatorResult.innerHTML += event.target.innerHTML;
    calculatorAnswer.innerHTML += event.target.innerHTML;
  } else if (statement.slice(-1)[0].type == "operate") {
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
    let stringFirstFinish = firstFinish.toString();
    statement.push({
      val: stringFirstFinish,
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
    let stringSecondFinish = secondFinish.toString();
    statement.push({
      val: stringSecondFinish,
      type: "num"
    });
  }
}

square.addEventListener("click", operateSquare);

function operateSquare() {
  if (calculatorAnswer.innerHTML == "") {
    if (statement.length == 0) {
      return false;
    } else if (statement.slice(-1)[0].type == "operate") {
      statement.splice(-1, 1);
      let lastElement = statement.slice(-1)[0].val;
      statement.splice(-1, 1);
      let squareLastElement = lastElement * lastElement;
      let stringSquareLastElement = squareLastElement.toString();
      statement.push({
        val: stringSquareLastElement,
        type: "num"
      });
      let delResult = calculatorResult.innerHTML.substring(
        0,
        calculatorResult.innerHTML.length - 1
      );
      let finalResult = delResult.substring(
        0,
        delResult.length - lastElement.length
      );
      calculatorResult.innerHTML = finalResult + statement.slice(-1)[0].val;
      calculatorAnswer.innerHTML = statement.slice(-1)[0].val;
    } else if (statement.slice(-1)[0].type == "num") {
      let lastItem = statement.slice(-1)[0].val;
      let stringlastItem = lastItem.toString();
      let squareLastItem = stringlastItem * stringlastItem;
      let stringSquareLastItem = squareLastItem.toString();
      statement.splice(-1, 1);
      statement.push({
        val: stringSquareLastItem,
        type: "num"
      });
      calculatorResult.innerHTML =
        calculatorResult.innerHTML.substring(
          0,
          calculatorResult.innerHTML.length - stringlastItem.length
        ) + squareLastItem;
    }
  } else {
    if (statement.length == 0) {
      let bufferCalcAnswer = calculatorAnswer.innerHTML;
      let squareBufferCalcAnswer = bufferCalcAnswer * bufferCalcAnswer;
      let stringSquareBufferCalcAnswer = squareBufferCalcAnswer.toString();
      statement.push({
        val: stringSquareBufferCalcAnswer,
        type: "num"
      });
      calculatorResult.innerHTML = squareBufferCalcAnswer;
      calculatorAnswer.innerHTML = "";
    } else if (statement.slice(-1)[0].type == "num") {
      let numberCalculatorAnswer = calculatorAnswer.innerHTML;
      let squareCalculatorAnswer =
        numberCalculatorAnswer * numberCalculatorAnswer;
      let stringSquareCalculatorAnswer = squareCalculatorAnswer.toString();
      statement.pop();
      statement.push({
        val: stringSquareCalculatorAnswer,
        type: "num"
      });
      let deleteLast = calculatorResult.innerHTML.substring(
        0,
        calculatorResult.innerHTML.length - calculatorAnswer.innerHTML.length
      );
      calculatorAnswer.innerHTML = "";
      calculatorResult.innerHTML = deleteLast + squareCalculatorAnswer;
    } else {
      let numberCalculatorAnswer = calculatorAnswer.innerHTML;
      let squareCalculatorAnswer =
        numberCalculatorAnswer * numberCalculatorAnswer;
      let stringSquareCalculatorAnswer = squareCalculatorAnswer.toString();
      statement.push({
        val: stringSquareCalculatorAnswer,
        type: "num"
      });
      let deleteLast = calculatorResult.innerHTML.substring(
        0,
        calculatorResult.innerHTML.length - calculatorAnswer.innerHTML.length
      );
      calculatorAnswer.innerHTML = "";
      calculatorResult.innerHTML = deleteLast + squareCalculatorAnswer;
    }
  }
}

onex.addEventListener("click", operateOneDivide);

function operateOneDivide() {
  if (calculatorAnswer.innerHTML == "") {
    if (statement.length == 0) {
      return false;
    } else if (statement.slice(-1)[0].type == "operate") {
      statement.splice(-1, 1);
      let lastElement = statement.slice(-1)[0].val;
      statement.splice(-1, 1);
      let divideLastElement = 1 / lastElement;
      let stringDivideLastElement = divideLastElement.toString();
      statement.push({
        val: stringDivideLastElement,
        type: "num"
      });
      let delResult = calculatorResult.innerHTML.substring(
        0,
        calculatorResult.innerHTML.length - 1
      );
      let finalResult = delResult.substring(
        0,
        delResult.length - lastElement.length
      );
      calculatorResult.innerHTML = finalResult + statement.slice(-1)[0].val;
      calculatorAnswer.innerHTML = "";
    } else if (statement.slice(-1)[0].type == "num") {
      let lastItem = statement.slice(-1)[0].val;
      let stringlastItem = lastItem.toString();
      let secondDivideLastItem = 1 / stringlastItem;
      let stringSecondDivideLastItem = secondDivideLastItem.toString();
      statement.splice(-1, 1);
      statement.push({
        val: stringSecondDivideLastItem,
        type: "num"
      });
      calculatorResult.innerHTML =
        calculatorResult.innerHTML.substring(
          0,
          calculatorResult.innerHTML.length - stringlastItem.length
        ) + statement.slice(-1)[0].val;
      calculatorAnswer.innerHTML = "";
    }
  } else {
    let numberCalculatorAnswer = calculatorAnswer.innerHTML;
    let thirdDivideCalculatorAnswer = 1 / numberCalculatorAnswer;
    let stringThirdDivideCalculatorAnswer = thirdDivideCalculatorAnswer.toString();
    statement.push({
      val: stringThirdDivideCalculatorAnswer,
      type: "num"
    });
    let deleteLast = calculatorResult.innerHTML.substring(
      0,
      calculatorResult.innerHTML.length - calculatorAnswer.innerHTML.length
    );
    calculatorResult.innerHTML = deleteLast + thirdDivideCalculatorAnswer;
    calculatorAnswer.innerHTML = "";
  }
}

backspace.addEventListener("click", deleteLast);

function deleteLast() {
  if (statement.length == 0) {
    let beforeCalculatorAnswer = calculatorAnswer.innerHTML;
    let afterCalculatorAnswer = beforeCalculatorAnswer.slice(0, -1);
    calculatorAnswer.innerHTML = afterCalculatorAnswer;
    statement.push({
      val: afterCalculatorAnswer,
      type: "num"
    });
    calculatorResult.innerHTML = afterCalculatorAnswer;
  } else if (statement.slice(-1)[0].type == "num") {
    if (calculatorAnswer.innerHTML == "") {
      if (statement.slice(-1)[0].val.length == 1) {
        statement.pop();
        calculatorResult.innerHTML = calculatorResult.innerHTML.substring(
          0,
          calculatorResult.innerHTML.length - 1
        );
      } else {
        let lastArrayElement = statement.slice(-1)[0].val;
        let deleteSubstringArrayElement = lastArrayElement.substring(
          0,
          lastArrayElement.length - 1
        );
        statement.pop();
        statement.push({
          val: deleteSubstringArrayElement,
          type: "num"
        });
        calculatorResult.innerHTML =
          calculatorResult.innerHTML.substring(
            0,
            calculatorResult.innerHTML.length - lastArrayElement.length
          ) + deleteSubstringArrayElement;
      }
    } else {
      let defaultCalculatorAnswer = calculatorAnswer.innerHTML;
      calculatorAnswer.innerHTML = calculatorAnswer.innerHTML.substring(
        0,
        calculatorAnswer.innerHTML.length - 1
      );
      calculatorResult.innerHTML =
        calculatorResult.innerHTML.substring(
          0,
          calculatorResult.innerHTML.length - defaultCalculatorAnswer.length
        ) + calculatorAnswer.innerHTML;
      statement.pop();
      statement.push({
        val: calculatorAnswer.innerHTML,
        type: "num"
      });
      if (statement.slice(-1)[0].val.length == 0) {
        statement.pop();
      }
    }
  } else if (statement.slice(-1)[0].type == "operate") {
    if (calculatorAnswer.innerHTML == "") {
      statement.pop();
      let beforeCalculatorResult = calculatorResult.innerHTML;
      let afterCalculatorResult = beforeCalculatorResult.slice(0, -1);
      calculatorResult.innerHTML = afterCalculatorResult;
    } else {
      let defaultAnswer = calculatorAnswer.innerHTML;
      calculatorAnswer.innerHTML = calculatorAnswer.innerHTML.substring(
        0,
        calculatorAnswer.innerHTML.length - 1
      );
      calculatorResult.innerHTML =
        calculatorResult.innerHTML.substring(
          0,
          calculatorResult.innerHTML.length - defaultAnswer.length
        ) + calculatorAnswer.innerHTML;
      statement.push({
        val: calculatorAnswer.innerHTML,
        type: "num"
      });
    }
  }
}
