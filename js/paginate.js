/**
 * 分页
 */

var defaultConfig = {
    'pageSize': 500,
    'container': '#page-consultation-content'
};

function paginate(config, callback = null) {

    // 容器内文章内容
    var content = $(config.container).text();

    // console.log(content);

    // 总页数
    var pages = Math.ceil(content.length / config.pageSize);

    // 下标
    var b = 0;

    var contents = [];

    for(var i=1; i<=pages; i++) {
        // 开始位置
        var start = b;

        // 结束位置
        if(i == pages) {
            var end = content.length - 1;
        } else {
            var end = b + config.pageSize - 1;
        }

        // html 插入
        //contentPageClass
        contents[i] = '';
        for(var j=start; j<=end; j++) {
            contents[i] += content[j];
        }

        // 拼接
        if(i == 1) {
            contents[i] = '<div class="contentPageClass">' + contents[i] + '</div>';
        } else {
            contents[i] = '<div class="contentPageClass" style="display: none">' + contents[i] + '</div>';
        }

        // 下标
        b = end + 1;

        // TODO: 真实结束位置
    }

    var text = '';
    contents.forEach(function(item) {
        text += item;
    });

    $(config.container).html(text);

    var t = 1;

    var box = '';

    box += '<a class="pull-left text-page-pre">&laquo;</a>';

    box += '<a class=" clickTextPage">1</a>';

    // 判断后一页
    if((t+1) <= pages) {
        box += '<a class="">' + (t + 1) + '</a>';
    }

    // 判断后两页
    if((t+2) <= pages) {
        box += '<a class="">' + (t + 2) + '</a>';
    }

    box += '<a class="pull-right text-page-next">&raquo;</a>';

    $('#page-box').html(box);

    $('#page-box').on('click', function() {
        var box = '';

        var thisPage = $('#page-box > a.clickTextPage');

        if(thisPage) {
            var index = $(thisPage).index();
            t = t + 1;
        } else {
            var index = t - 1;
        }

        // 判断指定页数是否超过最大值
        if(t > pages) {
            t = pages;
        }

        box += '<a class="pull-left text-page-pre">&laquo;</a>';

        // 判断前两页
        if((t - 2) > 0) {
            box += '<a class="">' + (t - 2) + '</a>';
        }

        // 判断前一页
        if((t-1) > 0) {
            box += '<a class="">' + (t - 1) + '</a>';
        }

        // 当前页
        box += '<a class="clickTextPage">' + t + '</a>';

        // 判断后一页
        if((t+1) <= pages) {
            box += '<a class="">' + (t + 1) + '</a>';
        }

        // 判断后两页
        if((t+2) <= pages) {
            box += '<a class="">' + (t + 2) + '</a>';
        }

        box += '<a class="pull-right text-page-next">&raquo;</a>';

        $(this).html(box);
    });
}

paginate(defaultConfig);