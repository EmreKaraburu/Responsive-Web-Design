$(document).ready(function() {
    // We added jQuery Validation for the contact form
    $("#contact-form").validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            },
            phone: {
                // We made the phone field optional
            }
        },
        messages: {
            name: "Please enter your name.",
            email: {
                required: "Please enter your e-mail address.",
                email: "Please enter a valid email address."
            },
            message: "Please enter your message."
        },
        // We added a custom submit handler
        submitHandler: function(form) {
            // We hide the form and show a thank you message on successful submission
            $(form).hide();
            $("#thank-you-message").show();
            console.log("The form was successfully validated and submitted (simulated).");
            return false; // Prevent actual form submission for this example
        }
    });
});