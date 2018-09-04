startAnimation();//首页动画
let carouselNum = 0;//滚动的次数
let carouselLength = $('.page-list').children('li').length - 1;//滚动子元素个数
let heightWin = $(window).height();
navSlide();//nav show
mouseScroll();//screen scroll
shortsClick();//shorts event
loginClick();//login and register event
consultationClick();//consultation event
bottomNavClick(heightWin);//bottom nav event
nsShortsClick();//ns shorts event click
lrClick();//lr click event
textPageEvent();//文字分页

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
    navSearh(5, 0.5, 0);
    $('.nav-down img').css({
        transform: 'rotateZ(-270deg)',
        '-ms-transform': 'rotateZ(-270deg)',
        '-moz-transform': 'rotateZ(-270deg)'
    });
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

function mouseScroll() {
    $('.page-place-home, .nav-slide-logo-img').click(function () {//return home
        window.location.href = "../index.html";
    });
}

function lrClick() {
    $('.page-lr-item, .page-lr-bottom-item').click(function () {
        window.location.href = "../page/page-lr-sub.html";
    });
    $('.page-place-lr-title').click(function () {
        window.location.href = "../page/page-LR.html";
    });
}

function textPageEvent() {
    let clickIndex = 1;//记录点击的页面下标 默认第一张
    let textPagePre = 0;//点击左右记录次数
    let pageIndexLength = $('#page-box').children().length;//分页的长度
    if (pageIndexLength > 1) {
        $('.text-page-pre').show();
        $('.pageIndex').eq(0).addClass('clickTextPage');
    }
    if (pageIndexLength > 3) {
        $(".pageIndex:gt(3)").hide();
    }
    $('.pageIndex').click(function () {//a点击
        let thisIndex = $(this).index();
        if ($('.clickTextPage').index() >= 2) {//点击的要大于2
            if (thisIndex > $('.clickTextPage').index()) {//判断点击与当前元素的位置
                if (thisIndex <= pageIndexLength - 2) {//点击范围
                    nextPage(thisIndex);//判断index让其余的隐藏/显示
                } else {}
            } else {
                if (pageIndexLength - thisIndex <= 13) {//点击范围
                    prePage(thisIndex);//判断index让其余的隐藏/显示
                } else {}
            }
        }
        $(this).addClass('clickTextPage').siblings().removeClass('clickTextPage');
        textPagePre = 0;
        return clickIndex = thisIndex;
    });
    $('.text-page-next').click(function () {//下一张
        let clickTextIndex = $('.clickTextPage').index();//记录当前页面的下标
        if (clickTextIndex <= pageIndexLength - 2) {//判断是否是最后一张
            showPage('#article_' + (clickTextIndex) + '', '.contentPageClass');
            let thisIndex = clickTextIndex - 1;
            $('.pageIndex').eq(thisIndex).addClass('clickTextPage').siblings().removeClass('clickTextPage');
            if (clickTextIndex > 3 && clickTextIndex < pageIndexLength - 1) {//点击的要大于2
                nextPage(thisIndex);
            } else {}
            textPagePre++;
            return textPagePre;
        }
        else {}
    });
    $('.text-page-pre').click(function () {//上一页
        let clickTextIndex = $('.clickTextPage').index() - 1;//记录当前页面的下标
        if (clickTextIndex >= 2) {//判断是否第一张
            showPage('#article_' + (clickTextIndex - 1) + '', '.contentPageClass');
            $('.pageIndex').eq(clickTextIndex - 2).addClass('clickTextPage').siblings().removeClass('clickTextPage');
            let thisIndex = clickTextIndex - 1;
            if (clickTextIndex > 2) {//点击的要大于2
                prePage(thisIndex + 1);
            } else {}
            textPagePre--;
            return textPagePre;
        } else {}
    });
    $('#text-page-input').keydown(function (e) {//键盘
        let clickTextIndex = $('.clickTextPage').index();//记录当前页面的下标
        let downCode = e.keyCode;
        if (downCode === 13) {//回车
            let value = $(this).val();
            inputClick(value,pageIndexLength,clickTextIndex);
        }
    });
    $('#text-page-btn').click(function () {//点击确定
        let clickTextIndex = $('.clickTextPage').index();//记录当前页面的下标
        let value = $("#text-page-input").val();
        inputClick(value,pageIndexLength,clickTextIndex);
    });
}

function nextPage(num) {
    let $PageIndex =  $(".pageIndex");
    $(".pageIndex:lt(" + (num - 3) + ")").hide();
    $PageIndex.eq(num - 2).show();
    $PageIndex.eq(num - 1).show();
    $PageIndex.eq(num).show();
}
function prePage(num) {
    let $PageIndex =  $(".pageIndex");
    $(".pageIndex:gt(" + (num) + ")").hide();
    $PageIndex.eq(num - 3).show();
    $PageIndex.eq(num - 2).show();
    $PageIndex.eq(num - 1).show();
}
/**
* value 输入框里的直
* pageIndexLength 总长度
*/
function inputClick(value,pageIndexLength,clickTextIndex) {
    if (value <= pageIndexLength - 2) {//点击的要大于2
        if (value == 1) {
            $(".pageIndex:gt(" + (value + 1) + ")").hide();
            showPage('#article_' + (1) + '', '.contentPageClass');
            $('.pageIndex').eq(0).addClass('clickTextPage').siblings().removeClass('clickTextPage');
        } else {
            showPage('#article_' + (clickTextIndex - 1) + '', '.contentPageClass');
            $('.pageIndex').eq(value - 1).addClass('clickTextPage').siblings().removeClass('clickTextPage');
            let $PageIndex =  $(".pageIndex");
            $(".pageIndex:lt(" + (value - 3) + ")").hide();
            $(".pageIndex:gt(" + (value) + ")").hide();
            $PageIndex.eq(value - 2).show();
            $PageIndex.eq(value - 1).show();
            $PageIndex.eq(value).show();
        }
    } else {
        let $PageIndex =  $(".pageIndex");
        showPage('#article_' + (pageIndexLength - 2) + '', '.contentPageClass');
        $(".pageIndex:lt(" + (pageIndexLength - 7) + ")").hide();
        $PageIndex.eq(pageIndexLength- 6).show();
        $PageIndex.eq(pageIndexLength - 5).show();
        $PageIndex.eq(pageIndexLength - 4).show();
        $PageIndex.eq(pageIndexLength- 3).show();
        $('.pageIndex').eq(pageIndexLength - 3).addClass('clickTextPage').siblings().removeClass('clickTextPage');
    }
}
var showPage = function(id, findClass){
    $(findClass).each(function(){
        $(this).css('display', 'none');
    });
    //显示当前项
    $(id).css('display', 'block');
};
