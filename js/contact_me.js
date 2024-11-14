$(function() {

    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            const apiURL = 'https://xcjq92fu67.execute-api.us-east-2.amazonaws.com/v1/contact'
            event.preventDefault(); // prevent default submit behaviour
            // get values from FORM
            var name = $("input#name").val();
            var email = $("input#email").val();
            var phone = $("input#phone").val();
            var message = $("textarea#message").val();

            // Verify reCaptcha
            var recaptcha = grecaptcha.getResponse()
            if (recaptcha.length == 0) {
                $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                $('#success > .alert-danger')
                        .append("<strong>Please verify you are human!</strong>");
                $('#success > .alert-danger').append('</div>');
                return;
            }

            // Create data object
            var data = {
                name : name,
                phone : phone,
                email : email,
                message : message,
                recaptcha : recaptcha
                };

            $.ajax({
                type: "POST",
                url : apiURL,
                dataType: "json",
                crossDomain: "true",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data),
                success: function(response) {
                    if (response.statusCode == 200) {
                        // Success message
                        $('#success').html("<div class='alert alert-success'>");
                        $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-success')
                            .append("<strong>Thanks for contacting us "+name+", your message has been sent. </strong>");
                        $('#success > .alert-success')
                            .append('</div>');
    
                        //clear all fields
                        $('#contactForm').trigger("reset");
                        grecaptcha.reset();
                    } else if (response.statusCode == 406) {
                        // Fail message
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-danger').append("<strong>Sorry " + name + ", it seems that there is an issue with your submission.");
                        $('#success > .alert-danger').append('</div>');
                        grecaptcha.reset();
                    } else if (response.statusCode == 500) {
                        // Fail message
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-danger').append("<strong>Sorry " + name + ", there is an issue with the server.");
                        $('#success > .alert-danger').append('</div>');
                        grecaptcha.reset();
                    }
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + name + ", there is an issue with the server.");
                    $('#success > .alert-danger').append('</div>');
                    grecaptcha.reset();
                }
            });
        }
    });
});