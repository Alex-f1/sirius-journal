$('.js-button-burger').on('click', function() {
  $(this).toggleClass('_is-active');
  $('.category-menu').toggleClass('_is-show');
  $('html').toggleClass('_is-lock');
});