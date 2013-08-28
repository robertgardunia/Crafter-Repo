(function($) {
  $(document).ready(function() {
    // Api homepage nav.
    $('.api-nav a').hover(function() {
      $('.api-nav a').removeClass('active');
      $(this).addClass('active');
    });
  });
}) (jQuery);
