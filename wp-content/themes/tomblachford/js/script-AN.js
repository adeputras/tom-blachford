(function ($) {
  'use strict';
  $(document).ready(function () {

    // Hide menu on pressing Esc
    $(document).bind('keydown', function(e) { 
        if (e.which == 27) {
          if($('.menu-bg').hasClass('animate')) closeMenu();
        }
    });
    $(document).mouseup(function(e) {
        var container = $(".main-menu");
        if (!container.is(e.target) && container.has(e.target).length === 0 && $('.menu-bg').hasClass('animate')) {
            closeMenu();
        }
    });

    /*var $filters = $('.filter [data-filter]'),
        $boxes = $('.boxes [data-category]');

    $filters.on('click', function(e) {
      e.preventDefault();
      var $this = $(this);
      $filters.removeClass('active');
      $this.addClass('active');

      var $filterColor = $this.attr('data-filter');

      if ($filterColor == 'all') {
        $boxes.removeClass('is-animated')
          .fadeOut().promise().done(function() {
            $boxes.addClass('is-animated').fadeIn();
          });
      } else {
        $boxes.removeClass('is-animated')
          .fadeOut().promise().done(function() {
            $boxes.filter('[data-category = "' + $filterColor + '"]')
              .addClass('is-animated').fadeIn();
          });
      }
    });*/

  });

  // Contact form 7
  $(document).on('wpcf7mailsent', function () {
    $('.row-invalid').removeClass('row-invalid');
  });
  $(document).on('wpcf7invalid', function () {
    $('.wpcf7-not-valid').each(function(){
      $(this).next('span.wpcf7-not-valid-tip').detach().appendTo($(this).parent().parent().find('label'));
      $(this).parent().parent().addClass('row-invalid');
    })
  });

})(jQuery);

(function(jQuery){jQuery.fn.equalHeights=function(minHeight,maxHeight){tallest=(minHeight)?minHeight:0;this.each(function(){if(jQuery(this).height()>tallest){tallest=jQuery(this).height()}});if((maxHeight)&&tallest>maxHeight)tallest=maxHeight;return this.each(function(){jQuery(this).height(tallest)})}})(jQuery)
jQuery(window).load(function($){

  if(jQuery('.gallery-caption').length) {
    //jQuery('.gallery').addClass('animated');
    jQuery('.gallery-caption').equalHeights();
    jQuery('.gallery-caption').wrapInner('<div>');

    jQuery(window).resize(function () {
      jQuery('.gallery-caption').equalHeights();
    });
  }
  
  jQuery(window).resize(function () {
  });


});

// Animate on Scroll
/*AOS.init({
  //offset: 0,
  duration: 600,
  //easing: 'ease-in-sine',
  delay: 100,
  once: true
});*/