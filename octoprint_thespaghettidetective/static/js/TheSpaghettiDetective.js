/*
 * View model for TheSpaghettiDetective
 *
 * Author: The Spaghetti Detective
 * License: AGPLv3
 */
$(function() {
    function ThespaghettidetectiveViewModel(parameters) {
        var self = this;
        $('#custom-server').change( function(e) {
            if($(this).is(':checked')) {
                $('input#endpoint-prefix').prop('disabled', false);
            } else {
                $('input#endpoint-prefix').prop('disabled', true);
            }
        });

        $('#test-auth-token').click( function(event) {
            var token = $('#auth-token-input').val();
            $.ajax('/api/plugin/thespaghettidetective', {
               method: "POST",
               contentType: 'application/json',
               data: JSON.stringify({'command': 'test_auth_token', 'auth_token': token}),
               success: function(apiStatus) {
                   $("#std-api-status").text(apiStatus.text);
                   $("#std-api-status").removeClass('text-success').removeClass('text-error');
                   $("#std-api-status").addClass( apiStatus.succeeded ? 'text-success' : 'text-error' );
               }
           });
        });

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    /* view model class, parameters for constructor, container to bind to
     * Please see http://docs.octoprint.org/en/master/plugins/viewmodels.html#registering-custom-viewmodels for more details
     * and a full list of the available options.
     */
    OCTOPRINT_VIEWMODELS.push({
        construct: ThespaghettidetectiveViewModel,
        // ViewModels your plugin depends on, e.g. loginStateViewModel, settingsViewModel, ...
        dependencies: [ /* "loginStateViewModel", "settingsViewModel" */ ],
        // Elements to bind to, e.g. #settings_plugin_thespaghettidetective, #tab_plugin_thespaghettidetective, ...
        elements: [ /* ... */ ]
    });
});
