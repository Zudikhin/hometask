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
let sum = 0;
array.forEach(element => {
  sum += element;
});
alert(sum);
