function otherNewsSlider() {
  const otherNewsSlider = new Swiper(".js-other-news-slider", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    /* pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }, */
    breakpoints: {
      "320": {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      "640": {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      "1024": {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      "1280": {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
    },
  });
}


if ($('.js-other-news-slider').length) {
  $(window).on('load resize', function () {
    otherNewsSlider();
  });
}