<?php
// Database configuration
$servername = 'localhost'; // Database host
$username = 'root'; // MySQL username
$password = ''; // MySQL password

try {
    // Create a new PDO instance
    $pdo = new PDO("mysql:host=$host;$username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

   $dbname = "CREATE DATABASE my_weebsite"
   $conn->query($dbname)
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
?>
