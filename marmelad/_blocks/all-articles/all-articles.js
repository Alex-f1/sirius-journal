function initAllArticlesGrid() {
  var grid = document.querySelector('.js-all-articles-grid');
  
  var msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
  });
  
  msnry.layout();

}

if ($('.js-all-articles-grid').length) {
  initAllArticlesGrid();
}