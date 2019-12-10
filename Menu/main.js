let menuContainer = document.getElementById("menu");
let menuArray = [
  {
    text: "Home",
    url: "/",
    children: [
      {
        text: "Web Design",
        url: "/works/web",
        children: [
          {
            text: "Frontend",
            url: "/works/web/front"
          },
          {
            text: "Backend",
            url: "/works/web/back"
          }
        ]
      }
    ]
  },
  {
    text: "Contact",
    url: "/contact"
  },
  {
    text: "About us",
    url: "/about",
    children: [
      {
        text: "Web Design",
        url: "/works/web"
      },
      {
        text: "Mobile App",
        url: "/works/app"
      },
      {
        text: "Graphic Design",
        url: "/works/graphics"
      }
    ]
  }
];

function renderMenu(array) {
  let ul = document.createElement("ul");
  array.map((menuItem, index) => {
    let li = document.createElement("li");
    ul.appendChild(li);
    let a = document.createElement("a");
    a.href = `${menuItem.url}`;
    a.text = `${menuItem.text}`;
    li.appendChild(a);
    if (menuItem.children) {
      li.appendChild(renderMenu(menuItem.children));
    }
  });
  return ul;
}
menuContainer.appendChild(renderMenu(menuArray));

let btnShow = document.getElementById("show");
let btnHide = document.getElementById("hide");
btnShow.addEventListener("click", showActive);

function showActive() {
  btnShow.classList.add("active");
  btnHide.classList.add("active");
  menuContainer.classList.add("show");
}

btnHide.addEventListener("click", hideActive);

function hideActive() {
  btnShow.classList.remove("active");
  btnHide.classList.remove("active");
  menuContainer.classList.remove("show");
}

let main = document.querySelector(".main");
document.addEventListener("click", function(event) {
  var isClickInside = main.contains(event.target);
  if (!isClickInside) {
    menuContainer.classList.remove("show");
    btnShow.classList.remove("active");
    btnHide.classList.remove("active");
  }
});
