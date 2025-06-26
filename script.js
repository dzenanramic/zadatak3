let swiperInstance = null;

const swiperConfig = {
  speed: 400,
  spaceBetween: 8,
  slidesPerView: 2.85,
  loop: false,
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  on: {
    slideChange: function () {
      console.log("Active slide index:", this.realIndex);
    },
  },
  breakpoints: {
    375: {
      slidesPerView: 1.1,
      spaceBetween: 8,
    },
    1024: {
      slidesPerView: 2.85,
    },
  },
};

function initSwiper() {
  swiperInstance = new Swiper(".swiper-container", swiperConfig);
  console.log("Swiper initialized.");
}

function destroySwiper() {
  if (swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
    console.log("Swiper destroyed.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initSwiper();

  document.querySelector(".swiper-toggle").addEventListener("click", () => {
    if (swiperInstance) {
      destroySwiper();
    } else {
      initSwiper();
    }
  });
});
