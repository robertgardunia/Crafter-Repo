(function($) { 
  // Right and left handle functionality for events date calendar
  var calendar = $("#calendar").find("ul");
  var handles  = $('.right-handle, .left-handle');

  $('.right-handle').click(function(e) {
    handles.removeClass('disable');
    calendar.animate({left:'-=140px'}, {queue: false, duration: 200});
    if (calendar.position().left <= -800) {
      calendar.stop().animate();
      $(this).addClass('disable');
    };
    return false;
  });
  $('.left-handle').click(function(e) {
    handles.removeClass('disable');
    calendar.animate({left:'+=140px'}, {queue: false, duration: 200});
    if (calendar.position().left >= 100) {
      calendar.stop().animate();
      $(this).addClass('disable');
    };
    return false;

  });

  // Load map img so it doesn't appear before loading the tabs functionality
  $('#events-location img').show();

  // Load more posts in blog
  $('.load-more').click(function() {
    $(this).hide();
    $(this).parent().find('article').next().show();
  });

  // Signup confirmation
  $('.hackathon-registration form').on("submit", function () {
    $(this).hide();
    $(this).next('.confirmation-box').show();
  });


})(jQuery);
