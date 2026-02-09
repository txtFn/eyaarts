<?php

include 'connect.php';

if(isset($_POST['signIn'])){
    $username=$_POST['username'];
    $password=$_POST['password'];
    $password=md5($password);

    $sql = "SELECT * FROM user WHERE 1"
    $result = $conn->query($sql);
    if($result->num_rows>0){
        session_start();
        $row=$result->fetch_assoc();
        $_SESSION['username']=$row['username'];
        header("Location: upload.php")
        exit();
    }
    else{
        echo "Not found, incorrect username or password";
    }
}
?>
