function projectsNewsSlider() {
  const projectsNewsSlider = new Swiper(".js-projects-news-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 1000,
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      "320": {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      "640": {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  $('.projects-news__item:last-child').addClass('projects-news__item--last');

  let offsetLeft = 0;
  let offsetLeftNext = 0;

  let getWidthItem = $('.projects-news__item').width();
  let getHeightItem = $('.projects-news__item').height();

  offsetLeft = $('.projects-news__item.swiper-slide-active').position().left;
  offsetLeftNext = $('.projects-news__item.swiper-slide-active').next().position().left;

  $('.js-backdrop-fill').css({
    width: getWidthItem,
    height: getHeightItem,
  });

  function hoverItem() {
    offsetLeft = $('.projects-news__item.swiper-slide-active').position().left;
    offsetLeftNext = $('.projects-news__item.swiper-slide-active').next().position().left;

    $('.projects-news__item.swiper-slide-next').on('mouseover', function () {
      $(this).addClass('_is-active');
      $('.js-backdrop-fill').addClass('_is-show');
      $('.js-backdrop-fill').css('left', offsetLeftNext);
    });
    $('.projects-news__item.swiper-slide-active').on('mouseover', function () {
      $(this).addClass('_is-active');
      $('.js-backdrop-fill').addClass('_is-show');
      $('.js-backdrop-fill').css('left', offsetLeft);
    });
  }

  hoverItem();

  function unHoverItem() {
    $('.projects-news__item.swiper-slide-next').on('mouseleave', function () {
      $(this).removeClass('_is-active');
      $('.js-backdrop-fill').removeClass('_is-show');
    });
    $('.projects-news__item.swiper-slide-active').on('mouseleave', function () {
      $(this).removeClass('_is-active');
      $('.js-backdrop-fill').removeClass('_is-show');
    });
  }

  unHoverItem();

  if (window.matchMedia("(max-width: 639px)").matches) {
    $('.projects-news__item.swiper-slide-active').addClass('_is-active');
    $('.js-backdrop-fill').addClass('_is-show');
    $('.js-backdrop-fill').css('left', offsetLeft);

    projectsNewsSlider.on('beforeTransitionStart', function () {
      offsetLeft = $('.projects-news__item.swiper-slide-active').position().left;
      offsetLeftNext = $('.projects-news__item').next().position().left;

      $('.projects-news__item.swiper-slide-active').addClass('_is-active').siblings().removeClass('_is-active');
      $('.js-backdrop-fill').addClass('_is-show');
      $('.js-backdrop-fill').css('left', offsetLeft);
    });
  } else {
    projectsNewsSlider.on('beforeTransitionStart', function () {
      hoverItem();
      unHoverItem();
    });
  }
}


if ($('.js-projects-news-slider').length) {
  $(window).on('load resize', function() {
    projectsNewsSlider();
  });
}