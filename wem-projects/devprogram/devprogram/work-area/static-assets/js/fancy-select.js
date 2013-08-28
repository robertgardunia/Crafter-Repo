(function($) {
  $(".fancy-select").each(function() {
    var $this = $(this);
    var $select = $this.children("select");
    var $text = $this.find(".text");
    var defaultText = $text.text();

    $select.change(function() {
      var val = $(this).find("option:selected").text();
      $text.text(val || defaultText);
    });
  });
}) (jQuery);
