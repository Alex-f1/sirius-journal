function titleArticlesAnimate() {

  const getOffsetArticlesDayBlock = $('.articles-day').length ? $('.articles-day').offset().top - 300 : null;
  const getOffsetOtherBlock = $('.other-articles').length ? $('.other-articles').offset().top - 1000 : null;
  const getOffsetRecommendedBlock = $('.recommended-article').length ? $('.recommended-article').offset().top - 300 : null;
  const getOffsetNextArticledBlock = $('.next-article').length ? $('.next-article').offset().top - 300 : null;

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
    if ($(this).scrollTop() >= getOffsetRecommendedBlock) {
      $('.recommended-article').addClass('_is-visible');
    } else {
      $('.recommended-article').removeClass('_is-visible');
    }
    if ($(this).scrollTop() >= getOffsetNextArticledBlock) {
      $('.next-article').addClass('_is-visible');
    } else {
      $('.next-article').removeClass('_is-visible');
    }
  });

}

if ($('.animate-title').length) {
  if (window.matchMedia("(min-width: 1024px)").matches) {
    titleArticlesAnimate();
  }
}
