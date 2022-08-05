var newsSlider = undefined;

function sliderNews() {
  $('.news-slider__container').removeClass('card-stack');
  $('.news-slider__items').removeClass('card-list');
  $('.news-slider__item').removeClass('card');

  $('.news-slider__container').addClass('swiper');
  $('.news-slider__items').addClass('swiper-wrapper');
  $('.news-slider__item').addClass('swiper-slide');

  newsSlider = new Swiper(".js-news-slider", {
    loop: false,
    speed: 800,
    autoplay: {
      delay: 5000,
    },
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<span></span>' + '</span>';
      },
    },
  });
}

function cardNews() {
  $('.news-slider__container').removeClass('swiper').removeAttr('style');
  $('.news-slider__items').removeClass('swiper-wrapper').removeAttr('style');
  $('.news-slider__item').removeClass('swiper-slide').removeAttr('style');

  $('.news-slider__container').addClass('card-stack');
  $('.news-slider__items').addClass('card-list');
  $('.news-slider__item').addClass('card');

  const lastCard = $('.card-list .card').length - 1;

  $('.next').click(function (event) {
    event.preventDefault();
    var prependList = function () {
      if ($('.card').hasClass('activeNow')) {
        var $slicedCard = $('.card').slice(lastCard).removeClass('transformThis activeNow');
        $('.card-list').prepend($slicedCard);
      }
    }
    $('.card').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
    setTimeout(function () { prependList(); }, 200);
  });

  $('.prev').click(function (event) {
    event.preventDefault();
    var appendToList = function () {
      if ($('.card').hasClass('activeNow')) {
        var $slicedCard = $('.card').slice(0, 1).addClass('transformPrev');
        $('.card-list').append($slicedCard);
      }
    }

    $('.card').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');
    setTimeout(function () { appendToList(); }, 200);
  });
}

if (window.matchMedia("(min-width: 960px)").matches) {
  cardNews();
} else {
  sliderNews();
}