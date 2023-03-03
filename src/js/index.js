// get DOM elements
const getSectionBtn = document.querySelector(".section-btn");
const getTagMain = document.querySelector("main");

// active dark mode
getSectionBtn.addEventListener("click", () => {
  if (getTagMain.classList.contains("dark")) {
    getTagMain.classList.remove("dark");
  } else {
    getTagMain.classList.add("dark");
  }
});
