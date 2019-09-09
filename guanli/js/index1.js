(function () {
    let usenames = getCookie('usenames');
    $('#admin').html(usenames);

    let isok = true;
    $('.list').on('click', 'li', function () {
        $(this).children('a').addClass('active');
        $(this).siblings().children('a').removeClass('active');


        if (isok) {
            $(this).children().eq(1).height('126');
            $(this).siblings().children("#ulist").height('0');
            isok = false;
        }
        else {
            $(this).children().eq(1).height('0');
            isok = true;
        }
        // isok = !isok;
    });

    // $('.list').on('click','li',function(){
    //     $(this).children().eq(1).height('126');
    //      $(this).siblings().children("#ulist").height('0');
    // });
    $('#ulist').on('click', 'li', function () {

        $(this).addClass('move').siblings().removeClass('move');
        if ($(this).index() == 0) {
            $('#ifr').attr('src', 'manage.html');
        }
    });

    
    $('#quit').click(function () {
        location.href = 'login2.html';
        rCookie('usenames');
    })
})()