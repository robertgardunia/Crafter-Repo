(function($) {
  $(document).ready(function() {
    // Activate expandable form
    $('.talk-with-expert .point-of-entry').click(function() {
      $(this).hide();
      $('form').show();
    });

    // Hide expandable form
    $('.talk-with-expert .cancel, .talk-with-expert .close').click(function() {
      $('.talk-with-expert form').hide();
      $('.talk-with-expert .point-of-entry').show();
    });
  });
}) (jQuery);
