// Shrink header on scroll (inspired by AIBIL)
(function () {
  var header = document.querySelector("header:not([data-big])");
  if (!header) return;

  var threshold = 50;

  function onScroll() {
    if (window.scrollY > threshold) {
      header.classList.add("shrunk");
    } else {
      header.classList.remove("shrunk");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
