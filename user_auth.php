<?php
session_start();

// Example of simple user authentication
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    // Check credentials (this is just a placeholder, implement proper authentication)
    if ($username == 'user' && $password == 'password') {
        $_SESSION['loggedin'] = true;
        header('Location: user.html');
    } else {
        echo "Invalid username or password.";
    }
}

