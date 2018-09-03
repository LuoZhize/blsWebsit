startAnimation();//首页动画
let carouselNum = 0;//滚动的次数
let carouselLength = $('.page-list').children('li').length - 1;//滚动子元素个数
let heightWin = $(window).height();
navSlide();//nav show
mouseScroll(carouselNum, carouselLength);//screen scroll
shortsClick();//shorts event
loginClick();//login and register event
consultationClick();//consultation event
bottomNavClick(heightWin);//bottom nav event
nsShortsClick();//ns shorts event click
lrClick();//lr click event
textPageBG();

function startAnimation() {
    $('.page-in-animate-bj-l').animate({left: '0'}, 2500, 'swing', function () {//mountain left

    });
    $('.page-in-animate-bj-r').animate({right: '0'}, 2500, 'swing', function () {//mountain right
        $(".page-in-water-img").css('top', $(window).height() / 1.5 + 'px').fadeIn(2000);
        $('.page-in-text').css('top', $(window).height() / 3 + 'px').show();
        $('.page-in-end').css('top', $(window).height() / 6 + 'px');
    });
    setTimeout(function () {//shorts fadein
        $(".page-in-animate-content").css('top', $(window).height() / 3 + 'px').fadeIn(2000);
    }, 1500);
    setTimeout(function () {//打印字animation
        let index = 0, indexIn = 0;
        let str = "礼巴林", strIn = "一品巴林，千年中国印";
        let timerTitle, timerIntroduce, endAnimate;

        function type() {//title 打印
            if (index === str.length) {
                clearInterval(timerTitle);

                function typeIn() {//introduce 打印
                    // let endAnimate;
                    if (indexIn === strIn.length) {
                        clearInterval(timerIntroduce);
                        $('.page-in-end-img').fadeIn(1000);//墨水 img show
                        $('.end-page-in-animate-img').css('display', 'inline-block').click(function () {//click end animation
                            clearTimeout(endAnimate);
                            $('.page-in-over-circular').animate({
                                width: '120%',
                                height: 41.5 + 'rem'
                            }, 500, 'linear', function () {//圆的扩散
                                $(this).hide();
                                $('.page-in-animate').hide();
                                $(document).ready(function () {
                                    $('.page-in-animate').hide();
                                    $('aside').show();
                                    $('footer').show();
                                    $('.nav-down').show();
                                    $('.container-fluid').show();
                                });
                            });
                        });
                        endAnimate = setTimeout(function () {
                            $('.page-in-over-circular').animate({
                                width: '120%',
                                height: 41.5 + 'rem'
                            }, 500, 'linear', function () {//圆的扩散
                                $(this).hide();
                                $('.page-in-animate').hide();
                                $(document).ready(function () {
                                    $('.nav-down').show();
                                    $('aside').show();
                                    $('footer').show();
                                    $('.container-fluid').show();
                                });
                            });
                        }, 10000);
                    }
                    $(".page-in-introduce").text(strIn.substring(0, indexIn++));
                }

                timerIntroduce = setInterval(typeIn, 100);
            }
            $(".page-in-title").text(str.substring(0, index++));
        }

        timerTitle = setInterval(type, 300);
    }, 5000);
}

function nsShortsClick() {
    $('.page-ns-detail').click(function () {
        window.location.href = "../page/page-ns-sub.html";
    });
    $('.page-place-ns').click(function () {
        window.location.href = "../page/page-ns-store.html";
    });
}

function bottomNavClick(heightWin) {
    let $footerZhe = $('.footer-zhe');
    let $footerContent = $('.footer-content');
    $('body').mousemove(function (e) {
        if (e.clientY >= heightWin / 1.02) {//clict y == bottom bottom nav show
            $footerZhe.slideDown(600);
            $footerContent.slideDown(600);
        } else if (e.clientY < heightWin / 1.35) {
            $footerZhe.slideUp(400);
            $footerContent.slideUp(400);
        }
    })
}

function consultationClick() {
    let $pageConsultationContent = $('.page-consultation-content');
    let textScon = "";
    $('.page-consultation-notice-detail,.page-consultation-item').click(function () {//change register
        $pageConsultationContent.css({
            'background': 'url("../blsWebsit/img/page-consultation-sub-bg.png") no-repeat',
            'background-size': '100%',
            '-moz-background-size': '100%',
            '-o-background-size': '100%'
        });
        window.location.href = "../page/page-consultation-sub.html";
    });
    $('.page-place-consultation').click(function () {
        $pageConsultationContent.css('background', 'transparent');
        window.location.href = "../page/page-consultation-content.html";
    });
    $('#page-consultation-content').pagenation();
}

function loginClick() {
    let $pageLogin = $('.page-login');
    let $pageLoginNav = $('.page-login-nav');
    let $pageRegisterNav = $('.page-register-nav');
    let $pageLoginForm = $('.page-login-form');
    let $pageRegisterForm = $('.page-register-form');
    let $pageLoginClose = $('.page-login-close');
    let $pageReturnLogin = $('.page-return-login');
    let $pageLoginGetText = $('.page-login-getTest');
    let ifQUestOrPass = false;
    $('.nav-login').click(function () {//show login dialog
        $('.page-shorts-zhe').show();
        $pageLogin.show();
    });
    $('.page-login-register').click(function () {//change register
        $pageLoginNav.hide();
        $pageRegisterNav.show();
        $pageLoginForm.hide();
        $pageRegisterForm.show();
        $pageLoginClose.hide();
        $pageReturnLogin.show();
        $pageLoginGetText.show();
    });
    $('.page-return-login,.page-register-btn').click(function () {//change login
        $pageLoginNav.show();
        $pageRegisterNav.hide();
        $pageLoginForm.show();
        $pageRegisterForm.hide();
        $pageLoginClose.show();
        $pageReturnLogin.hide();
        if (ifQUestOrPass === false) {
            $pageLoginGetText.show();
        } else {
            $pageLoginGetText.hide();
        }
    });
    $('.page-password-login').click(function () {//change password
        $pageLoginGetText.hide();
        $('.page-login-password').show();
        $('.page-password-login').css('color','rgb(34, 34, 34)');
        $('.page-quest-login').css('color','rgb(136, 136, 136)');
        return ifQUestOrPass = true;
    });
    $('.page-quest-login').click(function () {//change quest
        $pageLoginGetText.show();
        $('.page-login-password').hide();
        $('.page-quest-login').css('color','rgb(34, 34, 34)');
        $('.page-password-login').css('color','rgb(136, 136, 136)');
        return ifQUestOrPass = false;
    });
    $pageLoginClose.click(function () {//close login dislog
        $('.page-shorts-zhe').hide();
        $pageLogin.hide();
    });
}

function shortsClick() {
    let $pageShorts = $('.page-shorts');
    let $pageShortsZhe = $('.page-shorts-zhe');
    let $pageShortsSubDialog = $('.page-shorts-sub-dialog');
    $('.nav-top-menu>li').eq(1).click(function () {//点击导航栏返回主页
        $pageShorts.css({
            'background': 'url("../blsWebsit/img/page-shorts-bg.png") no-repeat',
            'background-size': '100%',
            '-moz-background-size': '100%',
            '-o-background-size': '100%'
        });
        window.location.href = "../page/page-shorts.html";
    });
    $('.page-shorts-list>li').click(function () {//奇石鉴赏点击出现对应的子页面
        $pageShorts.css({
            'background': 'url("../blsWebsit/img/page-shorts-sub-bg.png") no-repeat',
            'background-size': '100%',
            '-moz-background-size': '100%',
            '-o-background-size': '100%'
        });
        window.location.href = "../page/page-shorts-sub.html";
    });
    $('.page-shorts-sub-list-item').click(function () {//奇石鉴赏子页面点击出现弹窗
        $pageShortsZhe.show();
        $pageShortsSubDialog.show();
    });
    $('.page-shorts-sub-dialog-close').click(function () {//关闭弹窗
        $pageShortsZhe.hide();
        $pageShortsSubDialog.hide();
    });
    $('.three-d').click(function () {

    })
}

function navSlide() {
    let navDown = 0;//if click
    let $navUser = $('.nav-user');
    let $navTopWrap = $('.nav-top-wrap');
    //user
    $navUser.mouseenter(function () {
        $(this).children('.nav-user-menu').show();
    });
    $('.nav-user-menu').mouseenter(function () {
        $(this).children('.nav-user-menu').show();
    });
    $navUser.mouseleave(function () {
        $(this).children('.nav-user-menu').hide();
    });
    //nav
    $('.nav-down').click(function () {
        if (navDown === 0) {
            $('.nav-down img').css({
                transform: 'rotateZ(-270deg)',
                '-ms-transform': 'rotateZ(-270deg)',
                '-moz-transform': 'rotateZ(-270deg)'
            });
            $navTopWrap.slideDown();
            navSearh(5, 0.5, 1000);//nav search width add
            navDown = 1;
        } else {
            $('.nav-down img').css({
                transform: 'rotateZ(-90deg)',
                '-ms-transform': 'rotateZ(-270deg)',
                '-moz-transform': 'rotateZ(-270deg)'
            });
            $navTopWrap.slideUp();
            navSearh(0, 0, 500);//nav search width reduce
            navDown = 0;
        }
    });

    function navSearh(addWidth, addPadding, time) {
        $('.nav-top-input-search').animate({width: addWidth + 'rem', padding: addPadding + 'rem'}, time);
    }
}

function mouseScroll(Num, Length) {
    let $pageList = $('.page-list');
    let navNum = 0;//记录navTop点击
    let isScroll = true;//记录滚屏回调
    $('.nav-top-menu>li a').click(function () {//navTop click
        $pageList.stop();
        navNum = $(this).parentNode().index();
        ifPageNav(navNum);// page scroll and slide chang text
        screenClick(navNum, $pageList);//page scroll
    });
    $('.page-place-home, .nav-slide-logo-img').click(function () {//return home
        window.location.href = "../index.html";
    });
    $('.page-home-shorts').click(function () {//return shorts
        ifPageNav(1);
        screenClick(1, $pageList);
    });
    $('.page-home-carveMaster').click(function () {//return carveMaster
        ifPageNav(3);
        screenClick(3, $pageList);
    });
    $('.page-home-offForum').click(function () {//return offForum
        // ifPageNav(navNum);
        // screenClick(1,$pageList);
    });
    $('.page-home-newDy').click(function () {//return consultation
        ifPageNav(4);
        screenClick(4, $pageList);
    });
}

function ifPageNav(Num) {
    switch (Num) {
        case 0 :
            navTopANavSlide(Num, "首", "页");
            break;
        case 1 :
            navTopANavSlide(Num, "奇石", "鉴赏");
            break;
        case 2 :
            navTopANavSlide(Num, "国石", "文化");
            break;
        case 3 :
            navTopANavSlide(Num, "雕刻", "大师");
            break;
        case 4 :
            navTopANavSlide(Num, "咨询", "中心");
            break;
        case 5 :
            navTopANavSlide(Num, "关于", "我们");
            break;
    }
}

function navTopANavSlide(num, text1, text2) {//chang slide text & navTop background
    let navTopMenuLi = $('.nav-top-menu>li');
    navTopMenuLi.mouseenter(function () {//nav move chang color
        if ($(this).index() === num) {
        } else {
            $(this).children('a').children('.col-line').css('background', '#e2ba60');
        }
    });
    navTopMenuLi.mouseleave(function () {
        if ($(this).index() === num) {
            $(this).children('a').children('.col-line').css('background', '#e2ba60');
        } else {
            $(this).children('a').children('.col-line').css('background', 'transparent');
        }
    });
    navTopMenuLi.eq(num).children('a').children('.col-line').css('background', '#e2ba60');
    navTopMenuLi.eq(num).siblings().children('a').children('.col-line').css('background', 'transparent');
    $('.nav-slide-title div p:nth-of-type(1)').text(text1);
    $('.nav-slide-title div p:nth-of-type(2)').text(text2);
}

function lrClick() {
    $('.page-lr-item, .page-lr-bottom-item').click(function () {
        window.location.href = "../page/page-lr-sub.html";
    });
    $('.page-place-lr-title').click(function () {
        window.location.href = "../page/page-LR.html";
    });
}

function textPageBG() {
    let clickIndex = 1;//记录点击的页面下标 默认第一张
    let textPagePre = 0;//点击左右记录次数
    if ($('#page-box').children().length > 1) {
        $('.text-page-pre').show();
    }
    if ($('#page-box').children().length > 6) {
        $(".pageIndex:gt(1)").hide().eq(-2).show().before("<span class='textPageDot'> . . . </span>");
        $(".pageIndex:last-of-type").show();
    }
    $('.pageIndex').click(function () {
        let thisIndex = $(this).index();
        preOrNext(thisIndex);//判断index让其余的隐藏/显示
        if (thisIndex >= $('#page-box').children().length - 5) {
            $(".textPageDot").remove();
        } else {
            $(".pageIndex:gt(1)").hide().eq(-2).show().before("<span class='textPageDot'> . . . </span>");
        }
        $(this).addClass('clickTextPage').siblings().removeClass('clickTextPage');
        textPagePre = 0;
        return clickIndex = thisIndex;
    });
    $('.text-page-next').click(function () {//下一张
        if (clickIndex + textPagePre <= $('#page-box').children().length - 2) {//判断是否是第一张
            showPage('#article_' + (clickIndex + textPagePre) + '', '.contentPageClass');
            $('.pageIndex').eq(clickIndex + textPagePre - 1).addClass('clickTextPage').siblings().removeClass('clickTextPage');
            let thisIndex = clickIndex + textPagePre;
            preOrNext(thisIndex);
            textPagePre++;
            return textPagePre;
        }
        else {}
    });
    $('.text-page-pre').click(function () {//上一张
        let thisIndex = $(this).index();
        textPagePre--;
        if ((clickIndex + textPagePre) - 2 >= 0) {//判断是否最后一张
            showPage('#article_' + (clickIndex + textPagePre - 1) + '', '.contentPageClass');
            $('.pageIndex').eq(clickIndex + textPagePre - 2).addClass('clickTextPage').siblings().removeClass('clickTextPage');
            let thisIndex = clickIndex + textPagePre - 1;
            if($('#page-box').children().length - thisIndex >= 1) {
                console.log($('#page-box').children().length,thisIndex);
                $(".pageIndex").eq(thisIndex-1).show();
                $(".pageIndex").eq(thisIndex+1).hide();
            } else {}
            if (thisIndex >= $('#page-box').children().length - 5) {
                $(".textPageDot").remove();
            } else {
                $(".pageIndex:gt(1)").hide().eq(-2).show().before("<span class='textPageDot'> . . . </span>");
            }
            return textPagePre;
        } else {}
    });
}
function preOrNext(num) {
    $(".pageIndex:lt(" + (num - 2) + ")").hide();
    $(".pageIndex").eq(num - 1).show();
}
var showPage = function(id, findClass){
    $(findClass).each(function(){
        $(this).css('display', 'none');
    });
    //显示当前项
    $(id).css('display', 'block');
};