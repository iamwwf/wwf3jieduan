// 封装一个随机颜色
function ranColor(type) {
    if (type == 16) {
        // 当传过来的参数是16；就生成一个16进制的随机颜色
        var str = '0123456789abcdef';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            var j = parseInt(Math.random() * (str.length));
            color += str[j];
        }
    }
    else if (type == 'rgb') {
        var r = parseInt(Math.random() * 256);
        var g = parseInt(Math.random() * 256);
        var b = parseInt(Math.random() * 256);
        var color = 'rgb(' + r + ',' + g + ',' + b + ')';
    }
    return color
}

// 封装一个随机验证码
function ranCod() {
    var html = '0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP';
    var res = '';
    for (var i = 0; i < 4; i++) {
        var j = parseInt(Math.random() * (html.length));
        res += html[j];
    }
    return res;
}

// 封装任意范围随机数
function ranNum(min, max) {
    if (min < max) {
        var res = parseInt(Math.random() * (max - min + 1)) + min;
    }
    else {
        var res = parseInt(Math.random() * (min - max + 1)) + max;
    }
    return res;
}

// 获取实参最大值并返回
function relnum() {
    var max = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
        if (max <= arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}
// 数组去重

function norepeat(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newarr.indexOf(arr[i]) == -1) {
            newarr.push(arr[i])
        }

    }

    return newarr;
}

// 冒泡排序
function bubblesort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


// 过滤敏感词 
function filterTex(str) {
    var sensitive = ['傻B', '蠢蛋', '妈蛋', 'bitch', 'fuck', '操', '小学生', '畜生'];
    for (var i = 0; i < sensitive.length; i++) {
        var reg = new RegExp(sensitive[i], 'gi');
        str = str.replace(reg, '***');
    }

    return str;
}

// 字符串转对象
function strToObj(str) {//name=laoxie&age=18&sex=male
    var obj = {};
    var arr = str.split('&');//["name=laoxie", "age=18", "sex=male"]
    arr.forEach(function (item) {
        var arr2 = item.split('=');
        obj[arr2[0]] = arr2[1];
    });
    return obj;
}

// 对象转字符串
function objToStr(obj) {
    var str = '';
    for (var key in obj) {
        str += key + '=' + obj[key] + '&';
    }
    str = str.slice(0, -1);
    return str;
}
//补零    
function tozero(n) {
    if (n < 10) {
        return '0' + n;
    }
    else {
        return '' + n;
    }
}

// 获取样式 和设置样式
function css() {
    if (arguments.length == 2) {
        //获取样式
        if (getComputedStyle(arguments[0], false)) {
            //高级浏览器
            return getComputedStyle(arguments[0], false)[arguments[1]];
            //getComputedStyle(h1, false)['top'];
        } else {
            //IE8-
            return arguments[0].currentStyle[arguments[1]];
        }
    } else if (arguments.length == 3) {
        //设置样式  ele.style.width = '200px'
        arguments[0].style[arguments[1]] = arguments[2];
    }
}

// 封装正则
var checkReg = {
    email: function (str) {
        var reg = /^[\w&%$#!\-]+@[\w&%$#!\-]+\.[a-zA-Z]+$/; //判断邮箱
        return reg.test(str);
    },
    tel: function (str) {
        var reg = /^1[3-9]\d{9}$/;  //判断电话号码
        return reg.test(str);
    },
    acountNum: function (str) {        //不能以特殊字符开头 的最多20位的账号
        var reg = /^[a-z][\w\-]\d{5,19}$/;
        return reg.test(str);
    },
    nickName: function (str) {
        var reg = /^[\u2E80-\u9FFF]+$/  //中文昵称
        return reg.test(str)
    },
    idCard: function (str) {
        var reg = /^(\d{17}|\d{14})[\dx]$/    //身份证必须是18位或15位以数字开头以数字结尾或x结尾
        return reg.test(str);
    },
    birthDay: function (str) {
        var reg = /^\d{4}([\/\-]?)\d{1,2}([\/\-]?)\d{1,2}$/;  //不严谨的生日
        return reg.test(str);
    },
    passWord: function (str) {
        var reg = /^\S{6,20}$/ //不能以空格开头的6-20位密码
        return reg.test(str);
    }
}

function checkInput(ele, reg, inf, meg) {
    /*
                参数一：ele 要正则验证的表单
                 参数二：reg 正则不同   要判断的正则的属性名
                参数三：inf 提示信息节点不同  
                参数四：meg 提示信息不同,对象
    */

    ele.onblur = function () {
        var val = ele.value.trim();
        var index = this.dataset.index;//用自定义属性的值作为开关对象的属性名
        //1.非空验证
        if (val) {
            //2.正则验证
            // var regEmail = /^[\w&%$#!\-]+@[\w&%$#!\-]+\.[a-zA-Z]+$/;
            // var res = regEmail.test(email);
            // eval():把字符串转成js
            // var str = `checkReg.${reg}(val)`;//方法一：借助一个方法eval()
            var res = checkReg[reg](val);//方法二：利用对象属性名可以接收变量的特性实现
            // console.log(eval(str), res);
            // var res = reg(val);//实参
            // console.log(res);
            // var res = checkReg.email(val);
            if (res) {
                //符合规则
                inf.innerHTML = meg.success;
                inf.style.color = '#58bc58';
                ele.istrue = true;
            } else {
                //不符合规则
                inf.innerHTML = meg.failure;
                inf.style.color = 'red';
                ele.istrue = false;
            }
        } else {
            inf.innerHTML = meg.null;
            inf.style.color = 'red';
            ele.istrue = false;
        }
    }
}

//排他
function delAll(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i].className = '';
    }
}

/*
	深度拷贝：deepClone() 很重要
	参数：对象（数组或json对象）
	返回值：新的对象（拷贝）
 */
function deepClone(obj) {
    var str = JSON.stringify(obj);//把对象转成字符串
    return JSON.parse(str);//把字符串转成对象
}


/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function () {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for (var key in json) { //key:键名   json[key] :键值
            //			console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if (key == 'opacity') { //初始值
                cur = css(obj, key) * 100; //透明度
            } else {
                cur = parseInt(css(obj, key)); // 300px  300  width heigth borderwidth px为单位的

            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6; //出现小数
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            //保证上一个属性全部都达到目标值了
            if (cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if (key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100; //0-1
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if (istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if (fnend) { //可选参数的由来
                fnend();
            }
        }

    }, 30); //obj.timer 每个对象都有自己定时器

}

// 封装ajax方法
function ajax(opt) {
    //默认参数
    let defaultData = {
        data: '',
        asyn: true,
        failure: null
    }

    Object.assign(defaultData, opt);//用默认参数

    let xhr = new XMLHttpRequest();
    if (defaultData.type.toLowerCase() == 'get') {
        //get方式
        if (defaultData.data) {
            defaultData.data = objToStr(defaultData.data);
            defaultData.url += '?' + defaultData.data;
        }
        xhr.open('get', defaultData.url, defaultData.asyn);
        xhr.send(null);
    } else if (defaultData.type.toLowerCase() == 'post') {
        //post方式
        xhr.open('post', defaultData.url, defaultData.asyn);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        defaultData.data = objToStr(defaultData.data);
        xhr.send(defaultData.data);
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                //成功了
                let data = xhr.responseText;
                defaultData.success(data);//实参
            } else {
                //失败
                if (defaultData.failure) {
                    //写了这个回调
                    defaultData.failure(xhr.status);
                }
            }
        }
    }
}

//传秒数转成 年月日时分秒
function getTime(sec) {
    //传秒数，转成：2019-06-25 14:00:00
    var date = new Date(sec * 1000);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var mins = date.getMinutes();
    var secs = date.getSeconds();
    return {
        year,
        month,
        day,
        hours,
        mins,
        secs
    }
}

//封装cookie
function setCookie(key, val, iDay) {
    //key：键名；val：键值；iDay：失效时间
    var now = new Date();
    now.setDate(now.getDate() + iDay);
    document.cookie = key + '=' + val + ';expires=' + now.toUTCString() + ';path=/';//设置一个站点内的文件可以共享此cookie
}

function getCookie(key) {//获取cookie值
    var cookies = document.cookie;//name=malin; pwd=123456
    var arr = cookies.split('; ');//['name=malin','pwd=123456']
    for (var i = 0; i < arr.length; i++) {
        var arr2 = arr[i].split('=');//['name','malin'
        if (key == arr2[0]) {
            return arr2[1];
        }
    };
}

function removeCookie(key) {//删除：设置失效时间为过去的时间，立即失效
    setCookie(key, '', -1);
}

function ranCod() {
    var html = '0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP';
    var res = '';
    for (var i = 0; i < 4; i++) {
        var j = parseInt(Math.random() * (html.length));
        res += html[j];
    }
    return res;
}