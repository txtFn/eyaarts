<?php
if ($_POST['username'] === 'admin' && $_POST['password'] === 'password123') {
    header("Location: upload.html");
    exit;
}

header("Location: admin.html?error=1");
exit;
