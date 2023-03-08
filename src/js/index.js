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

// BUTTON | go to inicial page
const goUpButton = document.getElementById("goTopButton");

const setType_goUpButton = new TypeIt("#goTopButton", {
  strings: "Up",
  speed: 475,
  startDelay: 200,
  cursor: false,
  loop: true,
});

function scrollY_ToShowButton() {
  const isValidScroll = window.scrollY > 650;

  if (isValidScroll) {
    goTopButton.classList.add("goTopButton");
  } else {
    goTopButton.classList.remove("goTopButton");
  }
}

function start_GoUpButton() {
  const isEnable = goTopButton.classList.contains("goTopButton");
  const isValidScroll = window.scrollY > 650;

  if (isEnable && isValidScroll) {
    setType_goUpButton.go();
  } else {
    setType_goUpButton.reset();
  }
}

window.addEventListener("scroll", () => {
  scrollY_ToShowButton();
  start_GoTopButton();
});

goTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
