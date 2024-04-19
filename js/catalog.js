{
  const accordionTitles = document.querySelectorAll(".accordion__title");
  const accordionItems = document.querySelectorAll(".accordion__item");

  accordionTitles.forEach((item, index) => {
    item.addEventListener("click", () => {
      accordionItems[index].classList.toggle("open");
    });
  });
}
