const swiper2 = new Swiper(".swiper2", {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 24,
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    // Autoplay navigation
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
  });
  
  
  const stickyHeader = () => {
    const navbar = document.querySelector("#navbar");
    const sticky = navbar.offsetTop;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });
  };
  
  stickyHeader();

  const accordionTitles = document.querySelectorAll(".accordion__title");
  const accordionItems = document.querySelectorAll(".accordion__item");
  
  accordionTitles.forEach((title, index) => {
    title.addEventListener("click", () => {
      accordionItems.forEach((item, idx) => {
        if (index === idx) {
          item.classList.toggle("open");
        } else {
          item.classList.remove("open");
        }
      });
    });
  }); 