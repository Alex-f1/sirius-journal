$(".article-content__video").click(function () {
  let $this = $(this);
  let videoSrc = $this.data('video');

  $this.addClass('_is-play')

  $this.find('iframe').attr('src', videoSrc);
  $this.find('img').fadeOut();
});

$('.article-content__find-answer h3').on('click', function () {
  $(this).toggleClass('_is-active')
  $(this)
        .closest('.article-content__find-answer')
        .find('.article-content__find-answer-inner').stop().slideToggle();
}) 

if ($('.js-gallery-slider').length) {
  var swiper = new Swiper(".js-gallery-slider", {
    effect: "fade",
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}