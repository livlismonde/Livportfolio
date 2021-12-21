function onScroll() {
  const documentHeight = document.documentElement.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollPercentage = window.scrollY / (documentHeight - windowHeight);
  const pixelsToScroll = documentHeight - windowHeight;

  // Scroll column1 together with the window
  const column1 = document.querySelector("#column-1");
  column1.style.transform = `translate(0, ${
    -pixelsToScroll * scrollPercentage
  }px)`;

  const column2 = document.querySelector("#column-2");
  column2.style.transform = `translate(0, ${
    -pixelsToScroll * (1 - scrollPercentage)
  }px)`;

  const column3 = document.querySelector("#column-3");
  column3.style.transform = `translate(0, ${
    -pixelsToScroll * scrollPercentage
  }px)`;

  const column4 = document.querySelector("#column-4");
  column4.style.transform = `translate(0, ${
    -pixelsToScroll * (1 - scrollPercentage)
  }px)`;
}
if (window.innerWidth >= 601) {
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll);
  document.addEventListener("DOMcontentLoaded", onScroll);
}

document.querySelector("#menu-close").addEventListener("click", function () {
  document.querySelector(".mobile-menu").style.display = "none";
});
document
  .querySelector("#mobile-menu-hamburger")
  .addEventListener("click", function () {
    document.querySelector(".mobile-menu").style.display = "flex";
  });
