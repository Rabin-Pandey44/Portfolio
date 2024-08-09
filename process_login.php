<?php
include 'user_auth.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars(trim($_POST['email']));
    $password = htmlspecialchars(trim($_POST['password']));

    if (login($email, $password)) {
        header("Location: user.html");
    } else {
        echo "Login failed. Please check your email and password.";
    }
}
