// ENABLE and DISABLE | dark mode
const getSectionBtn = document.querySelector(".section-btn");
const getTagMain = document.querySelector("main");

getSectionBtn.addEventListener("click", () => {
  if (getTagMain.classList.contains("dark")) {
    getTagMain.classList.remove("dark");
  } else {
    getTagMain.classList.add("dark");
  }
});

// BUTTON | go to top site
const goTopButton = document.getElementById("goTopButton");

const setType_GoToButton = new TypeIt("#goTopButton", {
  strings: "Up",
  speed: 475,
  startDelay: 200,
  cursor: false,
  loop: true,
});

function start_GoTopButton() {
  const shouldShowButton =
    window.scrollY > 650 && goTopButton !== undefined && goTopButton !== null;

  if (shouldShowButton) {
    setType_GoToButton.go();
  } else {
    // goTopButton.remove();
    setType_GoToButton.reset();
  }
}

function scrollFunction() {
  const shouldShowButton = window.scrollY > 650;

  if (shouldShowButton) {
    goTopButton.classList.add("goTopButton");
  } else {
    goTopButton.classList.remove("goTopButton");
  }
}

window.addEventListener("scroll", () => {
  scrollFunction();
  start_GoTopButton();
});

goTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
