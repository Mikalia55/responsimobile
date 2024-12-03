<?php
require_once 'auth.php';
require_once 'races.php';

header('Content-Type: application/json');
$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

$data = json_decode(file_get_contents('php://input'), true);

if ($method === 'POST' && $action === 'register') {
    echo json_encode(register($data));
} elseif ($method === 'POST' && $action === 'login') {
    echo json_encode(login($data));
} elseif ($method === 'POST' && $action === 'create_race') {
    echo json_encode(createRace($data));
} elseif ($method === 'GET' && $action === 'get_races') {
    echo json_encode(getRaces());
} elseif ($method === 'PUT' && $action === 'update_race') {
    echo json_encode(updateRace($data));
} elseif ($method === 'DELETE' && $action === 'delete_race') {
    $id = $_GET['id'];
    echo json_encode(deleteRace($id));
} else {
    http_response_code(404);
    echo json_encode(['message' => 'Endpoint not found']);
}
?>
