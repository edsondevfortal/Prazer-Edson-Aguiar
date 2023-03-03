//
const getSectionBtnToggle = document.querySelector(".section-btn");
const getTagMain = document.querySelector("main");

// active dark mode
getSectionBtnToggle.addEventListener("click", () => {
  if (getTagMain.classList.contains("dark")) {
    getTagMain.classList.remove("dark");
  } else {
    getTagMain.classList.add("dark");
  }
});
