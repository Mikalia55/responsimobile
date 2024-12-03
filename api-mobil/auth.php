<?php
require_once 'config.php';

// Registrasi user
function register($data) {
    global $conn;
    $username = $data['username'];
    $password = password_hash($data['password'], PASSWORD_BCRYPT);

    $stmt = $conn->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
    $stmt->execute(['username' => $username, 'password' => $password]);
    return ['message' => 'Registration successful'];
}

// Login user
function login($data) {
    global $conn;
    $username = $data['username'];
    $password = $data['password'];

    $stmt = $conn->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->execute(['username' => $username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        return ['message' => 'Login successful'];
    } else {
        return ['message' => 'Invalid credentials'];
    }
}
?>
