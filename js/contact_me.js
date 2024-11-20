
const apiURL = 'https://3d1su84o30.execute-api.us-east-2.amazonaws.com/v1/contact'
const dev_apiURL = 'https://xcjq92fu67.execute-api.us-east-2.amazonaws.com/v1/contact'
const grecaptchaSiteKey = '6LcO5FAiAAAAACC5DYTxi6AmLYQ7TFFKLW2tjOfI'
const dev_grecaptchaSiteKey = '6LfJAX4qAAAAAGPZ7D6DTh7u6zlXULTlP_8W5ubk'

function onloadCallback() {
    grecaptcha.render(document.getElementById("grecaptcha"), {'sitekey' : grecaptchaSiteKey, 'theme' : 'dark'});
};

$(function() {
    $("input,textarea").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            // prevent default submit behavior
            event.preventDefault(); 
            // disable button to prevent multiple submissions
            document.getElementById("submitBtn").disabled = true; 

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
            
            $(".loader").show();
            $.ajax({
                type: "POST",
                url : apiURL,
                dataType: "json",
                crossDomain: "true",
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(data),
                statusCode: {
                    200: function() {
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
                        
                    },
                    406: function() {
                        // Fail message
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-danger').append("<strong>Sorry " + name + ", it seems that there is an issue with your submission.");
                        $('#success > .alert-danger').append('</div>');
                    },
                    500: function() {
                        // Fail message
                        $('#success').html("<div class='alert alert-danger'>");
                        $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                            .append("</button>");
                        $('#success > .alert-danger').append("<strong>Sorry " + name + ", there is an issue with the server.");
                        $('#success > .alert-danger').append('</div>');
                    }
                },
                success: function() {
                    grecaptcha.reset();
                    $(".loader").hide();
                    document.getElementById("submitBtn").disabled = false;
                },
                error: function() {
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Sorry " + name + ", there is an issue with the server.");
                    $('#success > .alert-danger').append('</div>');
                    grecaptcha.reset();
                    $(".loader").hide();
                    document.getElementById("submitBtn").disabled = false;
                }
            })
            .always(function() {
                $(".loader").hide();
            });
        }
    });
});