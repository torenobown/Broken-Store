{
  const burgerButton = document.querySelector(".burger__button");
  const burgerMenu = document.querySelector(".burger");

  burgerButton.addEventListener("click", () => {
    burgerMenu.classList.toggle("burger_open");
    document.body.classList.toggle("body_backdrop");
  });

  document.body.addEventListener("click", (e) => {
    if (!e.target.matches(".burger__button")) {
      burgerMenu.classList.remove("burger_open");
      document.body.classList.remove("body_backdrop");
    }
  });
}

{
  const searchButton = document.querySelector(".header-search__button-mobile");
  const searchModal = document.querySelector(".header-search__modal");

  searchButton.addEventListener("click", () => {
    searchModal.classList.add("modal_open");
  });

  searchModal.addEventListener("click", () => {
    searchModal.classList.remove("modal_open");
  });

  searchModal
    .querySelector(".modal__content")
    .addEventListener("click", (e) => {
      e.stopPropagation();
    });
}

{
  const navbar = document.querySelector("#navbar");
  const sticky = navbar.offsetTop;

  window.addEventListener("scroll", () => {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
}
