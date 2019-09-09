<?php
    include 'conn.php';
    $order= $_REQUEST['order'];
    $sql ="DELETE FROM sp WHERE spid= $order";
    $res = $conn->query($sql);
    if($res){
     echo 'yes';
        }else{
            echo 'no';
        }

?>