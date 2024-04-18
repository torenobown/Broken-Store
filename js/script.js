const startTimer = () => {
  const timerEl = document.querySelector("#promo-time");
  timerEl.innerHTML = `24:0:00`;
  let timer = 86400;

  const formatTime = (timer) => {
    const seconds = timer % 60;
    const secondsInMinute = (timer - seconds) / 60;
    const minutes = secondsInMinute % 60;
    const hour = (secondsInMinute - minutes) / 60;

    return `${hour}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const timerInterval = setInterval(() => {
    timerEl.innerHTML = formatTime(timer);
    timer--;
  }, 1000);

  if (timer === 0) clearInterval(timerInterval);
};

startTimer();

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
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

const swiper3 = new Swiper(".swiper3", {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  spaceBetween: 24,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next3",
    prevEl: ".swiper-button-prev3",
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

console.log('GKLDFkldjGKLJFDKLGJFKL')