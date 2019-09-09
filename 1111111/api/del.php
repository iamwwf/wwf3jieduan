DELETE FROM `user` WHERE uid = '2';
<?php 


    include 'conn.php';//引入外部文件到这来

    $uid = isset($_REQUEST['uid']) ? $_REQUEST['uid'] : '';

    //1.写查询语句
    $sql = 'DELETE FROM `user` WHERE  uid = '$uid';'

    //2.执行语句
    $res = $conn->query($sql);
    // 4.提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    // 5.将对象转成字符串，传给前端
    // echo json_encode($arr);
    // 6.防止乱码
    
    // 7.关闭连接，防止资源浪费
    $res->close();
    $conn->close();
?> 