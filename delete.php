<?php
if (!isset($_GET['id'])) {
    http_response_code(400);
    echo "No artwork ID provided.";
    exit;
}

$idToDelete = $_GET['id'];
$file = 'artworks.json';
$data = json_decode(file_get_contents($file), true);

$newData = array_filter($data, function($item) use ($idToDelete) {
    return $item['id'] != $idToDelete;
});

$newData = array_values($newData);

file_put_contents($file, json_encode($newData, JSON_PRETTY_PRINT));

echo "success";
?>