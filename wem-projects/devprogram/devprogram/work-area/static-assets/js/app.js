(function($) {

  // Activate current tab nav in sub header.
  if (typeof window.CURRENT_BUTTON !== 'undefined') {
    $('.sub-header li').removeClass('active');
    $('.sub-header li.' + window.CURRENT_BUTTON).addClass('active');
  }

  // Activate modal
  $('.modal').modal();
  $('#free-trial-modal').modal('show');

  // Activate info tooltip
  $('.info').mouseenter(function() {
    $(this).find('.tooltip').show();
  }).mouseleave(function(){
   $(this).find('.tooltip').hide();
  })

  // Functionality for tabs.
  var tabContainers = $('.tabs').children('div');

  tabContainers.hide().filter(':first').show(); // Show the first tab as active.

  $('.tabs ul.tab_nav a').on('click', function () {
    tabContainers.hide();
    tabContainers.filter(this.hash).show();
    $('.tabs ul.tab_nav a').removeClass('selected');
    $(this).addClass('selected');

    return false;
  }).filter(':first').click();

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

  // Header dropdown nav.
  $('.dropdown').mouseenter(function() {
    $('.dropdown-menu').hide();
    $(this).find('.dropdown-menu').show();
    // Hides searchbox module when header nav is show.
    $('#suggested-result').hide();
    $('#quick-search').addClass('hide-border');
  }).mouseleave(function(){
    $(this).find('.dropdown-menu').hide();
  });

  // Hides header nav and searchbox module when click outside.
  $('body').click(function() {
    $(this).find('.dropdown-menu').removeClass('open');
    $(this).find('#quick-search').addClass('hide-border');
    $(this).find('#suggested-result').hide();
  });

  // Set the attribute src for the embed video.
  var video = $(".player").attr("src");

  // Show the video player and hides the rest of te elements.
  $('.play-video').click(function() {
    $(this).parent().hide();
    $(this).parent().siblings().hide();
    $('.container').find('#show-video').show();
    // Add the attribute autoplay for the video to play when show.
    $(".player").attr("src",video+"?autoplay=1");
  });

  // Hide and the video player and hides the rest of te elements.
  $('.close-video').click(function() {
    $(this).parent().hide();
    $(this).parent().siblings().show();
    // Remove the attribute autoplay for the video to stop.
    $(".player").attr("src",video+"?autoplay=0");
  });

  // Activates Jquery UI datepicker functionality
  $( "#from" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    changeYear: true,
    onClose: function( selectedDate ) {
      $( "#to" ).datepicker( "option", "minDate", selectedDate );
    }
  });
  $( "#to" ).datepicker({
    defaultDate: "+1w",
    changeMonth: true,
    changeYear: true,
    onClose: function( selectedDate ) {
      $( "#from" ).datepicker( "option", "maxDate", selectedDate );
    }
  });

  // Remove checkbox row in Full Access Edit App page.
  $('#edit-app-production .row').hide().filter(function() {
    return $(this).find('input:checked').length > 0;
  }).show();

})(jQuery);
