(function($) {

  // TODO: The promo codes are currently hardcoded,
  // until we store these in a db or something.
  //
  // the format of each promo code is { code: value (in %) }.
  var PROMO_CODES = {
    "CITRUS10": 10,
    "CITRUS50": 50
  };

  $("#promo-code input").keyup(function() {
    var $this = $(this);
    var code  = $this.val();

    $("#promo-code-spinner").toggle(code.length > 0);

    if (PROMO_CODES.hasOwnProperty(code)) {
      $("#promo-code-spinner").hide();
      $this.parent().addClass("valid");

      var cost            = $("#cost").data('cost');
      var discount        = (PROMO_CODES[code]) / 100;
      var discountedValue = ((cost) * discount).toFixed(2);
      var totalValue      = ((cost) - discountedValue).toFixed(2);

      // Update the cost column in the plans table.
      $this.parent().find('.discounted').html("- $" + discountedValue);
      $this.closest('.purchase-details').find('#total').html("$" + totalValue);

      // Update the promo code message.
      $this.parent().find(".message span.discount").html(PROMO_CODES[code]);
      $this.parent().find("label").hide();
      $this.parent().find("input").hide();
    }
  });

  // Change promo code.
  $(".message a").click(function() {

    var $this = $(this);

    $this.closest('#promo-code').removeClass('valid');
    $this.parent().siblings().show();
    $("#promo-code-spinner").hide();
  });

  // Implement basic autocomplete functionality for organizations
  $('#organization').blur(function() {
    $('#suggested-organizations').hide();
  });
  $("#organization").keyup(function() {
    $('#suggested-organizations').show();
    $("#suggested-organizations li").hide();
    $("#suggested-organizations li[data-name^='" + $(this).val() + "']").show();
  });
  $("#suggested-organizations li").mousedown(function() {
    var $this = $(this);
    $("#organization").val($this.data("name"));
    $("#address1").val($this.data("address1"));
    $("#address2").val($this.data("address2"));
    $("#city").val($this.data("city"));
    $("#state").val($this.data("state")).change();
    $("#country").val($this.data("country")).change();
    $("#postal-code").val($this.data("postal-code"));
    $("#phone").val($this.data("phone"));
    $("#email").val($this.data("email"));
    $("#website").val($this.data("website"));
    $("#industry").val($this.data("industry")).change();
    $("#description").val($this.data("description"));
    $("#employees").val($this.data("employees")).change();
    $("#duns").val($this.data("duns"));
    $("#revenue").val($this.data("revenue")).change();
  });

  // DUNS number is required or not depending on the number of employees
  var employeesSelectNode = $('select#employees');
  var dunsNumberNode = $('input#duns');

  var checkEmployeesNumber = function() {
    var requiredIconNode = dunsNumberNode.prev('.form-icon:first');
    var value = employeesSelectNode.val();

    // FIXME: Perhaps we should have the numeric range stored on
    //        a data-attribute in the <option> in order to make this cleaner
    if ($.inArray(value, ['101 to 1,000', '1,001 or more']) >= 0) {
      requiredIconNode.addClass('required');
    } else {
      requiredIconNode.removeClass('required');
    }
  };

  employeesSelectNode.on('change', function() {
      checkEmployeesNumber();
  });
  checkEmployeesNumber();

}) (jQuery);
