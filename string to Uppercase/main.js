"use strict";
let btn = document.querySelector("#btn");
btn.addEventListener("click", toUpper);
function toUpper(e) {
  let input = document.querySelector("input").value;
  let result = input[0].toUpperCase() + input.slice(1);
  return alert(result);
}
