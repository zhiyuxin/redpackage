window.onload = function () {

    let music = document.getElementsByClassName('music')[0];
    let audio = document.getElementsByClassName('audio')[0];
    let hdjn = document.getElementsByClassName('hdjn')[0];
    let redpack_start = document.getElementsByClassName('redpack_start')[0];
    let redpack_top = document.getElementsByClassName('redpack_top')[0];
    let chai = document.getElementsByClassName('chai')[0];
    let msg = document.getElementsByClassName('msg')[0];
    let redpack_chai = document.getElementsByClassName('redpack_chai')[0];
    let msg_mask1 = document.getElementsByClassName('msg_mask1')[0];
    let msg_mask1_close = document.getElementsByClassName('msg_mask1_close')[0];
    let msg_mask1_btn = document.getElementsByClassName('msg_mask1_btn')[0];
    let winning_mask2 = document.getElementsByClassName('winning_mask2')[0];
    let winning_mask2_bottom = document.getElementsByClassName('winning_mask2_bottom')[0];
    let percen_mask5 = document.getElementsByClassName('percen_mask5')[0];
    let percen_mask5_left = document.getElementsByClassName('percen_mask5_left')[0];
    let percen_mask5_right = document.getElementsByClassName('percen_mask5_right')[0];
    let percen_mask5_close = document.getElementsByClassName('percen_mask5_close')[0];

    //点击图片关闭音乐
    music.onclick = function () {
        if (audio !== null) {
            if (audio.paused) {
                audio.play();
                music.src = 'images/redpack_m.png';
            } else {
                audio.pause();
                music.src = 'images/redpack_n.png';
            }
        }
    };

    //活动锦囊
    hdjn.onclick = function () {
        this.style.display = 'none';
        music.style.display = 'none';
        msg.style.display = 'none';
        redpack_start.style.display = 'none';
        redpack_top.style.display = 'none';
        percen_mask5.style.display = 'block';
        percen_mask5_left.style.display = 'block';
        percen_mask5_right.style.display = 'none';
    }
    percen_mask5_close.onclick = function () {
        percen_mask5.style.display = 'none';
        hdjn.style.display = 'block';
        music.style.display = 'block';
        msg.style.display = 'block';
        redpack_start.style.display = 'block';
        redpack_top.style.display = 'block';
        // location.href = 'redpack.html';
    };
    //点击立即开抢
    redpack_start.onclick = function () {
        this.style.display = 'none';
        music.style.display = 'none';
        hdjn.style.display = 'none';
        redpack_top.style.display = 'none';
        msg.style.display = 'none';
        chai.style.display = 'block';
    };
    //填写信息
    redpack_chai.onclick = function () {
        hdjn.style.display = 'none';
        music.style.display = 'none';
        redpack_start.style.display = 'none';
        redpack_top.style.display = 'none';
        chai.style.display = 'none';
        msg_mask1.style.display = 'block';

    };
    msg_mask1_close.onclick = function () {
        msg_mask1.style.display = 'none';
        chai.style.display = 'block';
    };
    //提交信息后显示中奖
    msg_mask1_btn.onclick = function () {
        msg_mask1.style.display = 'none';
        winning_mask2.style.display = 'block';
    };

    //点击查看奖品信息进入个人中心
    winning_mask2_bottom.onclick = function () {
        winning_mask2.style.display = 'none';
        percen_mask5.style.display = 'block';
        percen_mask5_left.style.display = 'block';
        percen_mask5_right.style.display = 'none';
    };

    //活动锦囊选项卡切换
    var tab = document.getElementsByClassName('tab')[0];
    var li_span = tab.getElementsByTagName("span");
    var percen_mask5_center = document.getElementsByClassName('percen_mask5_center')[0];
    var center = percen_mask5_center.getElementsByClassName("dom");


    //开始监听
    for (var i = 0; i < li_span.length; i++) {
        var li = li_span[i];
        li.index = i;
        li.onclick = function () {
            for (var j = 0; j < li_span.length; j++) {
                li_span[j].className = "";
                center[j].style.display = "none";
            }
            this.className = "active";
            center[this.index].style.display = "block";
        };
    }
    ;

    //将电话号码中间四位隐藏
    var msg_tel = document.getElementsByClassName('msg_tel')[0];
    var tels = msg_tel.getElementsByTagName('span');
    for (var i = 0; i < tels.length; i++) {
        var tel = tels[i].innerHTML;
        if (Number(tel) && String(tel).length == 11) {
            var mobile = String(tel);
            var reg = /^(\d{3})\d{4}(\d{4})$/;
            var a = mobile.replace(reg, '$1****$2');
            tels[i].innerHTML = a;
        } else {
            return tel;
        }
    }
    // 文字滚动向上
    var h=$(".msg_ul li").height();
    function movetop(){
        $(".msg_ul li").eq(0).animate({height:0},200,function(){
            $(".msg_ul").append($(this));
            $(this).eq(0).height(h)
        })
    }
    var t=setInterval(movetop,1000);



}