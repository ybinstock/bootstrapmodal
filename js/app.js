$(document).ready(function() {

  $("#ex1").slider();
  $("#ex1").on("slide", function(slideEvt) {
    $("#ex1SliderVal").text(slideEvt.value);
    $("#specify").attr('checked', true);
  });
  $("#ex2").slider();
  $("#ex2").on("slide", function(slideEvt) {
    $("#ex2SliderVal").text(slideEvt.value);
    $("#specify").attr('checked', true);
  });
  $("#ex3").slider();
  $("#ex3").on("slide", function(slideEvt) {
    $("#ex3SliderVal").text(slideEvt.value);
    $("#specify").attr('checked', true);
  });
  $("#ex4").slider();
  $("#ex4").on("slide", function(slideEvt) {
    $("#ex4SliderVal").text(slideEvt.value);
    $("#specify").attr('checked', true);
  });



  //validation form
  $('#genderForm').bootstrapValidator({
    excluded: [':disabled'],
    framework: 'bootstrap',
    icon: {
      valid: 'glyphicon glyphicon-ok',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      chooseGender: {
        // All the email address field have emailAddress class
        selector: '.gender',
        validators: {
          callback: {
            message: 'You must choose at least one person',
            callback: function(value, validator, $field) {
              var isEmpty = true,
                  // Get the list of fields
                  $fields = validator.getFieldElements('chooseGender');
              for (var i = 0; i < $fields.length; i++) {
                if ($fields.eq(i).val() !== '') {
                  isEmpty = false;
                  break;
                }
              }
              if (!isEmpty) {
                // Update the status of callback validator for all fields
                validator.updateStatus('chooseGender', validator.STATUS_VALID, 'callback');
                return true;
              }

              return false;
            }
          }

        }
      }
    }
  });

});