$('.page-in-animate-bj-l').animate({left:'0'},1500,'swing', {

});
$('.page-in-animate-bj-r').animate({right:'0'},1500,'swing',{

});


setTimeout(function () {
    $(document).ready(function () {
        $('.page-in-animate').fadeOut(500);
        $('header').show();
        $('aside').show();
        $('.container-fluid').show();
        $('.container-fluid').show();
        let carouselNum = 0;//滚动的次数
        let carouselLength = $('.page-list').children('li').length - 1;//滚动子元素个数
        navSlide();//nav show
        mouseScroll(carouselNum, carouselLength);//screen scroll
        shortsClick();//shorts event
        loginClick();//login and register event
        consultationClick();//consultation event
        bottomNavClick();//bottom nav cevent
    });
},2000);

function bottomNavClick() {
    $('body').mouseenter(function (e) {
        if (e) {//clict y == bottom bottom nav slide

        }
    })
}

function consultationClick() {
    $('.page-consultation-notice-detail,.page-consultation-item').click(function () {//change register
        $('.page-consultation-list').hide();
        $('.page-consultation-notice').hide();
        $('.page-consultation-sub-detail').show();
    });
    $('.page-place-consultation').click(function () {
        $('.page-consultation-list').show();
        $('.page-consultation-notice').show();
        $('.page-consultation-sub-detail').hide();
    });
}

function loginClick() {
    $('.nav-login').click(function () {//show login dialog
        $('.page-shorts-zhe').show();
        $('.page-login').show();
    });
    $('.page-login-register').click(function () {//change register
        $('.page-login-nav').hide();
        $('.page-register-nav').show();
        $('.page-login-form').hide();
        $('.page-register-form').show();
        $('.page-login-close').hide();
        $('.page-return-login').show();
    });
    $('.page-return-login,.page-register-btn').click(function () {//change login
        $('.page-login-nav').show();
        $('.page-register-nav').hide();
        $('.page-login-form').show();
        $('.page-register-form').hide();
        $('.page-login-close').show();
        $('.page-return-login').hide();
    });
    $('.page-password-login').click(function () {//change password
        $('.page-login-getTest').hide();
        $('.page-login-password').show();
    });
    $('.page-quest-login').click(function () {//change quest
        $('.page-login-getTest').show();
        $('.page-login-password').hide();
    });
    $('.page-login-close').click(function () {//close login dislog
        $('.page-shorts-zhe').hide();
        $('.page-login').hide();
    });
}

function shortsClick() {
    $('.page-shorts-list>li').click(function () {//奇石鉴赏点击出现对应的子页面
        $('.page-shorts-list').hide();
        $('.page-shorts-sub').show();
    });
    $('.page-shorts-sub-list-item').click(function () {//奇石鉴赏子页面点击出现弹窗
        $('.page-shorts-zhe').show();
        $('.page-shorts-sub-dialog').show();
    });
    $('.page-shorts-sub-dialog-close').click(function () {//关闭弹窗
        $('.page-shorts-zhe').hide();
        $('.page-shorts-sub-dialog').hide();
    });
    $('.three-d').click(function () {

    })
}

function navSlide() {
    let navDown = 0;//if click
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
    $('.nav-down').click(function () {
        if (navDown === 0) {
            $('.nav-top-wrap').slideDown();
            navDown = 1;
        } else {
            $('.nav-top-wrap').slideUp();
            navDown = 0;
        }
    });
}

function mouseScroll(Num, Length) {
    let ifClick = true;
    let navNum = 0;
    let isScroll = true;//记录滚屏回调
    // let Num = 0;
    $('.nav-top-menu>li').click(function () {
        navNum = $(this).index();
        ifPageNav(navNum);
        $('.page-list').animate({'left': -100 * navNum + "%"}, 1200, 'linear', function () {
        });
        return ifClick = false;
    });
    $('.page-list').bind('mousewheel', function (e, delta) {
        // if (ifClick) {
        //     Num = num;
        // } else {
        //     Num = navNum;
        // }

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
            $('.nav-top-menu>li').mouseenter(function () {//nav move chang color
                $(this).children('a').children('.col-line').css('background','#e2ba60');
            });
            $('.nav-top-menu>li').mouseleave(function () {
                if ($(this).index() === Num) {
                } else {
                    $(this).children('a').children('.col-line').css('background','transparent');
                }
            });
            ifPageNav(Num);
        }
    })
}

function ifPageNav(Num) {//change slide text
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

function navTopAnavSlide(num, text1, text2) {//chang slide text & navTop background
    $('.nav-top-menu>li').eq(num).children('a').children('.col-line').css('background','#e2ba60');
    $('.nav-top-menu>li').eq(num).siblings().children('a').children('.col-line').css('background','transparent');
    $('.nav-slide-title div p:nth-of-type(1)').text(text1);
    $('.nav-slide-title div p:nth-of-type(2)').text(text2);
}