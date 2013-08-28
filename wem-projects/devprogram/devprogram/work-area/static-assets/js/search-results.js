(function($) {
  $(document).ready(function() {
    // Infinite scroll functionality.
    var INITIAL_ITEM_NUMBER = 20; // Max items shown at startup
    var LOAD_ITEM_NUMBER = 20; // Max items loaded once
    var anchors = $('#search-results #results-filter ul.tab_nav a');
    if (anchors.length) {
      // Currently, all pages use this app.js, we use this condition
      // to only add scrolling logic to search results page
      anchors.click(function () {
        var container = $(this.hash);

        if (!container.hasClass('initialized')) {
          // only initialize once
          container.find('.row').slice(0, INITIAL_ITEM_NUMBER).show()
            .end().slice(INITIAL_ITEM_NUMBER).hide();
          container.addClass('initialized');
        }
      }).filter(':first').click();

      $(window).scroll(function() {
        var w = $(window);
        var d = $(document);

        if (w.scrollTop() >= d.height() - w.height() - 500) {
          $("#results-filter .container:visible .row:hidden")
            .slice(0, LOAD_ITEM_NUMBER).show();
        }
      });
    }
  });
}) (jQuery);
