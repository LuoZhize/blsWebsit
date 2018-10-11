let heightWin = $(window).height();
let navDown = 0;//navTop slideDown(1)/slideUp(0)
let ifQUestOrPass = false;
let $navUser                =       $('.nav-user'),
    $navTopWrap             =       $('.nav-top-wrap'),
    $footerZhe              =       $('.footer-zhe'),
    $footerContent          =       $('.footer-content');

$('img').on('mousedown',function (e) {//禁止图片拖动
    e.preventDefault()
});

//user
$navUser.mouseenter(function () {//login/logOff
    $(this).children('.nav-user-menu').show();
}).mouseleave(function () {
    $(this).children('.nav-user-menu').hide();

});

$('.nav-user-menu').mouseenter(function () {//login show
    $(this).children('.nav-user-menu').show();
});

//login
let $pageLogin              =       $('.page-login'),
    $pageLoginNav           =       $('.page-login-nav'),
    $pageRegisterNav        =       $('.page-register-nav'),
    $pageLoginForm          =       $('.page-login-form'),
    $pageRegisterForm       =       $('.page-register-form'),
    $pageLoginClose         =       $('.page-login-close'),
    $pageReturnLogin        =       $('.page-return-login'),
    $pageLoginGetText       =       $('.page-login-getTest');

$('.nav-login').click(function () {//show login dialog
    $('.page-login-zhe').show();
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
    $('.page-login-zhe').hide();
    $pageLogin.hide();
});

//bottom nav
$('body').mousemove(function (e) {
    if (e.clientY >= heightWin / 1.02) {//move （y == bottom） bottom nav show
        $footerZhe.slideDown(600);
        $footerContent.slideDown(600);
    } else if (e.clientY < heightWin / 1.25) {
        $footerZhe.slideUp(400);
        $footerContent.slideUp(400);
    }
});

//search

$('.nav-top-input-search').attr("value"," 搜索").click(function () {//val.match(/^|咨|询/g) => ['',"咨"]
    $('.nav-top-input-search').attr("value"," ");
    setCaretPosition(this, 2);
});

$('#searchBtn').click(function () {
    let val = $('.nav-top-input-search').val();

    if (val.match(/^|咨|询/g).length > 1) {
        window.location.href = "../page/search-per.html?search='" + val + "'";
    }
    else if (val.match(/^|鸡血|福黄|图案|彩石|冻石|石头/g).length > 1) {
        window.location.href = "../page/search-stone.html?search='" + val + "'";
    }
    else if (val.match(/^|国石|历史|文化/g).length > 1) {
        window.location.href = "../page/search-per.html?search='" + val + "'";
    }
    else if (val.match(/^|雕刻|名家|收藏|先生|小姐|女士/g).length > 1) {
        window.location.href = "../page/search-per.html?search='" + val + "'";
    }
    else {
        console.log("不存在");
    }
});

function navStyle(select,index,style) {
    select.click(function () {//点击、移入、移出
        $('.search-stone-nav>li a').removeClass('search-init');
        getShortSubBorSty(this,style);
        index = $(this).index();
        select.eq((index)).siblings().children('a').css({
            'color': '#ffffff',
            'border-bottom': '0.1rem solid transparent'
        });
    }).mouseleave(function () {
        $(this).children('a').css({
            'color': '#ffffff',
            'border-bottom': '0.1rem solid transparent'
        });
        select.eq((index)).children('a').css({
            'color': '#E2BA60',
            'border-bottom': style
        });
    }).mouseenter(function () {
        getShortSubBorSty(this,style);
    });
}

function getShortSubBorSty(self,style) {//shortSub nav style
    $(self).children('a').css({
        'color': '#E2BA60',
        'border-bottom': style
    });
}

function shortDialog(select, zhe, dia) {
    select.click(function () {//奇石鉴赏子页面点击出现弹窗
        zhe.show();
        dia.show();
    });

    $('.page-shorts-sub-dialog-close').click(function () {//关闭弹窗
        zhe.hide();
        dia.hide();
    });

    $('.three-d').click(function () {//3d效果

    });
}

// 设置光标位置
function setCaretPosition(ctrl, pos){
    if(ctrl.setSelectionRange){
        ctrl.focus();
        ctrl.setSelectionRange(pos,pos);
    } else if (ctrl.createTextRange) {
        let range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}