let img = document.querySelector(".img");
let items = document.querySelectorAll(".item");
img.addEventListener('dragstart', dragStart);
img.addEventListener('dragend', dragEnd);

for (let item of items) {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
    item.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.className += ' hold';
    setTimeout(() => this.className = 'invisible', 0);
}

function dragEnd() {
    console.log('end');
}

function dragOver() {
    console.log('over');
}

function dragEnter() {
    console.log('enter');
}

function dragLeave() {
    console.log('leave');
}

function dragDrop() {
    console.log('drop');
}