<?php 
    include 'conn.php';
    
    // 1.接收参数
    $page = isset($_GET['page']) ? $_GET['page'] : '1';
    $num = isset($_GET['num']) ? $_GET['num'] : '5';
    // 2.查询语句
    $index = ($page - 1) * $num;
   
    $sql = "SELECT * FROM 1yaowang LIMIT $index,$num"; 
    $sql2 = 'SELECT * FROM 1yaowang';
    // 3.执行语句
    $res = $conn->query($sql);
    $res2 = $conn->query($sql2);
    // 4.提取数据
    $arr = $res->fetch_all(MYSQLI_ASSOC);
    $data = array(
        'total' => $res2->num_rows,
        'data' => $arr,
        'page' => $page,
        'num' => $num
    );
    // 5.将对象转成字符串，传给前端
    echo json_encode($data);
    // 6.防止乱码
    
    // 7.关闭连接，防止资源浪费
    $res->close();
    $conn->close();
?>