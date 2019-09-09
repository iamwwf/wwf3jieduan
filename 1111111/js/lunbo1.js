function rotationchart(opt){
    /*
         需求：
            * 自动轮播：开启定时器切换图片
            * 点击左右按钮可以切换图片
            * 点击焦点可以切换对应图片
    */
   let defaultobj = {
       iw:500,
       ih:300,
       time:2,
       imgurl:''
   }
   Object.assign(defaultobj,opt);//用的话用defaultobj（默认参数）
   let box = document.getElementById(defaultobj.ele);
   let imgl = box.getElementsByClassName('imglist')[0];
   let light = box.getElementsByClassName('light')[0];
   let prevb = box.getElementsByClassName('prev')[0];
   let nextb = box.getElementsByClassName('next')[0];
   let data = defaultobj.imgurl;
   let time = defaultobj.time * 1000;


    //改变图片的大小
    // box.style.width = defaultobj.iw + 'px';
    box.style = `width:${defaultobj.iw}px;height:${defaultobj.ih}px;`

   
    //渲染轮播图先
    let html = data.map(item => {
        return `<li><img src="${item}" alt=""></li>`;
    }).join('');
    imgl.children[0].innerHTML = html;

      //渲染完了再找节点
      let imglist = imgl.getElementsByTagName('li');
      let iw = imglist[0].offsetWidth;//每次切换要移动的距离
    
      //准备工作，先将所有的图片放在右边待机，把第一张放在可视区
    for (let i = 0; i < imglist.length; i++) {
        imglist[i].style.left = iw + 'px';
    }
    imglist[0].style.left = 0;

    //开一个定时器（轮播）
    let timer = setInterval(next, time);

    //下一张的函数
    let num = 0;
    function next() {
        //旧图移走
        startMove(imglist[num], { 'left': -iw });
        //新图移入
        num = ++num > imglist.length - 1 ? 0 : num;
        imglist[num].style.left = iw + 'px';//在右边候场
        startMove(imglist[num], { 'left': 0 });
        beAct();
    }

    function prev() {
        //旧图移走
        startMove(imglist[num], { 'left': iw });
        //新图移入
        num = --num < 0 ? imglist.length - 1 : num;
        imglist[num].style.left = -iw + 'px';//在左边候场
        startMove(imglist[num], { 'left': 0 });
        beAct();
    }

    //鼠标移入区域就要关闭定时器，移出的时候又要重新开启
    box.onmouseover = () => {
        clearInterval(timer);
    }

    box.onmouseout = () => {
        clearInterval(timer); 
        timer = setInterval(next, time);
    }

    //点击事件
    nextb.onclick = () => {
        next();
    }

    prevb.onclick = () => {
        prev();
    }

    //渲染小焦点
    let html2 = data.map((item, index) => {
        return `<span>${index + 1}</span>`;
    }).join('');
    light.innerHTML = html2;

    //渲染完了再找焦点
    let ligs = light.getElementsByTagName('span');

    //让焦点高亮的函数
    function beAct() {
        delAll(ligs);//排他
        ligs[num].classList.add('active');
    }
    beAct();//马上调用一次，让1高亮

    //通过点击焦点，改变轮播的图片
    //用事件委托
    light.onclick = ev => {
        if (ev.target.tagName.toLowerCase() == 'span') {
            let shu = ev.target.innerHTML - 1;
            if (shu > num) {
                //旧图移走
                startMove(imglist[num], { 'left': -iw });
                //新图移入
                imglist[shu].style.left = iw + 'px';//在右边候场
                startMove(imglist[shu], { 'left': 0 });
            } else if (shu < num) {
                //旧图移走
                startMove(imglist[num], { 'left': iw });
                //新图移入
                imglist[shu].style.left = -iw + 'px';//在左边候场
                startMove(imglist[shu], { 'left': 0 });
            }
            num = shu;
            beAct();
        }
    }
}