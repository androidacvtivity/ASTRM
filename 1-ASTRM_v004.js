(function ($) {
    Drupal.behaviors.be1 = {
        attach: function (context, settings) {
            // Scrie doar numere
            jQuery("table").on(
                "keypress",
                "input.float, input.numeric",
                function (event) {
                    if (isNumberPressed(this, event) === false) {
                        event.preventDefault();
                    }
                }
            );
        },
    };


    webform.validators.gaz1 = function () {
        var values = Drupal.settings.mywebform.values;
        var errors = webform.errors;



        webform.validatorsStatus["gaz1"] = 1;
        validateWebform();
    };
})(jQuery);