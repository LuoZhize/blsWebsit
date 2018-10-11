$(document).ready(function () {
    $('.page-in-station-horse').animate({left: '4rem'},2500,'linear',function () {
        $('.page-in-station-horse').animate({left: '10rem'},500,'linear',function () {
            $('body').append('<audio src="../blsWebsit/img/horse-call.mp3" autoplay=autoplay></audio>');//音效
            $('.page-in-station-horse').css({'transform': 'rotateZ(0deg)','transition-duration': '2s'});
            $('.horse-shadow').show(0);
            $('.horse-shadow').css({'transform': 'rotateZ(0deg)','transition-duration': '2s'});
        });
    });
    setTimeout(function () {
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
                                        getCircular()
                                    });
                                    endAnimate = setTimeout(function () {//等待十秒
                                        getCircular()
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
    },1000);
    function getCircular() {
        $('.page-in-over-circular').animate({
            width: '120%',
            height: 50.5 + 'rem'
        }, 500, 'linear', function () {//圆的扩散
            window.location.href = "page/home.html";
        });
    }
});