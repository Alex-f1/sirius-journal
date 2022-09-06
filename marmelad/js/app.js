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

  function initAudioPlayer() {
    var IsIos = /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
    
    const audioPlayer = $('#audio_player');

    audioPlayer.audioPlayer();

    $('.audioplayer-playpause').on('click', function () {
      $(this).closest('.audioplayer').addClass('_is-active-audio-player');
      
    });

    $('.js-button-playback-rate').on('click', function() {
      let thisElem = $(this);
      thisElem.addClass('_is-active').siblings().removeClass('_is-active');
      let getDataPlaybackRate = thisElem.data('playback-rate');

      if (getDataPlaybackRate == 'x0.5') {
        document.querySelector('audio').playbackRate = 0.5;
      }
      if (getDataPlaybackRate == 'x0.75') {
        document.querySelector('audio').playbackRate = 0.75;
      }
      if (getDataPlaybackRate == 'x1') {
        document.querySelector('audio').playbackRate = 1.0;
      }
      if (getDataPlaybackRate == 'x2') {
        document.querySelector('audio').playbackRate = 2.0;
      }
      if (getDataPlaybackRate == 'x3') {
        document.querySelector('audio').playbackRate = 2.0;
      }
      if (getDataPlaybackRate == 'x4') {
        document.querySelector('audio').playbackRate = 4.0;
      }
    });

    if (IsIos) {
      $('.podcasts-list__audio-player').addClass('_is-ios');
    }

    let getOffsetTopAudioPlayerBar = $('.audioplayer-bar').offset().top + 50;

    $(window).on('scroll', function () {
      if ($(this).scrollTop() >= getOffsetTopAudioPlayerBar && $('.audioplayer').hasClass('audioplayer-playing')) {
        $('.audio-player-fixed-panel').addClass('_is-show');
        $('.audioplayer-time').addClass('_is-fixed');
        $('.audioplayer-bar').addClass('_is-fixed');
        $('.other-podcasts__head').css('top', 24);
        // $('.playback-rate').addClass('_is-fixed');
      } else {
        $('.audio-player-fixed-panel').removeClass('_is-show');
        $('.audioplayer-time').removeClass('_is-fixed');
        $('.audioplayer-bar').removeClass('_is-fixed');
        // $('.playback-rate').removeClass('_is-fixed');
      }
    });
    
  }

  if ($('#audio_player').length) {
    initAudioPlayer();
  }

  $('.category-menu').show();
});
