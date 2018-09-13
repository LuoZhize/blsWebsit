let heightWin = $(window).height();
startAnimation();//首页动画
navSlide();//nav show
mouseScroll();//screen scroll
shortsClick();//shorts event
carveClick();//carve event
loginClick();//login and register event
consultationClick();//consultation event
bottomNavClick(heightWin);//bottom nav event
nsShortsClick();//ns shorts event click
lrClick();//lr click event
textPageEvent();//文字分页
ourMap();//关于我们地图

function startAnimation() {
    $('img').on('mousedown',function (e) {//禁止图片拖动
        e.preventDefault()
    });
    $('.page-in-station-horse').animate({left: '4rem'},2500,'linear',function () {
        $('.page-in-station-horse').animate({left: '10rem'},500,'linear',function () {
            $('body').append('<audio src="../blsWebsit/img/horse-call.mp3" autoplay=autoplay></audio>');//音效
            $('.page-in-station-horse').css({'transform': 'rotateZ(0deg)','transition-duration': '2s'});
            $('.horse-shadow').show(0);
            $('.horse-shadow').css({'transform': 'rotateZ(0deg)','transition-duration': '2s'});
        });
    });
    setTimeout(function () {
        move();
    },1000)
}

function move() {
    $('.page-in-yun-l').animate({right:'43%'},1000,'swing',function () {//yun move

    });
    $('.page-in-yun-r').animate({right: '10%'},1000,'swing',function () {//yun move

    });
    setTimeout(function () {//yun hide
        $('.page-in-yun-l').fadeOut(500);
        $('.page-in-yun-r').fadeOut(500);
    },500);
    setTimeout(function () {//sun show
        $('.page-in-sun').fadeIn(1000);
    },700);
    setTimeout(function () {//打印字animation（延时）
        let index = 0, indexIn = 0;
        let str = $('.page-in-title-bf').text(), strIn = $('.page-in-introduce-bf').text();
        let timerTitle, timerIntroduce, endAnimate;
        $('.page-in-sun').animate({opacity: '0.4'},1000,function () {//太阳变淡
            function type() {//title 打印
                if (index === str.length) {//判断字数
                    clearInterval(timerTitle);//清空定时器

                    function typeIn() {//introduce 打印
                        // let endAnimate;
                        if (indexIn === strIn.length) {
                            clearInterval(timerIntroduce);
                            $('.page-in-end').fadeIn(200);//logo img show
                            setTimeout(function () {//最后箭头的延时
                                $('.end-page-in-animate-img').css('display', 'inline-block').click(function () {//click end animation
                                    clearTimeout(endAnimate);
                                    $('.page-in-over-circular').animate({//圆的扩散
                                        width: '120%',
                                        height: 41.5 + 'rem'
                                    }, 500, 'linear', function () {//回调显示首页
                                        $(this).hide();
                                        $('.page-in-animate').hide();
                                        $(document).ready(function () {
                                            $('.page-in-animate').hide();
                                            $('header').show();
                                            $('aside').show();
                                            $('footer').show();
                                            $('.nav-down').show();
                                            $('.container-fluid').show();
                                        });
                                    });
                                });
                                endAnimate = setTimeout(function () {//等待十秒
                                    $('.page-in-over-circular').animate({
                                        width: '120%',
                                        height: 41.5 + 'rem'
                                    }, 500, 'linear', function () {//圆的扩散
                                        $(this).hide();
                                        $('.page-in-animate').hide();
                                        $(document).ready(function () {
                                            $('.page-in-animate').hide();
                                            $('header').show();
                                            $('aside').show();
                                            $('footer').show();
                                            $('.nav-down').show();
                                            $('.container-fluid').show();
                                        });
                                    });
                                }, 10000);
                            },1000);
                        }
                        $(".page-in-introduce").text(strIn.substring(0, indexIn++));//显示字
                    }

                    timerIntroduce = setInterval(typeIn, 100);
                }
                $(".page-in-title").text(str.substring(0, index++));
            }

            timerTitle = setInterval(type, 300);
        });
    }, 2500);
}

function nsShortsClick() {
    $('.page-ns-item,.page-place-ns-sub-title').click(function () {
        window.location.href = "../page/page-ns-sub.html";
    });
    $('.page-place-ns').click(function () {
        window.location.href = "../page/page-ns-store.html";
    });
    $('.page-ns-sub-detail').click(function () {
        window.location.href = "page-ns-sub-sub.html";
    });
    let listLength = $('.page-ns-sub-list>li').length;
    nsPageList(listLength,4);//分页
}

function bottomNavClick(heightWin) {
    let $footerZhe = $('.footer-zhe');
    let $footerContent = $('.footer-content');
    $('body').mousemove(function (e) {
        if (e.clientY >= heightWin / 1.02) {//move （y == bottom） bottom nav show
            $footerZhe.slideDown(600);
            $footerContent.slideDown(600);
        } else if (e.clientY < heightWin / 1.25) {
            $footerZhe.slideUp(400);
            $footerContent.slideUp(400);
        }
    })
}

function consultationClick() {
    let $pageConsultationContent = $('.page-consultation-content');
    $('.page-consultation-notice-detail,.page-consultation-item').click(function () {//change bg
        $pageConsultationContent.css({
            'background': 'url("../blsWebsit/img/page-consultation-sub-bg.png") no-repeat',
            '-moz-background-size': '100%',
            '-o-background-size': '100%',
            'background-size': '100%'
        });
        window.location.href = "../page/page-consultation-sub.html";
    });
    $('.page-place-consultation').click(function () {
        $pageConsultationContent.css('background', 'transparent');
        window.location.href = "../page/page-consultation-content.html";
    });
    //list hover
//     background: url("../img/page-consultation-list-bj.png") no-repeat;
//     -moz-background-size: 100%;
//     background-size: 100%;
// {
//         color: white;
//     }
//  {
//         color: white;
//     }
    $('.page-consultation-list li').mouseenter(function () {
        $(this).children('.page-consultation-item-title,.page-consultation-item-info').css({'color': 'white'});
        $(this).css({
            'background' : 'url("../img/page-consultation-list-bj.png") no-repeat',
            '-moz-background-size' : '100%',
            '-o-background-size' : '100%',
            'background-size' : '100%'
        })
    });
    $('.page-consultation-list li').mouseleave(function () {
        $(this).children('.page-consultation-item-info').css({'color': '#999999'});
        $(this).children('.page-consultation-item-title').css({'color': '#000000'});
        $(this).css({
            'background' : '#ffffff',
        })
    });
    let listLength = $('.page-consultation-list>li').length;
    consultationPageList(listLength,4);//分页
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
        $('.page-password-login').css('color', '#b5964e');
        $('.page-quest-login').css('color', '#bcc2c9');
        return ifQUestOrPass = true;
    });
    $('.page-quest-login').click(function () {//change quest
        $pageLoginGetText.show();
        $('.page-login-password').hide();
        $('.page-quest-login').css('color', '#b5964e');
        $('.page-password-login').css('color', '#bcc2c9');
        return ifQUestOrPass = false;
    });
    $pageLoginClose.click(function () {//close login dislog
        $('.page-shorts-zhe').hide();
        $pageLogin.hide();
    });
}

function shortsClick() {
    let $pageShortsZhe = $('.page-shorts-zhe');
    let $pageShortsSubDialog = $('.page-shorts-sub-dialog');
    let subNavClick = 0, navClisk;
    $('.nav-top-menu>li').eq(1).click(function () {//点击导航栏奇石鉴赏返回主页
        window.location.href = "../page/page-shorts.html";
    });
    $('.page-shorts-list>li').click(function () {//奇石鉴赏点击出现对应的子页面
        window.location.href = "../page/page-shorts-sub.html";
    });
    $('.page-shorts-sub-list-item').click(function () {//奇石鉴赏子页面点击出现弹窗
        $pageShortsZhe.show();
        $pageShortsSubDialog.show();
    });
    //父页面列表
    $('.page-shorts-list li').mouseenter(function () {
        $(this).children('.page-shorts-item-info').children('span').css({'color': 'rgb(226, 186, 96)'});
        $(this).children('.page-shorts-item-top').css({
            'background' : 'url("../img/page-short-item-on.png") no-repeat',
            '-moz-background-size' : '100%',
            '-o-background-size' : '100%',
            'background-size' : '100%'
        })
    });
    $('.page-shorts-list li').mouseleave(function () {
        $(this).children('.page-shorts-item-info').children('span').css({'color': '#ffffff'});
        $(this).children('.page-shorts-item-top').css({
            'background' : 'url("../img/page-short-item-off.png") no-repeat',
            '-moz-background-size' : '100%',
            '-o-background-size' : '100%',
            'background-size' : '100%'
        })
    });
    //子页面导航栏
    $('.page-shorts-sub-nav li').click(function () {
        $(this).css({'color':'rgb(226, 186, 96)','border-bottom':'0.1rem solid rgb(226, 186, 96)'}).siblings().css({'color':'#ffffff','border-bottom':'0.1rem solid transparent'});
        subNavClick = $(this).index();
    });
    $('.page-shorts-sub-nav li').mouseleave(function () {
        $(this).css({'color': '#ffffff', 'border-bottom': '0.1rem solid transparent'});
        $('.page-shorts-sub-nav li').eq((subNavClick)).css({'color':'rgb(226, 186, 96)','border-bottom':'0.1rem solid rgb(226, 186, 96)'});
    });
    $('.page-shorts-sub-nav li').mouseenter(function () {
        $(this).css({'color':'rgb(226, 186, 96)','border-bottom':'0.1rem solid rgb(226, 186, 96)'});
    });
    $('.page-shorts-sub-dialog-close').click(function () {//关闭弹窗
        $pageShortsZhe.hide();
        $pageShortsSubDialog.hide();
    });
    $('.three-d').click(function () {//3d效果

    });
    $('.page-shorts-list li').mouseenter(function () {
        $(this).addClass('shorts-li-hover').siblings().removeClass('shorts-li-hover');
    });
    let listLength = $('.page-shorts-sub-list-all>li').length;
    shortSubPageList(listLength,10);//分页
}

function carveClick() {
    let listLength = $('.page-carve-bottom-list>li').length;
    carvePageList(listLength,3);//分页
}

function navSlide() {
    let navDown = 0;//navTop slideDown(1)/slideUp(0)
    let $navUser = $('.nav-user');
    let $navTopWrap = $('.nav-top-wrap');
    // navSearh(5, 0.5, 0);
    //user
    $navUser.mouseenter(function () {//login/logOff
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
            //旋转下拉图标
            $('.nav-down img').css({
                '-ms-transform': 'rotateZ(0deg)',
                '-moz-transform': 'rotateZ(0deg)',
                'transform': 'rotateZ(0deg)'
            });
            $('.nav-down').animate({'top': '2%'},500);
            $navTopWrap.slideUp();
            navSearh(0, 0, 500);//nav search width reduce
            navDown = 1;
        } else {
            $('.nav-down img').css({
                '-ms-transform': 'rotateZ(-180deg)',
                '-moz-transform': 'rotateZ(-180deg)',
                'transform': 'rotateZ(-180deg)'
            });
            $('.nav-down').animate({'top': '6.5%'},500);
            $navTopWrap.slideDown();
            navSearh(5, 0.5, 1000);//nav search width add
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
    let pageIndexLength = $('#page-box').children().length;//分页的长度
    if (pageIndexLength > 1) {//大于一个页的时候显示左右箭头
        $('.text-page-pre').show();
        $('.pageIndex').eq(0).addClass('clickTextPage');//分页数字的背景
    }
    if (pageIndexLength > 3) {//大于三页的时候隐藏超出的
        $(".pageIndex:gt(3)").hide();
    }
    $('.pageIndex').click(function () {//分页数字点击
        let thisIndex = $(this).index();//获取当前下标
        if ($('.clickTextPage').index() >= 2) {//点击的要大于2
            if (thisIndex > $('.clickTextPage').index()) {//判断点击与当前元素的位置
                if (thisIndex <= pageIndexLength - 2) {//点击范围
                    nextPage(thisIndex);//判断index让其余的隐藏/显示
                } else {
                }
            } else {
                if (pageIndexLength - thisIndex <= 13) {//点击范围
                    prePage(thisIndex);//判断index让其余的隐藏/显示
                } else {
                }
            }
        } else {
        }
        $(this).addClass('clickTextPage').siblings().removeClass('clickTextPage');
        return
    });
    $('.text-page-pre').click(function () {//上一页
        let clickTextIndex = $('.clickTextPage').index() - 1;//记录当前页面的下标
        if (clickTextIndex >= 2) {//判断是否第一张
            showPage('#article_' + (clickTextIndex - 1) + '', '.contentPageClass');
            $('.pageIndex').eq(clickTextIndex - 2).addClass('clickTextPage').siblings().removeClass('clickTextPage');
            let thisIndex = clickTextIndex - 1;
            if (clickTextIndex > 2) {//点击的要大于2
                prePage(thisIndex + 1);//上一页对应的数字显示隐藏
            } else {
            }
            return
        } else {
        }
    });
    $('.text-page-next').click(function () {//下一张
        let clickTextIndex = $('.clickTextPage').index();//记录当前页面的下标
        if (clickTextIndex <= pageIndexLength - 2) {//判断是否是最后一张
            showPage('#article_' + (clickTextIndex) + '', '.contentPageClass');
            let thisIndex = clickTextIndex - 1;
            $('.pageIndex').eq(thisIndex).addClass('clickTextPage').siblings().removeClass('clickTextPage');
            if (clickTextIndex > 3 && clickTextIndex < pageIndexLength - 1) {//点击的要大于2
                nextPage(thisIndex);//下一页对应的数字显示隐藏
            } else {
            }
            return
        }
        else {
        }
    });
    $('#text-page-input').keydown(function (e) {//键盘事件
        let downCode = e.keyCode;
        if (downCode === 13) {//回车
            let value = Number($(this).val());//获取输入框里的值
            inputClick(value, pageIndexLength);
        }
    });
    $('#text-page-btn').click(function () {//点击确定
        let value = Number($('#text-page-input').val());//获取输入框里的值
        inputClick(value, pageIndexLength);
    });
}

function nextPage(num) {
    let $PageIndex = $(".pageIndex");
    $(".pageIndex:lt(" + (num - 3) + ")").hide();
    $PageIndex.eq(num - 2).show();
    $PageIndex.eq(num - 1).show();
    $PageIndex.eq(num).show();
}

function prePage(num) {
    let $PageIndex = $(".pageIndex");
    $(".pageIndex:gt(" + (num) + ")").hide();
    $PageIndex.eq(num - 3).show();
    $PageIndex.eq(num - 2).show();
    $PageIndex.eq(num - 1).show();
}

function ourMap() {
    let map = new BMap.Map("map");//百度地图
    let point = new BMap.Point(118.67047, 43.540184);//中心点经纬
    map.centerAndZoom(point, 12);//初始化地图①设置地图的中心点，②缩放范围3-19
    map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放
    addMarker(point);

    function addMarker(point) {
        let iconSize = new BMap.Size(30, 35),//图标可视区域的大小
            iconPath = "../img/mapBiaoZhu.png";//图标路径
        let myIcon = new BMap.Icon(iconPath, iconSize, {
            anchor: new BMap.Size(10, 35),// 指定定位位置
        })
        let marker = new BMap.Marker(point, {icon: myIcon});//创建标注对象
        map.addOverlay(marker);//添加到地图
    }
}

function shortSubPageList(length, pageLength) {
    if (length > 10) {
        $('.short-page-list').show();
        $('.page-shorts-sub-list-all li:lt(0)').hide();
        $('.page-shorts-sub-list-all li:gt(9)').hide();
    } else {
        $('.short-page-list').hide();
    }
    $('.short-page-list').page({
        leng: Math.ceil(length / pageLength), //分页总数
        activeClass: 'activ-page-color', //active 类样式定义
        firstPage: '',
        lastPage: '',
        prv: '',
        next: '',
        clickBack: function(page) {//click回调
            $('.page-shorts-sub-list-all li').show();
            $('.page-shorts-sub-list-all li:lt('+ (page - 1) * 10 +')').hide();
            $('.page-shorts-sub-list-all li:gt('+ (page * 10 - 1) +')').hide();
        }
    });
}

function consultationPageList(length, pageLength) {
    if (length > 4) {
        $('.consultation-page-list').show();
        $('.page-consultation-list li:lt(0)').hide();
        $('.page-consultation-list li:gt(3)').hide();
    } else {
        $('.consultation-page-list').hide();
    }
    $('.consultation-page-list').page({
        leng: Math.ceil(length / pageLength), //分页总数
        activeClass: 'activ-page-color', //active 类样式定义
        firstPage: '',
        lastPage: '',
        prv: '',
        next: '',
        clickBack: function(page) {//click回调
            $('.page-consultation-list li').show();
            $('.page-consultation-list li:lt('+ (page - 1) * 4 +')').hide();
            $('.page-consultation-list li:gt('+ (page * 4 - 1) +')').hide();
        }
    });
}

function carvePageList(length, pageLength) {
    if (length > 3) {
        $('.carve-page-list').show();
        $('.page-carve-bottom-list li:lt(0)').hide();
        $('.page-carve-bottom-list li:gt(2)').hide();
    } else {
        $('.carve-page-list').hide();
    }
    //重新设定总的leng
    $('.carve-page-list').page({
        leng: Math.ceil(length / pageLength), //分页总数
        activeClass: 'activ-page-color', //active 类样式定义
        firstPage: '',
        lastPage: '',
        prv: '',
        next: '',
        clickBack: function(page) {//click回调
            $('.page-carve-bottom-list li').show();
            $('.page-carve-bottom-list li:lt('+ (page - 1) * 3 +')').hide();
            $('.page-carve-bottom-list li:gt('+ (page * 3 - 1) +')').hide();
        }
    });
}

function nsPageList(length, pageLength) {
    if (length > 4) {
        $('.ns-sub-page-list').show();
        $('.page-ns-sub-list li:lt(0)').hide();
        $('.page-ns-sub-list li:gt(3)').hide();
    } else {
        $('.ns-sub-page-list').hide();
    }
    $('.ns-sub-page-list').page({
        leng: Math.ceil(length / pageLength), //分页总数
        activeClass: 'activ-page-color', //active 类样式定义
        firstPage: '',
        lastPage: '',
        prv: '',
        next: '',
        clickBack: function(page) {//click回调
            $('.page-ns-sub-list li').show();
            $('.page-ns-sub-list li:lt('+ (page - 1) * 4 +')').hide();
            $('.page-ns-sub-list li:gt('+ (page * 4 - 1) +')').hide();
        }
    });
}
/**
 * value 输入框里的直
 * pageIndexLength 总长度
 */
function inputClick(value, pageIndexLength) {
    if (value <= pageIndexLength - 2) {//判断是否超出规定页数
        if (value <= 1) {//等于第一页
            let $PageIndex = $(".pageIndex");
            showPage('#article_' + (1) + '', '.contentPageClass');//显示对应的页面
            $PageIndex.eq(0).addClass('clickTextPage').siblings().removeClass('clickTextPage');
            $PageIndex.eq(0).show();
            $(".pageIndex:gt(" + (value + 3) + ")").hide();
            $(".pageIndex:lt(" + (value + 3) + ")").show();
        } else {
            let $PageIndex = $(".pageIndex");
            showPage('#article_' + (value + 1) + '', '.contentPageClass');
            $PageIndex.eq(value - 1).addClass('clickTextPage').siblings().removeClass('clickTextPage');
            $(".pageIndex:lt(" + (value - 2) + ")").hide();
            $(".pageIndex:gt(" + (value + 1) + ")").hide();
            $PageIndex.eq(value - 2).show();
            $PageIndex.eq(value - 1).show();
            $PageIndex.eq(value).show();
            $PageIndex.eq(value + 1).show();
        }
    } else {
        showPage('#article_' + (pageIndexLength - 2) + '', '.contentPageClass');
        $(".pageIndex:lt(" + (pageIndexLength - 7) + ")").hide();
        $(".pageIndex:gt(" + (pageIndexLength - 7) + ")").show();
        $('.pageIndex').eq(pageIndexLength - 3).addClass('clickTextPage').siblings().removeClass('clickTextPage');
    }
}

var showPage = function (id, findClass) {
    $(findClass).each(function () {
        $(this).css('display', 'none');
    });
    //显示当前项
    $(id).css('display', 'block');
};
