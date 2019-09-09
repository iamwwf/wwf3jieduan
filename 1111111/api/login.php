<?php
    include 'conn.php';
    $name = isset($_REQUEST['name']) ? $_REQUEST['name'] : '';
    $psw = isset($_REQUEST['psw']) ? $_REQUEST['psw'] : '';
    $sql = "SELECT * FROM user WHERE name='$name' AND psw='$psw'";
    $res = $conn->query($sql);
    if($res->num_rows){
        echo 'yes';
    }else{
        echo 'no';
    }
?>