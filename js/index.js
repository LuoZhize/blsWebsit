$(document).ready(function () {
    let carouselNum = 0;//滚动的次数
    let carouselLength = $('.page-list').children('li').length - 1;//滚动子元素个数
    mouseScroll(carouselNum, carouselLength);
    navSlide();
});

function navSlide() {
    //user
    $('.nav-user').mouseenter(function () {
        $(this).children('.nav-user-menu').show();
    });
    $('.nav-user-menu').mouseenter(function () {
        $(this).children('.nav-user-menu').show();
    });
    $('.nav-user').mouseleave(function () {
        $(this).children('.nav-user-menu').hide();
    });
    //nav
    $('.nav-down').mouseenter(function () {
        $('.nav-top-wrap').slideDown();
    });
    $('.nav-top-wrap').mouseleave(function () {
        $(this).slideUp();
    });
}

function mouseScroll(Num, Length) {//横屏滚动
    let isScroll = true;//记录滚屏回调
    $('.page-list').bind('mousewheel', function (e, delta) {
        if (isScroll) {//判断是否滚屏完成
            if (delta === -1) {//-1滚轮向下滚动1滚轮向上滚动
                if (Num < Length) {//判断是否最后一个
                    Num++;
                    isScroll = false;//滚动时为false
                    $('.page-list').animate({'left': -100 * Num + "%"}, 1200, 'linear', function () {
                        return isScroll = true;//滚动完成返回true
                    });
                } else {
                }
            } else {
                if (Num > 0) {
                    Num--;
                    isScroll = false;
                    $('.page-list').animate({'left': -100 * Num + "%"}, 1200, 'linear', function () {
                        return isScroll = true;
                    });
                } else {
                }
            }
            switch (Num) {
                case 0 :
                    navTopAnavSlide(Num, "首", "页");
                    break;
                case 1 :
                    navTopAnavSlide(Num, "奇石", "鉴赏");
                    break;
                case 2 :
                    navTopAnavSlide(Num, "国石", "文化");
                    break;
                case 3 :
                    navTopAnavSlide(Num, "雕刻", "大师");
                    break;
                case 4 :
                    navTopAnavSlide(Num, "官方", "论坛");
                    break;
                case 5 :
                    navTopAnavSlide(Num, "咨询", "中心");
                    break;
                case 6 :
                    navTopAnavSlide(Num, "关于", "我们");
                    break;
            }
        }
    })
}

function navTopAnavSlide(num, text1, text2) {
    $('.nav-top-menu>li').eq(num).children('a').children('.col-line').css('background','#e2ba60').fadeIn(500);
    $('.nav-top-menu>li').eq(num).siblings().children('a').children('.col-line').css('background','transparent').fadeOut(0);
    // $('.nav-top-menu>li').mouseenter(function () {//nav move chang color
    //     $(this).children('a').children('.col-line').css('background','#e2ba60');
    // });
    // $('.nav-top-menu>li').mouseleave(function () {
    //     $(this).children('a').children('.col-line').css('background','transparent');
    // });
    $('.nav-slide-title div p:nth-of-type(1)').text(text1);
    $('.nav-slide-title div p:nth-of-type(2)').text(text2);
}