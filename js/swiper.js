var swiper = new Swiper(".swiper", {
  spaceBetween: 40,
  loop: true,
  speed: 2000,
  slidesPerView: "auto",
  freeMode: true,
  autoplay: {
    delay: 0,
  },
});

var mySwiperwiper = new Swiper(".mySwiper", {
  spaceBetween: 40,
  loop: true,
  speed: 700,
  slidesPerView: "auto",
  centeredSlides: true,
  preventInteractionOnTransition: false,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },
});
