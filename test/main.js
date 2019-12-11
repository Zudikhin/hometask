/* function sumInput() {
  let n = prompt();
  let num = parseInt(n);
  let array = [];
  if (!isNaN(num)) {
    sumInput();
    array.push(num);
  }
  console.log(array);
}
sumInput(); */

let array = [];

function sumInput() {
  let n = prompt();
  let num = parseInt(n);
  if (!isNaN(num)) {
    sumInput();
    array.push(num);
  }
}
sumInput();
console.log(array);

/* 
 function sumInput() {

  let numbers = [];

  while (true) {

    let value = prompt("Введите число", 0);

    // Прекращаем ввод?
    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput()); */