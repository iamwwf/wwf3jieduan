<?php
    include 'conn.php';
    $spid = isset($_REQUEST['spid']) ? $_REQUEST['spid'] : '';
    $name = isset($_REQUEST['username']) ? $_REQUEST['username'] : '';
    $sql = "INSERT INTO `sp`(NAME,spid) VALUES('$name','$spid')";
    $res = $conn->query($sql);
    if($res){
        echo 'yes';
    }else{
        echo 'no';
    }

?>