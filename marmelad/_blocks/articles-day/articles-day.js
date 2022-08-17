function titleArticlesAnimate() {

  const getOffsetArticlesDayBlock = $('.articles-day').offset().top - 300;
  const getOffsetOtherBlock = $('.other-articles').offset().top - 200;

  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= getOffsetArticlesDayBlock) {
      $('.articles-day').addClass('_is-visible');

    } else {
      $('.articles-day').removeClass('_is-visible');
    }
    if ($(this).scrollTop() >= getOffsetOtherBlock) {
      $('.other-articles').addClass('_is-visible');
    } else {
      $('.other-articles').removeClass('_is-visible');
    }
  });

}

if ($('.animate-title').length) {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    titleArticlesAnimate();
  }
}
