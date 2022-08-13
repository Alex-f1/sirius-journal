$('.js-button-burger').on('click', function() {
  $(this).toggleClass('_is-active');
  $('.category-menu').toggleClass('_is-show');
  $('html').toggleClass('_is-lock');
});

$('.js-button-search').on('click', function(event) {
  event.preventDefault();
  $('.top-line .search-panel').addClass('_is-show');
});

$('.js-button-close').on('click', function(event) {
  $('.top-line .search-panel').removeClass('_is-show');
});