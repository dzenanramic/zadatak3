let swiperInstance = null;

const swiperConfig = {
  speed: 400,
  spaceBetween: 8,
  slidesPerView: 2.85,
  // centeredSlides: false,
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
      slidesPerView: 1.1, // Show 1 full + 10% of next
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
  // REMOVE ALL CODE BELOW THIS LINE IN THIS FUNCTION
}

function destroySwiper() {
  if (swiperInstance) {
    // REMOVE THE EVENT LISTENER REMOVAL CODE BELOW
    swiperInstance.destroy(true, true);
    swiperInstance = null;
    console.log("Swiper destroyed.");
  }
}

// function initSwiper() {
//   swiperInstance = new Swiper(".swiper-container", swiperConfig);

//   // Add event listeners to all custom buttons
//   document.querySelectorAll(".swiper-button-prev-custom").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       swiperInstance.slidePrev();
//     });
//   });

//   document.querySelectorAll(".swiper-button-next-custom").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       swiperInstance.slideNext();
//     });
//   });

//   console.log("Swiper initialized.");
// }

// function destroySwiper() {
//   if (swiperInstance) {
//     // Remove event listeners from custom buttons
//     document.querySelectorAll(".swiper-button-prev-custom").forEach((btn) => {
//       btn.removeEventListener("click", () => {
//         swiperInstance.slidePrev();
//       });
//     });

//     document.querySelectorAll(".swiper-button-next-custom").forEach((btn) => {
//       btn.removeEventListener("click", () => {
//         swiperInstance.slideNext();
//       });
//     });

//     swiperInstance.destroy(true, true);
//     swiperInstance = null;
//     console.log("Swiper destroyed.");
//   }
// }

// Initialize Swiper when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initSwiper();

  // Toggle button functionality
  document.querySelector(".swiper-toggle").addEventListener("click", () => {
    if (swiperInstance) {
      destroySwiper();
    } else {
      initSwiper();
    }
  });
});
