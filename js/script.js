const search = document.querySelector(".search");
const search_button = document.querySelector(".search-button");
let h = 650;
search_button.addEventListener("click", () => {
  if (search.style.height == "750px") {
    search.style.height = "0";
    search.style.margin = 0;
  } else {
    search.style.height = "750px";
    search.style.margin = "0 0 50px 0";
  }
});

// slide whow
const items = document.querySelectorAll(".list .items");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const slide = document.querySelector(".list ");

next.addEventListener("click", () => {
  let firsttitem = document.querySelector("#intro .list .items:first-child");
  slide.appendChild(firsttitem);
});

prev.addEventListener("click", () => {
  let lasttitem = document.querySelector("#intro .list .items:last-child");
  slide.prepend(lasttitem);
});
const autoSlide = setInterval(() => {
  let firsttitem = document.querySelector("#intro .list .items:first-child");
  slide.appendChild(firsttitem);
}, 6000);

const itemsss = document.querySelectorAll(".listss .itemsss");
const nextss = document.getElementById("nextss");
const prevss = document.getElementById("prevss");
const slidess = document.querySelector(".listss ");

nextss.addEventListener("click", () => {
  let firsttitem = document.querySelector(
    "#solar-system .listss .itemsss:first-child"
  );
  slidess.appendChild(firsttitem);
});

prevss.addEventListener("click", () => {
  let lasttitem = document.querySelector(
    "#solar-system .listss .itemsss:last-child"
  );
  slidess.prepend(lasttitem);
});
// ==================================================================
let slider = document.querySelector(".slider .list");
let itemss = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(".dots li");

function reloadSlider() {
  let last_active_item = document.querySelector(".slider .list .item.active");
  last_active_item.classList.remove("active");
  itemss[active].classList.add("active");

  let last_active_dot = document.querySelector(".dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
