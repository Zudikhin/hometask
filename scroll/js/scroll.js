let scrollContainer = document.querySelector(".scroll-container");
let scrollContent = document.querySelector(".scroll-content");
let scrollBar = document.querySelector(".scroll-bar");
let scrollMarker = document.querySelector(".scroll-marker");
scrollContainer.addEventListener("wheel", event => {
  // событие прокрутка колесом, вешаем на общий контейнер
  let scrollPercentage =
    scrollContent.offsetTop /
    (scrollContainer.clientHeight - scrollContent.clientHeight);
  if (event.deltaY > 0) {
    //скролл вниз
    if (
      scrollContent.clientHeight + scrollContent.offsetTop >
      scrollContainer.clientHeight
    ) {
      // скролл не улетает вниз
      scrollContent.style.top = scrollContent.offsetTop - 10 + "px";
    }
  } else {
    // скролл вверх
    if (scrollContent.offsetTop < 0) {
      // скролл не улетает вверх
      scrollContent.style.top = scrollContent.offsetTop + 10 + "px";
    }
  }
  scrollMarker.style.top =
    (scrollBar.clientHeight - scrollMarker.clientHeight) * scrollPercentage +
    "px";
  // скролл маркера
});

scrollMarker.addEventListener("mousedown", event => {
  //на маркер вышаем событие по нажатию на мышь
  document.addEventListener("mousemove", drag);
  //событие на движение мыши
  document.addEventListener("mouseup", event => {
    document.removeEventListener("mousemove", drag);
  }); // при отжатии мыши курсор останваливается там где произошел отжатие мыши
  function drag(event) {
    scrollMarker.style.top = event.y - scrollContainer.offsetTop + "px";
    // движение мыши при зажатии мыши
    if (scrollMarker.offsetTop < 0) {
      scrollMarker.style.top = 0;
    }
    // маркер останваливается при достижении вверха
    if (
      scrollMarker.offsetTop >
      scrollBar.clientHeight - scrollMarker.clientHeight
    ) {
      scrollMarker.style.top =
        scrollBar.clientHeight - scrollMarker.clientHeight + "px";
    }
    // маркер останваливается при достижении низа
    let scrollPercentage =
      scrollMarker.offsetTop /
      (scrollBar.clientHeight - scrollMarker.clientHeight);
    scrollContent.style.top =
      (scrollContainer.clientHeight - scrollContent.clientHeight) *
      scrollPercentage +
      "px";
    // контент скролиться при зажатии на маркер
  }
});

scrollBar.addEventListener("click", event => {
  let undermarker = scrollBar.clientHeight - (scrollMarker.clientHeight + scrollMarker.offsetTop);
  console.log(event.clientY);
  scrollContent.style.top = scrollContent.offsetTop - 10 + "px";
});