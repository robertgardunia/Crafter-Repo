(function($) {
    $.fn["scrollFixed"] = function(params) {
        if ($(this).length == 0) return false;

        var $window    = $(window);
        var $element   = $(this);
        var $container = params["container"] ? $(params["container"]) : $element.parent();
        var after     = parseInt(params["after"]) || 0;
        var offset     = $element.offset();
        var margin     = params["margin"] === undefined ? 5 : parseInt(params["margin"]);

        $window.scroll(function() {
            if ($window.scrollTop() + margin + after > offset.top) {
                $element.css({ "position": "fixed", "top": margin, "left": offset.left });
            } else {
                $element.css({ "position": "static", "top": "auto", "left": "auto" });
            }

            // Anchor it to its container, so it doesn't get fixed permanently.
            if ($element.offset().top + $element.height() > offset.top + $container.height()) {
                var lower_position = $container.position().top +
                    $container.height() - $element.height() - margin;

                $element.css({ "position": "absolute", "top": lower_position, "left": "auto" });
            }
        });
    };
})(jQuery);