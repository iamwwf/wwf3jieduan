<?php 
    include 'conn.php';
    // 1.接收参数
    $text = $_GET['text'];
    // 2.查询语句
    $sql = "SELECT * FROM 1yaowang WHERE `name` LIKE '%$text%'";
    // 3.执行语句
    $res = $conn->query($sql);
    // 4.提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // 5.将对象转成字符串，传给前端
    echo json_encode($arr);
    // 6.防止乱码
    
    // 7.关闭连接，防止资源浪费
    $res->close();
    $conn->close();
?>