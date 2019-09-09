$(function () {
    $.ajax({
        type: 'get',
        url: 'api/userinf.php',
        // contenteditable="true"
        success: str => {
            console.log(1);
            console.log(str)
            let arr = JSON.parse(str);
            let html = arr.map(item => {
                return `      <tr>
                <td><input type="checkbox" class="check"></td>
                <td>${item.name}</td>
                <td>${item.spid}</td>
                <td>
                    <a href="###" class='a1'>修改并保存</a>
                    <a href="###" class="a2">删除</a>
                    <a href="###" class="a3">edit</a>
                </td>
            </tr>`
            }).join('');
            $('#tbd').html(html)
        }
    });

    //编辑工能
    $('#tbd').on('click', '.a3', function () {

        $('#tbd').find('td').prop('contenteditable', false)
        $(this).parent().prev().prev().prop('contenteditable', true)
        $(this).parent().prev().prop('contenteditable', true)
    });
    //修改并保存
    $('#tbd').on('click', '.a1', function () {
        let names = $(this).parent().prev().prev().html();
        let ids = $(this).parent().prev().html();
        let names1 = $(this).parent().prev().prev().prev().html();
        $.ajax({
            type: 'get',
            url: 'api/updata.php',
            data: {
                order: names,
                order1: ids,
                order2: names1
            },
            success: str => {
                alert('修改成功')
            }
        })
    });

    $('#qx').click(function () {
        if ($('#qx').prop('checked') == true) {
            $('#tbd input').prop('checked', true);
        }
        else if ($('#qx').prop('checked') == false) {
            $('#tbd input').prop('checked', false);
        }
    });
    $('#tbd').on('click', 'input', function () {
        let num = $('#tbd input:checked').length;
        let num1 = $('#tbd input').length;
        if (num == num1) {
            $('#qx').prop('checked', true)
        } else {
            $('#qx').prop('checked', false)
        }
    });

    //删除单行
    $('#tbd').on('click', '.a2', function () {
        let names1 = $(this).parent().prev().prev().prev().html();
        console.log(names1)
        let chs = $(this).parent().prev().prev().prev().prev().children();
        if (chs.prop('checked') == true) {
            $.ajax({
                type: 'get',
                url: 'api/del.php',
                data: {
                    order: names1
                },
                success: str => {
                    console.log(str)
                }
            })
            $(chs).parent().parent().remove();
        }
    });

    //删除全部
    $('.alldel').click(function () {
        $('#tbd .check').each(function (index, item) {
            if ($(item).prop('checked')) {
                let num = $(item).parent().next().html()
                $(item).parent().parent().remove()
                $.ajax({
                    type: 'get',
                    url: 'api/del.php',
                    data: {
                        order: num
                    },
                    success: str => {
                        console.log(str)
                    }
                })
            }
        })

    })
})