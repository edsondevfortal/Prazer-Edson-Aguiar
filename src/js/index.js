// TARGET SCROLL | smooth scroll to a target element
const scrollToTarget = (targetElement) => {
  const topOffset = targetElement.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: topOffset,
    behavior: "smooth",
  });
};

// NAVIGATION | function to get links and add events of click to navivation sections
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

// TypeIt | function that types custom texts
new TypeIt("#my-name", {
  speed: 100,
  startDelay: 500,
})
  .type("Prazer, edison aguiar", { speed: 50, delay: 700 })
  .move(-10, { delay: 700 })
  .delete("i", { delay: 45 })
  .move(-1, { delay: 800 })
  .delete("e", { delay: 300 })
  .type("É", { delay: 175 })
  .delete("É", { delay: 400, instant: true })
  .type("E", { delay: 175 })
  .move(6, { delay: 200 })
  .delete("a", { delay: 400, instant: true })
  .type("A", { delay: 225 })
  .move(5, { delay: 300 })
  .type(" &#128513;")
  .go();
