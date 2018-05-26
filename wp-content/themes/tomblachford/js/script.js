(function ($) {
  'use strict';
  $(document).ready(function () {
    
    // Animation
    $(".animsition, a.btn").animsition({
      inClass: 'fade-in',
      outClass: 'fade-out',
      inDuration: 800,
      outDuration: 800,
      //linkElement: '.menu-item a',
      linkElement: 'a:not([target="_blank"]):not([href^="#"])',
      loading: true,
      loadingParentElement: 'body', //animsition wrapper element
      loadingClass: 'animsition-loading',
      loadingInner: '', // e.g '<img src="loading.svg" />'
      timeout: true,
      timeoutCountdown: 5000,
      onLoadEvent: true,
      browser: ['animation-duration', '-webkit-animation-duration'],
      // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
      // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
      overlay: false,
      overlayClass: 'animsition-overlay-slide',
      overlayParentElement: 'body',
      transition: function (url) {
        window.location.href = url;
      }
    });

    // mobile navigation
    $('.burger').on('click', function (e) {
      e.preventDefault();
      if (!$(this).hasClass('open')) {
        openMenu();
      } else {
        closeMenu();
      }
    });

    function openMenu() {
      $('.menu-bg').addClass('animate');
      $('.burger, .logo').addClass('open');
      $('.x, .z').addClass('collapse-icon');
      $('.main-menu').addClass('animate');
      $('body').css({
        'overflow': 'hidden',
        'height': '100vh'
      });

      setTimeout(function () {
        $('.y').hide();
        $('.x').addClass('rotate30');
        $('.z').addClass('rotate150');
      }, 70);
      setTimeout(function () {
        $('.x').addClass('rotate45');
        $('.z').addClass('rotate135');
      }, 120);
      setTimeout(function () {
        $('.main-menu').addClass('opened');
      }, 650);
    }

    function closeMenu() {
      $('.main-menu').removeClass('animate');
      $('.main-menu').removeClass('opened');
      $('body').css({
        'overflow': '',
        'height': 'auto'
      });

      setTimeout(function () {
        $('.burger, .logo').removeClass('open');
        $('.x').removeClass('rotate45').addClass('rotate30');
        $('.z').removeClass('rotate135').addClass('rotate150');
        $('.menu-bg').removeClass('animate');

        setTimeout(function () {
          $('.x').removeClass('rotate30');
          $('.z').removeClass('rotate150');
        }, 50);
        setTimeout(function () {
          $('.y').show();
          $('.x, .z').removeClass('collapse-icon');
        }, 70);
      }, 100);
    }

    function mainHeight() {
      var headerHeight = $('#header').outerHeight();
      var footerHeight = $('#footer').outerHeight();
      var winHeight = $(window).height();
      var main = winHeight - headerHeight - footerHeight;
      $('.home .home-image').css({
        height: main
      })
    }mainHeight();
    $( window ).resize(function() {
      mainHeight();
    });
  });

})(jQuery);