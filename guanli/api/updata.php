<?php
    include 'conn.php';
    $order = $_REQUEST['order'];
    $order1 = $_REQUEST['order1'];
    $order2 = $_REQUEST['order2'];
    $sql = "UPDATE sp SET usename = '$order',spid = '$order1' Where cid = $order2";
    $res = $conn->query($sql);
        if($res){
            echo 'yes';
        }else{
            echo 'no';
        }

?>