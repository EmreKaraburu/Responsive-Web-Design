<!DOCTYPE html>
<html>
<head>
    <title>Registration Form</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .form-group {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }
        label {
            width: 150px;
            margin-right: 10px;
        }
        input[type="text"], input[type="password"], input[type="email"], select, textarea {
            width: 250px;
            padding: 5px;
        }
        input[type="radio"], input[type="checkbox"] {
            margin-right: 5px;
        }
        textarea {
            height: 100px;
        }
        .submit-btn {
            margin-top: 15px;
            margin-left: 160px;
        }
    </style>
</head>
<body>
    <h1>Registration Form</h1>
    
    <form action="Activity6-preview.php" method="post">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">
        </div>
        
        <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username">
        </div>
        
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password">
        </div>
        
        <div class="form-group">
            <label for="address">Address:</label>
            <input type="text" id="address" name="address">
        </div>
        
        <div class="form-group">
            <label for="country">Country:</label>
            <select id="country" name="country">
                <option value="">Please select a country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
                <option value="France">France</option>
                <option value="Turkey">Turkey</option>
                <option value="Other">Other</option>
            </select>
        </div>
        
        <div class="form-group">
            <label for="zip">ZIP Code:</label>
            <input type="text" id="zip" name="zip">
        </div>
        
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email">
        </div>
        
        <div class="form-group">
            <label>Sex:</label>
            <input type="radio" id="male" name="sex" value="Male">
            <label for="male" style="width: auto;">Male</label>
            <input type="radio" id="female" name="sex" value="Female">
            <label for="female" style="width: auto;">Female</label>
        </div>
        
        <div class="form-group">
            <label>Language:</label>
            <input type="checkbox" id="english" name="language[]" value="English">
            <label for="english" style="width: auto;">English</label>
            <input type="checkbox" id="french" name="language[]" value="French">
            <label for="french" style="width: auto;">French</label>
            <input type="checkbox" id="german" name="language[]" value="German">
            <label for="german" style="width: auto;">German</label>
        </div>
        
        <div class="form-group">
            <label for="about">About:</label>
            <textarea id="about" name="about"></textarea>
        </div>
        
        <div class="submit-btn">
            <input type="submit" value="Submit">
        </div>
    </form>
</body>
</html>