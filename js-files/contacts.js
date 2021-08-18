const navToggle = document.querySelector(".nav__container-toggle");
const menu = document.querySelector(".nav__container");
const items = document.querySelectorAll(".nav__container-item");
console.log(items);

//Contact form
const form = document.querySelector(".contact-page form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("boum");
});
let mail = new FormData(form);

//For mobile version
navToggle.addEventListener("click", function () {
  let elements = Array.from(items);
  let check = elements.every((el) => el.classList.contains("active"));
  if (!check) {
    items.forEach((item) => item.classList.add("active"));
    navToggle.innerHTML = "<a href='#'><i class='fas fa-times'></i></a>";
  } else {
    items.forEach((item) => item.classList.remove("active"));
    navToggle.innerHTML = "<a href='#'><i class='fas fa-bars'></i></a>";
  }
});
