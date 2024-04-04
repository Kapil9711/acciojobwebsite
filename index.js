const barsBtn = document.querySelector(".bars");
const crossBtn = document.querySelector(".cross");

const ul = document.querySelector("nav ul");

barsBtn.addEventListener("click", () => {
  // ul.classList.remove("hide");
  ul.classList.add("orignal-position");
  barsBtn.classList.add("hide");
  crossBtn.classList.remove("hide");
});

crossBtn.addEventListener("click", () => {
  // ul.classList.add("hide");
  ul.classList.remove("orignal-position");

  barsBtn.classList.remove("hide");
  crossBtn.classList.add("hide");
});
