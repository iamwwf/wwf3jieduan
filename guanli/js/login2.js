(function () {
    $('.a2').click(function () {
        if ($('#usm').val() && $('#psw').val()) {
            $.ajax({
                type: 'get',
                url: 'api/login.php',
                data: {
                    name: $('#usm').val(),
                    psw: $('#psw').val()
                },
                success: str => {
                    if (str == 'yes') {
                        sCookie('usenames',$('#usm').val())
                        location.href = ('index1.html');
                    }
                    else {
                        alert('用户名或密码输入错误');
                    }
                }
            })
        }
    })
})();