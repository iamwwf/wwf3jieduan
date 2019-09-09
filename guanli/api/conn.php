<?php 
    // 设置参数
    $servername = 'localhost';
    $username = 'root';
    $password = '';
    $dbname = '1907';
    // 建立连接
    $conn = new mysqli($servername,$username,$password,$dbname);
    // 判断是否成功
    if($conn->connect_error){
        die("连接失败：" . $conn->connect_error);
    }else{
        //echo '连接成功';
    }
    $conn->set_charset('utf8');
?>