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

  var articlesDay = $('.articles-day__inner');
  var articlesDaySlider = $('.articles-day__col--slider');
  var articlesDayColsLeft = $('.articles-day__col--left .articles-day__items');
  var articlesDayColsRight = $('.articles-day__col--right .articles-day__items');
  var outerHeightLeft = articlesDayColsLeft.outerHeight();
  var outerHeightRight = articlesDayColsRight.outerHeight();
  var lrDif = outerHeightRight - outerHeightLeft;
  var lrDifSpeed = 0;
  articlesDay.css('height', outerHeightLeft);
  articlesDaySlider.css('height', outerHeightLeft);
  let windowHeight = window.innerHeight;

  var articlesDayTop = articlesDay.offset().top;
  let scrollYRelease = articlesDayTop + outerHeightLeft - windowHeight + 200;
  let scrollDiff = outerHeightLeft - windowHeight;
  
  var cards = $('.card');

  var sliderStep = 150 / cards.length;

  var sliderCurrent = 0;
 
  $(window).scroll(function () {
    if (articlesDayTop >= window.pageYOffset) {
      articlesDayColsRight.css({
        transform: 'translateY(0)',
      });
    }

    if (scrollYRelease <= window.pageYOffset) {
      console.log(window.pageYOffset);
    }

    //start
    if (articlesDayTop <= window.pageYOffset && scrollYRelease > window.pageYOffset) {
      let progress = (window.pageYOffset - articlesDayTop) / (scrollDiff / 100);
      let progressPath = (lrDif + lrDifSpeed) / 100 * progress;
      
      if (progressPath > lrDif) {
        progressPath = lrDif;
      }

      if (progressPath <= 0) {
        progressPath = 0;
      }

      articlesDayColsRight.css({
        transform: 'translateY(-' + progressPath + 'px)',
      });
      
      var slideIndex = parseInt(progress / sliderStep);
      
      if (slideIndex != sliderCurrent) {
        sliderCurrent = slideIndex;
        var prependList = function () {
          if ($('.card').hasClass('activeNow')) {
            var $slicedCard = $('.card').slice(lastCard).removeClass('transformThis activeNow');
            $('.card-list').prepend($slicedCard);
          }
        }
        $('.card').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
        setTimeout(function () { prependList(); }, 200);
      }
      
    }      
  });

  // $('.next').click(function (event) {
  //   event.preventDefault();
  //   var prependList = function () {
  //     if ($('.card').hasClass('activeNow')) {
  //       var $slicedCard = $('.card').slice(lastCard).removeClass('transformThis activeNow');
  //       $('.card-list').prepend($slicedCard);
  //     }
  //   }
  //   $('.card').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
  //   setTimeout(function () { prependList(); }, 200);
  // });

  // $('.prev').click(function (event) {
  //   event.preventDefault();
  //   var appendToList = function () {
  //     if ($('.card').hasClass('activeNow')) {
  //       var $slicedCard = $('.card').slice(0, 1).addClass('transformPrev');
  //       $('.card-list').append($slicedCard);
  //     }
  //   }

  //   $('.card').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');
  //   setTimeout(function () { appendToList(); }, 200);
  // });
}

if (window.matchMedia("(min-width: 960px)").matches) {
  cardNews();
} else {
  sliderNews();
}