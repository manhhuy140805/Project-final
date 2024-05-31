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

// slide whow
// const next = slide.querySelectorAll(".next");
// const prev = slide.querySelectorAll(".prev");
// document.querySelectorAll(".slides").forEach((slide, index) => {
//   const items = slide.querySelectorAll(".list .items");

//   next[index].addEventListener("click", () => {
//     slide.querySelector(".list").appendChild(items[0]);
//   });

//   prev[index].addEventListener("click", () => {
//     slide.querySelector(".list").prepend(items[items.length - 1]);
//   });
// });

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
