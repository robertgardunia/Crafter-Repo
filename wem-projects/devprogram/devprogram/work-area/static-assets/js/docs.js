(function($) {
  $(document).ready(function() {
    // Highlight menu active item functionality
    if ($('.api-docs').length) {
      var menuItems = $("#toc a"),
      scrollItems = menuItems.map(function() {
        var item = $(this.hash);
        if (item.length) return item;
      }),
      lastActiveId;
      $(window).scroll(function() {
        var $this = $(this);

        var scrollY = $this.scrollTop() + 120;
        var hiddenItems = scrollItems.map(function() {
          var $this = $(this);
          if ($this.offset().top < scrollY) {
            return $this;
          }
        });

        var currentItem = (hiddenItems.length) ?
          (hiddenItems[hiddenItems.length - 1]) :
          scrollItems[0];
        var currentId = currentItem.attr("id");

        if (lastActiveId !== currentId) {
          lastActiveId = currentId;
          menuItems.parent().removeClass("highlighted")
            .end()
            .filter("[href=#" + currentId + "]")
            .parent().addClass("highlighted");
        }
      });
    }

    // Docs notice.
    $('a.close').click(function(){
      $(this).parent().fadeOut();
    });

    // Docs sidebar list functionality.
    $('#sidebar li a, #back-to-top').click(function(e) {
      // Scroll to the anchored section.
      $("body").animate({
        scrollTop: $(this.hash).offset().top - 110 // minus the header height.
      }, 500);

      e.preventDefault();
    });

    // Trigger header with fixed scroll.
    // These two scroll features make the page slow
    $(".api-docs .sub-header").scrollFixed({
      margin: 0,
      container: $("#document-area")
    });

    // Trigger sidebar with fixed scroll.
    $("#sidebar .fixed-scroll").scrollFixed({
      margin: 92,
      container: $("#document-area")
    });

    // Copyboard functionaliry
    ZeroClipboard.setDefaults( { moviePath: '/ZeroClipboard.swf'} );
    var clip                  = new ZeroClipboard();
    var notification          = $('.notification');
    var initializeCopyButtons = function () {

      clip.on( 'complete', function ( client, args ) {
        notification.addClass('success');
        notification.find('span').text('Succefully copied to clipboard.');
        notification.slideDown();
        setTimeout(function(){
          notification.fadeOut();
        }, 3000); 
      });

      $('.copy-button').each(function () {
        var button = $(this);
        var pre = button.siblings("pre");
        button.attr('data-clipboard-text', pre.text().trim());
        clip.glue(button);
        button.show();
      });
      $(window).resize(function() {
        clip.reposition();
      });
      clip.off('load', initializeCopyButtons);
    };
    clip.on('load', initializeCopyButtons);
  });

  // Show the tutorial video player and hides the rest of the elements.
  var video = $(".player").attr("src"); // Set the attribute src for the embed video.
  var tutorialVideo = $('.tutorial-video');

  $('.play-tutorial-video').click(function() {
    // Hides and stops all the open videos.
    tutorialVideo.hide();
    tutorialVideo.siblings().show();
    $(".player").attr("src",video+"?autoplay=0");
    // Show clicked video
    $(this).hide();
    $(this).siblings().hide();
    $(this).siblings('.tutorial-video').show();
    // Add the attribute autoplay for the video to play when show.
    $(this).parent('article').find(".player").attr("src",video+"?autoplay=1");
  });

}) (jQuery);
