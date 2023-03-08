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

const goUpButton = document.getElementById("goUpButton");

const setType_goUpButton = new TypeIt("#goUpButton", {
  strings: "Up",
  speed: 475,
  startDelay: 200,
  cursor: false,
  loop: true,
});

function scrollY_ToShowButton() {
  const isValidScroll = window.scrollY > 650;

  if (isValidScroll) {
    goUpButton.classList.add("goUpButton");
  } else {
    goUpButton.classList.remove("goUpButton");
  }
}

function start_goUpButton() {
  const goUpButtonn = document.getElementById("goUpButton");
  const existButtonId = !!goUpButtonn; // !! convert to boolean value

  const isValidScroll = window.scrollY > 650;

  if (existButtonId && isValidScroll) {
    setType_goUpButton.go();
  } else {
    setType_goUpButton.reset();
  }
}

window.addEventListener("scroll", () => {
  scrollY_ToShowButton();
  start_goUpButton();
});

goUpButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// TARGET SCROLL | smooth scroll to a target element
const scrollToTarget = (targetElement) => {
  // calcule a posição do elemento alvo na página
  const topOffset = targetElement.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: topOffset,
    behavior: "smooth",
  });
};

// NAVIGATION | define function to get links and add events of click to navivation sections
const addLinkClickListener = (link) => {
  const handleClick = (e) => {
    e.preventDefault();

    const targetElement = document.querySelector(link.getAttribute("href"));

    if (targetElement) {
      scrollToTarget(targetElement);
    }
  };

  link.addEventListener("click", handleClick);
};

const hashLinks = document.querySelectorAll('a[href^="#"]');

hashLinks.forEach(addLinkClickListener);
