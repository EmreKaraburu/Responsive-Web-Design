<!DOCTYPE html>
<html>
<head>
    <title>Preview</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
    <h1>Preview</h1>
    
    <?php

    echo isset($_POST['name']) && !empty($_POST['name']) ? $_POST['name'] : "Name: Not provided";
    echo "<br>";
    
    
    echo isset($_POST['username']) && !empty($_POST['username']) ? $_POST['username'] : "Username: Not provided";
    echo "<br>";
    
    
    echo isset($_POST['password']) && !empty($_POST['password']) ? $_POST['password'] : "Password: Not provided";
    echo "<br>";
    
    
    echo isset($_POST['address']) && !empty($_POST['address']) ? "Address: " . $_POST['address'] : "Address: Not provided";
    echo "<br>";
    
    
    echo isset($_POST['country']) && !empty($_POST['country']) ? $_POST['country'] : "Country: Not provided";
    echo "<br>";
    
   
    echo isset($_POST['zip']) && !empty($_POST['zip']) ? "Zip: " . $_POST['zip'] : "Zip: Not provided";
    echo "<br>";
    
    
    echo isset($_POST['email']) && !empty($_POST['email']) ? $_POST['email'] : "Email: Not provided";
    echo "<br>";
    
    
    echo isset($_POST['sex']) ? $_POST['sex'] : "Sex: Not provided";
    echo "<br>";
    
    
    if(isset($_POST['language']) && is_array($_POST['language']) && !empty($_POST['language'])) {
        echo implode(", ", $_POST['language']);
    } else {
        echo "Language: Not provided";
    }
    echo "<br>";
    
    
    echo isset($_POST['about']) && !empty($_POST['about']) ? "About: " . $_POST['about'] : "About: Not provided";
    ?>

</body>
</html>