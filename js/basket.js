{
  const basketButton = document.querySelector(
    ".basket__order__checkout button",
  );
  const backetModal = document.querySelector(".basket__order__modal");

  basketButton.addEventListener("click", () => {
    backetModal.classList.add("modal_open");
  });

  backetModal.addEventListener("click", () => {
    backetModal.classList.remove("modal_open");
  });

  backetModal
    .querySelector(".modal__content")
    .addEventListener("click", (e) => {
      e.stopPropagation();
    });
}
