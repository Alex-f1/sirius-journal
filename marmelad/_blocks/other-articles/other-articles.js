function initOtherArticlesGrid() {
  var grid = document.querySelector('.js-other-articles-grid');

  var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
  });

  msnry.layout();

}

if ($('.js-other-articles-grid').length) {
  initOtherArticlesGrid();
}