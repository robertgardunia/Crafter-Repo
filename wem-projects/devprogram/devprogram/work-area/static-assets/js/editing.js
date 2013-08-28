(function($) {
  // This file contains the client-side part of shortcode/phone number
  // editing feature. Should be preserved once the backend is implemented.
  $(document).ready(function() {
    // shortcode editing part
    (function() {
      function json_to_shortcode_view(data) {
        var template = $('#shortcodes .row-view-template').clone();
        template.removeClass('row-view-template');
        template.show();

        template.data(data);
        template.find('.type-field').text(data.type);
        template.find('.ratings-field').text(data.ratings);
        template.find('.description-field').text(data.description);
        template.find('.sms-field').text(data.sms_uri);

        template.find('.remove').click(function() {
          MEM_DB.shortcode.delete(data.id);
          template.remove();
        })
        template.find('.edit').click(function() {
          var edit_template = json_to_shortcode_edit(data);
          template.replaceWith(edit_template);
        })

        return template;
      }

      function json_to_shortcode_edit(data) {
        // in case of adding a new shortcode, data can be null
        data = data || {};

        var template = $('#shortcodes .row-edit-template').clone();
        template.removeClass('row-edit-template');
        template.show();

        // create unique name for different radio group names
        var nameIndex = new Date().getTime();
        var typeName = "type-" + nameIndex;
        var ratingsName = "ratings-" + nameIndex;
        template.find('input[value="provided"]').attr('name', typeName);
        template.find('input[value="custom"]').attr('name', typeName);
        template.find('input[value="standard"]').attr('name', ratingsName);
        template.find('input[value="zero_rated"]').attr('name', ratingsName);

        template.data(data);
        template.find('input[value="' + (data.type || "provided") + '"]')
          .prop('checked', true);
        template.find('input[value="' + (data.ratings || "standard") + '"]')
          .prop('checked', true);
        template.find('input[name="description"]').val(data.description);
        template.find('input[name="mms-uri"]').val(data.mms_uri);
        template.find('input[name="sms-uri"]').val(data.sms_uri);

        template.find('.save').click(function() {
          var data = shortcode_edit_to_json(template);
          if (data.id !== undefined) {
            data = MEM_DB.shortcode.save(data);
          } else {
            data = MEM_DB.shortcode.create(data)
          }
          var view_template = json_to_shortcode_view(data);

          template.replaceWith(view_template);
        });
        template.find('.cancel').click(function() {
          if (data.id !== undefined) {
            template.replaceWith(json_to_shortcode_view(data));
          } else {
            template.remove();
          }
        });

        return template;
      }

      function shortcode_edit_to_json(template) {
        var data = template.data();

        data.type = template.find('.type-field input:checked').val();
        data.ratings = template.find('.ratings-field input:checked').val();
        data.description = template.find('input[name="description"]').val();
        data.mms_uri = template.find('input[name="mms-uri"]').val();
        data.sms_uri = template.find('input[name="sms-uri"]').val();

        return data;
      }

      var tbody = $('#shortcodes tbody');
      var shortcodes = MEM_DB.shortcode.list(), i, $this = $(this);
      for (i = 0; i < shortcodes.length; i++) {
        var t = json_to_shortcode_view(shortcodes[i]);
        tbody.append(t);
      }
      $('#shortcodes .add-new-row').click(function() {
        tbody.append(json_to_shortcode_edit());
      });
    } ());

    // number editing part
    (function() {
      function json_to_number_view(data) {
        var template = $('#phone-numbers .row-view-template').clone();
        template.removeClass('row-view-template');
        template.show();

        template.data(data);
        template.find('.description-field').text(data.description);

        template.find('.remove').click(function() {
          MEM_DB.number.delete(data.id);
          template.remove();
        })
        template.find('.edit').click(function() {
          var edit_template = json_to_number_edit(data);
          template.replaceWith(edit_template);
        })

        return template;
      }

      function json_to_number_edit(data) {
        data = data || {};

        var template = $('#phone-numbers .row-edit-template').clone();
        template.removeClass('row-edit-template');
        template.show();

        template.data(data);
        template.find('input[type="text"]').val(data.description);

        template.find('.save').click(function() {
          var data = number_edit_to_json(template);
          if (data.id !== undefined) {
            data = MEM_DB.number.save(data);
          } else {
            data = MEM_DB.number.create(data)
          }
          var view_template = json_to_number_view(data);

          template.replaceWith(view_template);
        });
        template.find('.cancel').click(function() {
          if (data.id !== undefined) {
            template.replaceWith(json_to_number_view(data));
          } else {
            template.remove();
          }
        });

        return template;
      }

      function number_edit_to_json(template) {
        var data = template.data();

        data.description = template.find('input[type="text"]').val();
        return data;
      }

      var tbody = $('#phone-numbers tbody');
      var numbers = MEM_DB.number.list(), i, $this = $(this);
      for (i = 0; i < numbers.length; i++) {
        var t = json_to_number_view(numbers[i]);
        tbody.append(t);
      }
      $('#phone-numbers .add-new-row').click(function() {
        tbody.append(json_to_number_edit());
      });
    } ());
  });
}) (jQuery);
