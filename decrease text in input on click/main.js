"use strict";
let btn = document.querySelector("#btn");
btn.addEventListener("click", truncate);
function truncate(e) {
  let input = document.querySelector(".input").value;
  if (input.length > 10) {
    let result = input.slice(0, 10) + "...";
    alert(result);
  }
}
