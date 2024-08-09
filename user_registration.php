<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    // Insert user into database (this is just a placeholder, implement proper registration)
    // Example: $pdo->query("INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')");

    echo "Registration successful.";
}
