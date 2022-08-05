function titleArticlesAnimate() {
  
  const getOffsetArticlesDayBlack = $('.articles-day').offset().top - 300; 
  
  $(window).on('scroll', function() {
    if ($(this).scrollTop() >= getOffsetArticlesDayBlack) {
      $('.articles-day').addClass('_is-visible')
    } else {
      $('.articles-day').removeClass('_is-visible')
    }
  });

}

if (window.matchMedia("(min-width: 1024px)").matches) {
  titleArticlesAnimate();
}