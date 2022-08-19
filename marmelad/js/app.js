'use strict';

/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */
function setViewportProperty(){
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}
window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Полифил для NodeList.forEach(), на случай если забыл про IE 11
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * ========================================================================== */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/* ^^^
 * JQUERY Actions
 * ========================================================================== */
$(function() {
  //=require ../_blocks/**/*.js

  function footerCol() {
    let offsetFooterColLeft = 0;
  
    function hoverFooterCol() {
  
      $(window).on('load resize', function () {
        let getWidthItem = $('.footer__col--fill').width();
        let getHeightItem = $('.footer__col--fill').height();
  
  
        $('.js-backdrop-fill-footer').css({
          width: getWidthItem,
          height: getHeightItem,
        })
      });
      
      $('.footer__col--fill').each(function() {
        let $thisElem = $(this);
  
        $thisElem.on('mouseover', function () {
          $thisElem.addClass('_is-active');
          offsetFooterColLeft = $thisElem.position().left;
          $('.js-backdrop-fill-footer').addClass('_is-show').css('left', offsetFooterColLeft);
        });
        $thisElem.on('mouseleave', function () {
          $thisElem.removeClass('_is-active');
          $('.js-backdrop-fill-footer').removeClass('_is-show');
        });
      });
    }
  
    hoverFooterCol();
  }

  $(window).on('load resize', function () {
    if (window.matchMedia("(min-width: 1280px)").matches) {
      footerCol();
    }
  }) 
});
