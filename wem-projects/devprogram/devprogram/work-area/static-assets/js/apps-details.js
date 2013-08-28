(function($) {
  $(document).ready(function() {  

    // Functionality for apps details menu.
    $('.menu li').click(function() {
      $('.menu li').removeClass('selected');
      $(this).addClass('selected');

      if ($('.menu .production').hasClass('selected')) {
        $('.submenu li:last').show();
      } else {
        $('.submenu li:last, #analytics').hide();
      };
    });

  });
}) (jQuery);
