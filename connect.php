<?php
  $fullname = $_POST['fullname'];
  $email = $_POST['email'];
  $file = $_POST['file'];


  //Database Connection
  $conn = new mysqli('loaclhost','root','test');
  if($conn->connect_error){
    die('Connection Failed  : ' .$conn->connect_error);
  }else{
    $stmt = $conn->prepare("insert into registration(fullname , email , file")
    values(?, ?, ?)");
    $stmt->bind_param("ssb",$fullname,$email,$file);
    $stmt->execute();
    echo "registration Successfully...";
    $stmt->close();
    $conn->close();
  }

  

  
  

?>