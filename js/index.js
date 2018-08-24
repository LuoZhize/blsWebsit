$(document).ready(function () {
    let carouselNum = 0;
    let carouselLength = $('.page-list').children('li').length - 1;
    mouseScroll(carouselNum, carouselLength);
});

function mouseScroll(Num, Length) {//横屏滚动
    let recordScroll = 0;//记录滚动的次数
    let startTime = 0;//记录开始的时间
    let endTime = 0;//记录结束的时间
    $('.page-list').bind('mousewheel', function (e, delta) {
        recordScroll++;
        if (endTime - startTime >= 3600) {//判断是否快速滚动 规定一秒只能滚动一次
            if (delta == -1) {
                if (Num < Length) {
                    Num++;
                    $('.page-list').animate({'left': -100 * Num + "%"}, 1500, 'swing', function () {

                    });
                } else {
                }
            } else {
                if (Num > 0) {
                    Num--;
                    $('.page-list').animate({'left': -100 * Num + "%"}, 1500, 'swing', function () {

                    });
                } else {
                }
            }
        }
    })
}