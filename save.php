<?php
$file = 'artworks.json';
$data = json_decode(file_get_contents($file), true);

$title = $_POST['title'];
$details = $_POST['details'];
$image = $_POST['image'];

// Add unique ID for deletion
$id = time();

$data[] = [
    "id" => $id,
    "title" => $title,
    "details" => $details,
    "image" => $image
];

file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT));

echo "success";
?>