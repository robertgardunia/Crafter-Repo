(function($) {
  $(document).ready(function() {  

    // Functionality for apps manage nav.
    $('.manage-sandbox .key, .manage-production .key').click(function() {
      var $manage = $(this).closest('.manage');

      $manage.find('.key').removeClass('selected');
      $(this).addClass('selected');
      $manage.find('.sandbox, .production').toggle();
      $manage.find('.sandbox').addClass('selected');
    })

    // Functionality delete apps.
    $('.app .delete').click(function() {
      var $lastApp = $(this).closest('.app');

      $('#delete-app').click(function() {
        $lastApp.fadeOut();
      });
    });
  });

}) (jQuery);
