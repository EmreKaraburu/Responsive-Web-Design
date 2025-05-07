$(document).ready(function() {
    // We initialized the jQuery UI Datepicker
    $("#datepicker").datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true,
        minDate: 0 // We set the minimum date to today
    });

    // We added image preview functionality
    $("#image").change(function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            // We show the selected image preview
            $("#image-preview").attr("src", reader.result).show();
        };
        if (event.target.files.length > 0) {
            // We read the selected image file
            reader.readAsDataURL(event.target.files[0]);
        }
    });

    // We added a submit handler for the new post form
    $("#new-post-form").submit(function(event) {
        event.preventDefault(); // We prevent the default form submission

        // We get the values from the form fields
        const title = $("#title").val().trim();
        const content = $("#content").val().trim();
        const date = $("#datepicker").val().trim();
        const image = $("#image-preview").attr("src") || ""; // We get the image source or an empty string

        // We added basic validation
        if (title === "" || content === "" || date === "") {
            alert("Please fill in all fields (Title, Content, Date).");
            return; // We stop the submission if validation fails
        }

        // We load existing posts from local storage
        let posts = JSON.parse(localStorage.getItem("posts")) || [];

        // We create a new post object
        const newPost = {
            title: title,
            content: content,
            date: date,
            image: image
        };

        // We add the new post to the array
        posts.push(newPost);

        // We save the updated posts array back to local storage
        localStorage.setItem("posts", JSON.stringify(posts));

        // We show a success message
        alert("Post created successfully!");

        // We redirect the user to the homepage
        window.location.href = "index.html";
    });
});

