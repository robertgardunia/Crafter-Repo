(function($) {
  // NOTE: This file contains a DOM based shortcode/phone number save feature.
  // It is purely used for DEMO purpose, in real scenario, we should use a
  // backend for this work.

  var MEM_DB = window.MEM_DB = {};
  MEM_DB.shortcode = {
    "shortcodes": [{
      "id": 0,
      "type": "provided",
      "ratings": "zero_rated",
      "description": "Lorem ipsum dolor sit amet consecuter...",
      "mms_uri": "",
      "sms_uri": "SMS Online"
    }],
    // List all available short codes
    "list": function() {
      return this.shortcodes;
    },
    // create new short code
    "create": function(data) {
      var index = this.shortcodes.length;
      data["id"] = index;

      this.shortcodes.push(data);
      return data;
    },
    // save existing short code
    "save": function(data) {
      var index = data["id"];
      this.shortcodes[index] = data;

      return data;
    },
    // delete short code
    "delete": function(id) {
      delete this.shortcodes[id];
    }
  };
  MEM_DB.number = {
    "numbers": [{
      "id": 0,
      "description": "John's Number"
    }],
    "list": function() {
      return this.numbers;
    },
    "create": function(data) {
      var index = this.numbers.length;
      data["id"] = index;

      this.numbers.push(data);
      return data;
    },
    "save": function(data) {
      var index = data["id"];
      this.numbers[index] = data;

      return data;
    },
    "delete": function(id) {
      delete this.numbers[id];
    }
  }
}) (jQuery);
