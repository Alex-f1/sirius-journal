function titleArticlesAnimate() {

  const getOffsetArticlesDayBlock = $('.articles-day').length ? $('.articles-day').offset().top - 300 : null;
  const getOffsetOtherBlock = $('.other-articles').length ? $('.other-articles').offset().top  : null;
  const getOffsetRecommendedBlock = $('.recommended-article').length ? $('.recommended-article').offset().top - 300 : null;
  const getOffsetNextArticledBlock = $('.next-article').length ? $('.next-article').offset().top - 300 : null;
  const getOffsetOtherPodcastsBlock = $('.other-podcasts').length ? $('.other-podcasts').offset().top - 300 : null;
  const getOffsetAboutProjectBlock = $('.about-project').length ? $('.about-project').offset().top - 300 : null;
  const getOffsetEditorialBlock = $('.editorial').length ? $('.editorial').offset().top - 300 : null;
  const getOffsetOurContactsBlock = $('.our-contacts').length ? $('.our-contacts').offset().top - 300 : null;

  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= getOffsetArticlesDayBlock) {
      $('.articles-day').addClass('_is-visible');
    } else {
      $('.articles-day').removeClass('_is-visible');
    }
    if (window.matchMedia("(min-height: 660px)").matches) {
      if ($(this).scrollTop() >= getOffsetOtherBlock - 1200) {
        $('.other-articles').addClass('_is-visible');
      } else {
        $('.other-articles').removeClass('_is-visible');
      }

    } else {
      if ($(this).scrollTop() >= getOffsetOtherBlock - 700) {
        $('.other-articles').addClass('_is-visible');
      } else {
        $('.other-articles').removeClass('_is-visible');
      }
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
    if ($(this).scrollTop() >= getOffsetOtherPodcastsBlock) {
      $('.other-podcasts').addClass('_is-visible');
    } else {
      $('.other-podcasts').removeClass('_is-visible');
    }
    if ($(this).scrollTop() >= getOffsetAboutProjectBlock) {
      $('.about-project').addClass('_is-visible');
    } else {
      $('.about-project').removeClass('_is-visible');
    }
    if ($(this).scrollTop() >= getOffsetEditorialBlock) {
      $('.editorial').addClass('_is-visible');
    } else {
      $('.editorial').removeClass('_is-visible');
    }
    if ($(this).scrollTop() >= getOffsetOurContactsBlock) {
      $('.our-contacts').addClass('_is-visible');
    } else {
      $('.our-contacts').removeClass('_is-visible');
    }
  });

}

if ($('.animate-title').length) {
  $(window).on('load resize', function () {
    if (window.matchMedia("(min-width: 1024px)").matches) {
      titleArticlesAnimate();
    }
  })
}
