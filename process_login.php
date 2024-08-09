<?php
// Process login form submissions
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    include 'db_connect.php';

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username AND password = :password");
    $stmt->execute(['username' => $username, 'password' => $password]);

    if ($stmt->rowCount() > 0) {
        session_start();
        $_SESSION['username'] = $username;
        header('Location: user.html');
    } else {
        echo "Invalid login credentials.";
    }
}
