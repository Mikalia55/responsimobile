<?php
require_once 'config.php';

// Tambah data balapan
function createRace($data) {
    global $conn;
    $stmt = $conn->prepare("INSERT INTO races (name, description, schedule, track_details) VALUES (:name, :description, :schedule, :track_details)");
    $stmt->execute($data);
    return ['message' => 'Race created successfully'];
}

// Ambil semua data balapan
function getRaces() {
    global $conn;
    $stmt = $conn->query("SELECT * FROM races");
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}

// Update data balapan
function updateRace($data) {
    global $conn;
    $stmt = $conn->prepare("UPDATE races SET name = :name, description = :description, schedule = :schedule, track_details = :track_details WHERE id = :id");
    $stmt->execute($data);
    return ['message' => 'Race updated successfully'];
}

// Hapus data balapan
function deleteRace($id) {
    global $conn;
    $stmt = $conn->prepare("DELETE FROM races WHERE id = :id");
    $stmt->execute(['id' => $id]);
    return ['message' => 'Race deleted successfully'];
}
?>
