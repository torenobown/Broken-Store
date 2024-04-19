const startTimer = () => {
  const explosionAtTheEndOfTheTimer = true;
  const timerEl = document.querySelector("#promo-time");
  timerEl.innerHTML = `24:00:00`;
  let timer = 86400;

  const formatTime = (timer) => {
    const seconds = timer % 60;
    const secondsInMinute = (timer - seconds) / 60;
    const minutes = secondsInMinute % 60;
    const hour = (secondsInMinute - minutes) / 60;

    return `${hour}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  const timerInterval = setInterval(() => {
    timerEl.innerHTML = formatTime(timer);
    timer--;

    if (timer < 0) {
      clearInterval(timerInterval);
      if (explosionAtTheEndOfTheTimer) {
        document.body.insertAdjacentHTML(
          "beforeend",
          `<video src="../assets/img/ksas.mp4" autoplay style="position: fixed; width: 100vw; height: 100vh; inset: 0; z-index: 9999999; object-fit: cover"></video>`,
        );
      }
    }
  }, 1000);
};

startTimer();

{
  const swiper = new Swiper(".swiper", {
    loop: true,
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
    loop: true,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });
}
