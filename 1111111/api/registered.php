<?php
include 'conn.php';

$name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
$psw = isset($_REQUEST['psw']) ? $_REQUEST['psw'] : '';
$sql = "INSERT INTO `user`(NAME,psw) VALUES('$name','$psw')";
$res = $conn->query($sql);
if($res){
    echo 'yes';
}else{
    echo 'no';
}

?>
