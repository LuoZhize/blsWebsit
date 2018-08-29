$('.page-in-animate-bj-l').animate({left:'0'},2500,'swing', function () {//mountain left

});
$('.page-in-animate-bj-r').animate({right:'0'},2500,'swing', function () {//mountain right
    $(".page-in-water-img").css('top', $(window).height() / 1.5 + 'px').fadeIn(2000);
    $('.page-in-text').css('top', $(window).height() / 3 + 'px');
    $('.page-in-gif').css('top', $(window).height() / 20 + 'px');
    $('.page-in-end').css('top', $(window).height() / 6 + 'px');
});
setTimeout(function () {//shorts fadein
    $(".page-in-animate-content").css('top', $(window).height() / 3 + 'px').fadeIn(2000);
},1500);
setTimeout(function () {//guo video
    $(".page-in-guo").show();
},1500);
setTimeout(function () {//打印字animation
    $('.page-in-video').hide();
    $('.page-in-guo-j').show();
    let index = 0,indexIn = 0;
    let str = "礼巴林",strIn = "一品巴林，千年中国印";
    let timerTitle,timerIntroduce;
    function type() {
        if(index === str.length) {
            clearInterval(timerTitle);
            function typeIn() {
                if(indexIn === strIn.length) {
                    clearInterval(timerIntroduce);
                    $('.page-in-end-img').fadeIn(1000);//last img show
                    setTimeout(function () {
                        $(document).ready(function () {
                            $('.page-in-animate').fadeOut(500);
                            $('header').show();
                            $('aside').show();
                            $('footer').show();
                            $('.container-fluid').show();
                            let carouselNum = 0;//滚动的次数
                            let carouselLength = $('.page-list').children('li').length - 1;//滚动子元素个数
                            let heightWin = $(window).height();
                            let widthWin = $(window).width();
                            navSlide();//nav show
                            mouseScroll(carouselNum, carouselLength);//screen scroll
                            shortsClick();//shorts event
                            loginClick();//login and register event
                            consultationClick();//consultation event
                            bottomNavClick(heightWin);//bottom nav event
                        });
                    },20000);
                }
                $(".page-in-introduce").text(strIn.substring(0, indexIn++));
            }
            timerIntroduce = setInterval(typeIn, 100);
        }
        $(".page-in-title").text(str.substring(0, index++));
    }
    timerTitle = setInterval(type, 100);
},8000);
// setTimeout(function () {//from small to big
//     this.shortTimer = setInterval(function () {
//         shortNum += 0.1;
//         $('.page-in-content-short').css({'display':'block','transform':'scale(' + shortNum + ')'});
//         if (shortNum >= 1) {
//             clearInterval(this.shortTimer);
//         }
//     },300);
// },500);

function bottomNavClick(heightWin) {
    $('body').mousemove(function (e) {
        if (e.clientY >= heightWin/1.02) {//clict y == bottom bottom nav show
            $('.footer-zhe').slideDown(600);
            $('.footer-content').slideDown(600);
        } else if(e.clientY < heightWin/1.35) {
            $('.footer-zhe').slideUp(400);
            $('.footer-content').slideUp(400);
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
    let navNum = 0;//记录navTop点击
    let isScroll = true;//记录滚屏回调
    $('.nav-top-menu>li').click(function () {//navTop click
        $('.page-list').stop();
        navNum = $(this).index();
        ifPageNav(navNum);// page scroll and slide chang text
        screenCilck(navNum);//page scroll
    });
    $('.page-place-home,.nav-slide-logo-img').click(function () {//return home
        ifPageNav(0);
        screenCilck(0);
    });
    $('.page-home-shorts').click(function () {//return shorts
        ifPageNav(1);
        screenCilck(1);
    });
    $('.page-home-carveMaster').click(function () {//return carveMaster
        ifPageNav(3);
        screenCilck(3);
    });
    $('.page-home-offForum').click(function () {//return offForum
        // ifPageNav(navNum);
        // screenCilck(1);
    });
    $('.page-home-newDy').click(function () {//return consultation
        ifPageNav(4);
        screenCilck(4);
    });
    $('.page-list').bind('mousewheel', function (e, delta) {
        if (isScroll) {//判断是否滚屏完成
            Num = Math.round(($('.page-list').offset().left)/(-$('.page-item').width()));//获取当前是第几个页面
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
            ifPageNav(Num);//change slide text
        }
    });
}

function ifPageNav(Num) {
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
        // case 4 :
        //     navTopAnavSlide(Num, "官方", "论坛");
        //     break;
        case 4 :
            navTopAnavSlide(Num, "咨询", "中心");
            break;
        case 5 :
            navTopAnavSlide(Num, "关于", "我们");
            break;
    }
}

function navTopAnavSlide(num, text1, text2) {//chang slide text & navTop background
    let navTopMenuLi = $('.nav-top-menu>li');
    navTopMenuLi.mouseenter(function () {//nav move chang color
        if ($(this).index() === num) {
        } else {
            $(this).children('a').children('.col-line').css('background','#e2ba60');
        }
    });
    navTopMenuLi.mouseleave(function () {
        if ($(this).index() === num) {
            $(this).children('a').children('.col-line').css('background','#e2ba60');
        } else {
            $(this).children('a').children('.col-line').css('background','transparent');
        }
    });
    navTopMenuLi.eq(num).children('a').children('.col-line').css('background','#e2ba60');
    navTopMenuLi.eq(num).siblings().children('a').children('.col-line').css('background','transparent');
    $('.nav-slide-title div p:nth-of-type(1)').text(text1);
    $('.nav-slide-title div p:nth-of-type(2)').text(text2);
}

function screenCilck(num) {
    isScroll = false;//滚动时为false
    $('.page-list').animate({'left': -100 * num + "%"}, 1200, 'linear', function () {
        return isScroll = true;
    });
}