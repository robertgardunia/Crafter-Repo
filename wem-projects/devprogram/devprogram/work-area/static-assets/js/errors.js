(function($) {
  /* TODO: We should probably move this elsewhere and use it everywhere
           we have fancy selects */
  function FancySelect(selectNode) {
    $(selectNode).wrap('<div class="fancy-select"></div>');
    var wrapper = $(selectNode).parent();

    wrapper.append('<span class="cover"><span class="text"></span></span>');
    wrapper.append('<span class="arrow form-icon"></span>');

    var setCoverText = function() {
      var selectedLabel = $('option:selected', selectNode).text();
      $('.cover .text', wrapper).text(selectedLabel);
    };

    $(selectNode).change(setCoverText);
    setCoverText();
  }

  function filterErrors(api, type) {
    $("table.errors tbody tr").each(function(i, tr) {
      var $tr = $(tr);
      var apis = $tr.data("apis").split(",");

      var visible = !!((type == "ALL" || $tr.data("code").match("^" + type)) &&
                       (api  == "ALL" || apis.indexOf(api) >= 0));

      $tr.toggle(visible);

      $("#type-filter").text($("#type-selector option:selected").text());
      $("#api-filter").text($("#api-selector option:selected").text());
    });
  }

  $("#errorcode").change(function(e) {
    document.location = "/api/errors/" + $(this).val();
  });

  $('#api-selector, #type-selector').each(function() {
    var value = $(this).data('value') || 'ALL';

    $('option[value="'+value+'"]', this).attr('selected', 'selected');

    new FancySelect(this);
  });

  $("#api-selector, #type-selector").change(function() {
    $('#errorcode').val('');
    $(this).parents('form:first').submit();
  });

  filterErrors($("#api-selector").val(), $("#type-selector").val());
})(jQuery);
