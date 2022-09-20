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

}

function cardNews(disabledRaf) {
  if (disabledRaf) {
    window.cancelAnimationFrame(scrollRaf);   
    return;
  }
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

  var sliderCurrent = 1;
  
  var scrollPos = 0;

  var scrollStep = Math.round(outerHeightLeft / 4);
  var forBackScroll;
  function scrollRaf () {
    if (articlesDayTop >= window.pageYOffset) {
      articlesDayColsRight.css({
        transform: 'translateY(0)',
      });

      scrollStep = Math.round(outerHeightLeft / 4);
      forBackScroll;
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
        console.log('0')
      }

      articlesDayColsRight.css({
        transform: 'translateY(-' + progressPath + 'px)',
      });
      
      var slideIndex = parseInt(progress / sliderStep);

      // console.log(slideIndex)

      var scrollTop = $(window).scrollTop();
      // console.log(scrollTop);

      
      // console.log(scrollStep)
      // var slideIndexStep = Math.ceil((scrollTop - $('.articles-day').offset().top) / scrollStep);
      var slideIndexStep = Math.ceil((scrollTop - $('.articles-day').offset().top));
      // console.log(slideIndexStep)
      // console.log(sliderCurrent, slideIndexStep)

      if (scrollStep <= slideIndexStep && scrollTop > scrollPos) {
        scrollStep += Math.round(scrollStep / 2);
        forBackScroll = scrollStep;
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
      } else if (forBackScroll >= slideIndexStep && forBackScroll >= 300 && scrollTop < scrollPos) {
        forBackScroll -= Math.round(forBackScroll / 2)
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

    if (window.matchMedia("(min-width: 1024px)").matches && window.matchMedia("(min-height: 660px)").matches) {
      window.requestAnimationFrame(scrollRaf);
    } else {
      window.cancelAnimationFrame(scrollRaf);
    }
  }
  
  
  window.requestAnimationFrame(scrollRaf);   

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
      cardNews(false);
    } else {
      cardNews(true);
      $('.news-slider--desktop').css('display', 'none')
      $('.news-slider--mobile').css({display: 'block', paddingTop: 0,})
      $('.articles-day__col--slider').css('height', 'auto')
      $('.articles-day__inner').css('height', 'auto')
    }
  }) 
  sliderNews();
}