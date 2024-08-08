<?php
// Database configuration
$servername = 'localhost'; // Database host
$dbname = 'my_website'; // Database name
$username = 'root'; // MySQL username
$password = ''; // MySQL password

try {
    // Create a new PDO instance for connection
    $pdo = new PDO("mysql:host=$host;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Create database if it doesn't exist
    $pdo->exec("CREATE DATABASE IF NOT EXISTS $dbname");
    $pdo->exec("USE $dbname");

    // Create table if it doesn't exist
    $tableQuery = "
        CREATE TABLE IF NOT EXISTS contact_form (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ";
    $pdo->exec($tableQuery);

    // Check if form is submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Retrieve form data
        $name = htmlspecialchars(trim($_POST['name']));
        $email = htmlspecialchars(trim($_POST['email']));
        $message = htmlspecialchars(trim($_POST['message']));

        // Validate input
        if (empty($name) || empty($email) || empty($message)) {
            echo "All fields are required.";
            exit;
        }

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "Invalid email format.";
            exit;
        }

        // Prepare SQL statement
        $stmt = $pdo->prepare("INSERT INTO contact_form (name, email, message) VALUES (:name, :email, :message)");
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':message', $message);

        // Execute statement
        if ($stmt->execute()) {
            echo "Thank you for your message!";
        } else {
            echo "Error saving message. Please try again.";
        }
    } else {
        echo "Invalid request method.";
    }
} catch (PDOException $e) {
    // Handle connection errors
    echo "Database error: " . $e->getMessage();
}
