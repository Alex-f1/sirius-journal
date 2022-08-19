// var newsSlider = undefined;

function sliderNews() {
  var newsSlider = new Swiper(".news-slider--mobile .js-news-slider", {
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
  // $('.news-slider__container').removeClass('card-stack');
  // $('.news-slider__items').removeClass('card-list');
  // $('.news-slider__item').removeClass('card');

  // $('.news-slider__container').addClass('swiper');
  // $('.news-slider__items').addClass('swiper-wrapper');
  // $('.news-slider__item').addClass('swiper-slide');

  /* const breakpoint = window.matchMedia('(max-width:1279px)');
  const breakpointHeight = window.matchMedia('(max-height:660px)');

  let newsSlider;

  const breakpointChecker = function () {

    if (breakpoint.matches === false && breakpointHeight === false) {

      if (newsSlider !== undefined) newsSlider.destroy(true, true);

      return;

    } else if (breakpoint.matches === true && breakpointHeight === true) {

      return enableSwiper();

    }

  };

  const enableSwiper = function () {

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

  };

  breakpoint.addEventListener("load", breakpointChecker);
  breakpointHeight.addEventListener("load", breakpointChecker);

  breakpointChecker(); */

}

function cardNews() {
  // $('.news-slider__container').removeClass('swiper').removeAttr('style');
  // $('.news-slider__items').removeClass('swiper-wrapper').removeAttr('style');
  // $('.news-slider__item').removeClass('swiper-slide').removeAttr('style');

  // $('.news-slider__container').addClass('card-stack');
  // $('.news-slider__items').addClass('card-list');
  // $('.news-slider__item').addClass('card');

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

  var sliderStep = parseInt(160 / cards.length);

  var sliderCurrent = 0;
  
  var scrollPos = 0;
 
  $(window).scroll(function () {
    if (articlesDayTop >= window.pageYOffset) {
      articlesDayColsRight.css({
        transform: 'translateY(0)',
      });
    }

    /* if (scrollYRelease <= window.pageYOffset) {
      console.log(window.pageYOffset);
    } */

    //start
    if (articlesDayTop <= window.pageYOffset && scrollYRelease > window.pageYOffset) {
      let progress = (window.pageYOffset - articlesDayTop) / (scrollDiff / 100);
      let progressPath = (lrDif + lrDifSpeed) / 100 * progress;

      $('.articles-day__head').css('z-index', 45)
      
      
      if (progressPath > lrDif) {
        progressPath = lrDif;

        $('.articles-day__head').css('z-index', 60)

      }

      if (progressPath <= 0) {
        progressPath = 0;
      }

      articlesDayColsRight.css({
        transform: 'translateY(-' + progressPath + 'px)',
      });
      
      var slideIndex = parseInt(progress / sliderStep);

      var scrollTop = $(this).scrollTop();

      
      
      if (slideIndex != sliderCurrent && scrollTop > scrollPos) {
        sliderCurrent = slideIndex;
        var prependList = function () {
          if ($('.card').hasClass('activeNow')) {
            var $slicedCard = $('.card').slice(lastCard).removeClass('transformThis activeNow');
            $('.card-list').prepend($slicedCard);
          } else {
            $('.card').last().addClass('activeNow');
          }
        }
        $('.card').last().removeClass('transformPrev').addClass('transformThis').prev().addClass('activeNow');
        setTimeout(function () { prependList(); }, 200);
      } else if (slideIndex != sliderCurrent && scrollTop < scrollPos) {
        sliderCurrent = slideIndex;
        var appendToList = function () {
          if ($('.card').hasClass('activeNow')) {
            var $slicedCard = $('.card').slice(0, 1).addClass('transformPrev');
            $('.card-list').append($slicedCard);
          }
        }

        $('.card').removeClass('transformPrev').last().addClass('activeNow').prevAll().removeClass('activeNow');
        setTimeout(function () { appendToList(); }, 200);
      }
      
      scrollPos = scrollTop;

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

if ($('.articles-day').length) {
  $(window).on('load resize', function() {
    if (window.matchMedia("(min-width: 1024px)").matches && window.matchMedia("(min-height: 660px)").matches) {
      cardNews();
    } else {
      $('.news-slider--desktop').css('display', 'none')
      $('.news-slider--mobile').css({display: 'block', paddingTop: 0,})
      $('.articles-day__col--slider').css('height', 'auto')
      $('.articles-day__inner').css('height', 'auto')
    }
  }) 
  sliderNews();
}