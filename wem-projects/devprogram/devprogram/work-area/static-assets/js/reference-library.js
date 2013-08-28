(function($) {

  $('#toc li a').click(function() {
    event.stopPropagation();
    $(this).next('ul').toggle();
  });

  var libraryContent = $('.content section');
  libraryContent.hide().filter(':first').show();

  $('#toc li a').on('click', function () {
    libraryContent.hide();
    libraryContent.filter(this.hash).show();
    $('#toc li').removeClass('highlighted');
    $(this).parent().addClass('highlighted');

    return false;
  }).filter(':first').click();

})(jQuery);
