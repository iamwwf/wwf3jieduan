<?php
    include 'conn.php';
    $uid = isset($_REQUEST['uid']) ? $_REQUEST['uid'] : '';
    $sql = "SELECT * FROM `1yaowang` WHERE `uid`='$uid'";
    $res = $conn->query($sql);
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($arr);
?>