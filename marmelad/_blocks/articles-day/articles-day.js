function titleArticlesAnimate() {
  
  const getOffsetArticlesDayBlack = $('.articles-day').offset().top - 300; 
  const getOffsetOtherBlack = $('.other-articles').offset().top - 200; 
  
  $(window).on('scroll', function() {
    if ($(this).scrollTop() >= getOffsetArticlesDayBlack) {
      $('.articles-day').addClass('_is-visible');
    } else {
      $('.articles-day').removeClass('_is-visible');
    }
    if ($(this).scrollTop() >= getOffsetOtherBlack) {
      $('.other-articles').addClass('_is-visible');
    } else {
      $('.other-articles').removeClass('_is-visible');
    }
  });

}

if (window.matchMedia("(min-width: 1024px)").matches) {
  titleArticlesAnimate();
}