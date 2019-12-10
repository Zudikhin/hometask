let accrodion = document.querySelectorAll(".accordion");
for (let i = 0; i < accrodion.length; i++) {
  accrodion[i].addEventListener("click", addClass);
}

function addClass() {
  for (let i = 0; i < accrodion.length; i++) {
    accrodion[i].classList.remove("open");
  }
  this.classList.add("open");
}
