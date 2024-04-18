const swiper3 = new Swiper(".swiper3", {
    // Optional parameters
    loop: true,
    
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next3",
      prevEl: ".swiper-button-prev3",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
  
  });

  const swiper2 = new Swiper(".swiper2", {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
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