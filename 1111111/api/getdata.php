<?php 
    include 'conn.php';//引入外部文件到这来

    //增删改查

    //1.写查询语句
    $sql = 'SELECT * FROM 1yaowang';

    //2.执行语句
    $res = $conn->query($sql);//结果集：包含很多信息，其中数据部分就是我想要的，要特意用方法才能提取出来

    //3.提取数据
    $data = $res->fetch_all(MYSQLI_ASSOC); //得到一个数组 [{},{},{}]

    // var_dump($data);
    $conn->set_charset('utf8');
    //4.把数组转成字符串，传给前端,一个接口文件只能有一个输出：echo '[{},{},{}]'
    echo json_encode($data,JSON_UNESCAPED_UNICODE);//把对象转成字符串 JSON_UNESCAPED_UNICODE防止转义
    /*
        乱码怎么解决：编码不统一就会乱码
            * 数据源：utf-8 外部导入的数据，确保是这个编码
            * 存储过程：连接、数据库、表里面设置编码
            * 使用过程：php、html
    */
    //防止乱码
 

    //关闭连接，防止资源浪费
    $res->close();
    $conn->close();
?> 