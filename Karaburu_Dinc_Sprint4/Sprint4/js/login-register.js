$(document).ready(function() {
    // We added validation for the login form
    $("#login-form").validate({
        rules: {
            "login-email": {
                required: true,
                email: true
            },
            "login-password": {
                required: true
            }
        },
        messages: {
            "login-email": {
                required: "Please enter your email address.",
                email: "Please enter a valid email address."
            },
            "login-password": {
                required: "Please enter your password."
            }
        },
        submitHandler: function(form) {
            // We added a submit handler for login
            console.log("The entry form has been validated.");
            alert("Login successful (simulated)!");
            return false; // We prevent actual form submission
        }
    });

    // We added validation for the register form
    $("#register-form").validate({
        rules: {
            "register-name": {
                required: true
            },
            "register-email": {
                required: true,
                email: true
            },
            "register-password": {
                required: true,
                minlength: 6
            }
        },
        messages: {
            "register-name": "Please enter your name.",
            "register-email": {
                required: "Please enter your e-mail address.",
                email: "Please enter a valid email address."
            },
            "register-password": {
                required: "Please choose a password.",
                minlength: "Your password must be at least 6 characters."
            }
        },
        submitHandler: function(form) {
            // We added a submit handler for registration
            console.log("Registration form has been verified.");
            alert("Registration successful (simulated)!");
            return false; // We prevent actual form submission
        }
    });

    // We added an important note about the 'name' attribute for validation
    // Important Note: The jQuery Validate plugin works based on the 'name' attribute of input elements.
    // If your inputs do not have a 'name' attribute in HTML, you can define rules using the IDs in quotes as above,
    // but adding the 'name' attribute is a more standard approach.
    // For example: <input type="email" id="login-email" name="login-email" required>
});