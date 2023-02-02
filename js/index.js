// 监控区域
(function() {
    /* 
        实现无缝滚动：复制原来的一组数据，向上滚动自己的一半
        再从头开始滚动 css动画实现
    */

    // 复制数据
    $('.content ul li').each(function(i, ele) {
        console.log(ele);
        $(ele).clone().appendTo($('.content ul'))

    })

    // 实现tab栏切换
    $('.monitor .tab').on("click", "span", function() {
        $(this).addClass('active').siblings().removeClass('active');

        if ($(this).index() === 0) {
            $('.head2').hide();
            $('.head1').show();
        } else {
            $('.head1').hide();
            $('.head2').show();
        }
    })
})();

// 点位区域

(function() {
    var mychart = echarts.init(document.querySelector(".points .acharts"));

    var option = {

        // 饼图的颜色
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],

        // 提示框组件
        tooltip: {
            // 面积区域触发显示
            trigger: 'item',
            // 显示内容的字符串函数，具体看文档
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        // 工具栏组件，在右上角
        toolbox: {
            show: true,
            feature: {


                // restore: { show: true },

            }
        },

        // 数据部分
        series: [{
            // 引导线的长度，
            // length第一段长度
            // length2第二段长度
            labelLine: {
                length: 7,
                length2: 7
            },
            name: '全国分布',
            type: 'pie',
            // 控制饼状图的大小
            // 第一个参数内圈半径
            // 第二个参数外圈半径（决定了整个圆的大小）
            radius: ["10%", "70%"],
            // 饼图的摆放位置，水平垂直居中
            center: ['50%', '50%'],

            // 饼图个部分数据按什么显示，按半径区分占比的大小
            roseType: 'radius',
            itemStyle: {
                borderRadius: 8
            },

            data: [
                { value: 40, name: '湖南' },
                { value: 38, name: '永州' },
                { value: 32, name: '长沙' },
                { value: 30, name: '北京' },
                { value: 28, name: '湖北' },
                { value: 26, name: '河南' },
                { value: 22, name: '江西' },
                { value: 18, name: '江南' }
            ]
        }]
    };

    mychart.setOption(option);

    // 实现charts图的自适应

    $(window).on("resize", function() {
        mychart.resize();
    })
})();


// 人数统计部分

(function() {

    // 数据的值可以是应该对象，单独定则一个柱子的样式
    var item = {

        value: 1200,

        // 柱子的颜色
        itemStyle: {
            // fontSize: 20,
            color: '#254065'
        },
        // 柱子摸上去的颜色
        emphasis: {
            itemStyle: {
                // fontSize: 20,
                color: '#254065',

            },

        },

        // 是否存在提示框，设置提示框的完全透明
        tooltip: {
            extraCssText: "opacity:0",

        }
    }

    var mychart = echarts.init(document.querySelector(".user .chart"));

    var option = {

        // 提示框触发方式，面积区域触发
        tooltip: {
            trigger: 'item',

        },
        // 柱子的渐变颜色
        color: [{
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
                offset: 0,
                color: '#00fffb' // 0% 处的颜色
            }, {
                offset: 1,
                color: '#0061ce' // 100% 处的颜色
            }],
            global: false // 缺省为 false
        }],
        // 控制柱形图的大小
        grid: {
            top: '3%',
            right: '3%',
            left: '0%',
            bottom: '15%',
            show: true,
            // 设置边框颜色
            borderColor: 'rgba(0, 240, 255, 0.3)',
            // 当图大小溢出容器时是否包含轴的刻度属性
            containLabel: true,

        },
        // x轴的属性
        xAxis: {
            // 显示不全解决

            // x轴上的样式
            axisLabel: {
                // 指示器（就是坐标轴的标题，柱子对应的标题）的颜色和大小
                color: '#4c9bfd',
                fontSize: 9,
                // 解决x轴的指示器显示不全的问题
                interval: 0,
            },
            // 轴刻度样式
            axisTick: {
                // true意思：图形和刻度居中中间
                // false意思：图形在刻度之间
                alignWithLabel: false,
                // 不显示刻度
                show: false
            },

            // 柱状图的类型属性
            type: 'category',
            data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],


        },
        // y轴
        yAxis: {

            axisTick: {
                // 不显示刻度
                show: false
            },
            // y坐标轴文字标签样式设置
            axisLabel: {
                color: '#4c9bfd'
            },
            // y坐标轴颜色设置
            axisLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)',
                    // width:8,  x轴线的粗细
                    // opcity: 0,   如果不想显示x轴线 则改为 0
                }
            },
            // y轴 分割线的样式 
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 240, 255, 0.3)'
                }
            },
            type: 'value',

        },
        series: [{
            data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240],
            type: 'bar',
            barWidth: "60%",
        }]
    };

    mychart.setOption(option);

    // 实现charts图的自适应

    $(window).on("resize", function() {
        mychart.resize();
    })
})();

// 实现tab栏切换订单的变化
(function() {
    $(".right .order .time").on("click", "li", function() {

        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        $(".right .order .tab-time .content").eq(index).addClass("current").siblings().removeClass("current");
        num = index;
    })

    var num = 0;
    var timer = setInterval(function() {
        if (num == 4) {
            num = 0;
        }
        $(".right .order .time li").eq(num).addClass("active").siblings().removeClass("active");
        $(".right .order .tab-time .content").eq(num).addClass("current").siblings().removeClass("current");
        num++;
    }, 2000)

    $(".right .order .tab-time").on("mouseover", function() {
        clearInterval(timer);
    })

    $(".right .order .tab-time").on("mouseout", function() {
        timer = setInterval(function() {
            if (num == 4) {
                num = 0;
            }
            $(".right .order .time li").eq(num).addClass("active").siblings().removeClass("active");
            $(".right .order .tab-time .content").eq(num).addClass("current").siblings().removeClass("current");
            num++;
        }, 2000)
    })
})();

// 实现订单的图表（折线图）部分
(function() {
    var mychart = echarts.init(document.querySelector(".right .sale .inner .chart"));

    var option = {

        // 两天折线图的颜色
        color: ['#00f2f1', '#ed3f35'],
        // 提示框触发方式，坐标轴线触发
        tooltip: {
            trigger: 'axis'
        },
        // 折线的提示标签
        legend: {
            textStyle: {
                color: 'skyblue',
            },
            right: "1%",
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        // 图的大小控制
        grid: {
            top: "12%",
            left: '3%',
            right: '4%',
            bottom: '1%',
            containLabel: true
        },

        xAxis: {
            axisLabel: {
                color: "skyblue",
                // 解决x轴显示不全指示器
                interval: 0,
            },
            // 不显示刻度
            axisTick: {
                show: false,
            },

            // 不显示x轴那根线
            axisLine: {
                show: false,
            },
            type: 'category',
            // 指示器与原点是否有留白
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
        yAxis: {
            // y轴上指示器的颜色
            axisLabel: {
                color: "skyblue",
            },
            // 不显示y轴刻度
            axisTick: {
                show: false,
            },

            // 不显示y轴那根线
            axisLine: {
                show: false,
            },

            // y轴网格线的样式
            splitLine: {
                lineStyle: {
                    color: '#012f4a',
                }
            },
            type: 'value'
        },
        series: [


            {
                // 是否为圆润的折线
                smooth: true,
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            },
            {
                smooth: true,
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            }
        ]
    };

    // 实现自适应的图表
    mychart.setOption(option);

    $(window).on("resize", function() {
        mychart.resize();
    })

    // 实现tab栏切换图表的数据
    var dataAll = [{
            data1: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            data2: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        },
        {
            data1: [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            data2: [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        },
        {
            data1: [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            data2: [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        },
        {
            data1: [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            data2: [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        }
    ]

    $(".sale .header .h-season").on("click", "li", function() {
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();
        option.series[0].data = dataAll[index].data1;
        option.series[1].data = dataAll[index].data2;
        mychart.setOption(option);
        num = index;
    })

    var num = 0;
    var timer = setInterval(function() {
        if (num == 4) {
            num = 0;
        }
        $(".sale .header .h-season li").eq(num).addClass("active").siblings().removeClass("active");
        option.series[0].data = dataAll[num].data1;
        option.series[1].data = dataAll[num].data2;
        mychart.setOption(option);
        num++;
    }, 2000)

    $(".sale .inner").on("mouseover", function() {
        clearInterval(timer);
    })

    $(".sale .inner").on("mouseout", function() {
        timer = setInterval(function() {
            if (num == 4) {
                num = 0;
            }
            $(".sale .header .h-season li").eq(num).addClass("active").siblings().removeClass("active");
            option.series[0].data = dataAll[num].data1;
            option.series[1].data = dataAll[num].data2;
            mychart.setOption(option);
            num++;
        }, 2000)
    })

})();


// 渠道雷达图部分

(function() {

    var mychart = echarts.init(document.querySelector(".saleroad .road .chart"));
    // $(".saleroad .road .chart")

    const dataGZ = [
        [90, 19, 56, 11, 34]

    ];

    const lineStyle = {
        width: 1,
        opacity: 0.5
    };
    var option = {

        tooltip: {
            show: true,
            // 提示框的位置
            position: ['60%', '10%'],
        },
        radar: {
            // 指示器到圆形边界的距离
            nameGap: 9,
            // 设置大小
            radius: '60%',
            indicator: [
                { name: '机场', max: 100 },
                { name: '商场', max: 100 },
                { name: '火车站', max: 100 },
                { name: '汽车站', max: 100 },
                { name: '地铁', max: 100 }
            ],
            shape: 'circle',
            // 几个圈圈
            splitNumber: 4,
            // 设置指示器的样式
            name: {
                textStyle: {
                    color: '#4c9bfd',
                    fontSize: 9
                }
            },
            // 分割线（圆圈）样式
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(255, 255, 255, .5)',
                    ].reverse()
                }
            },
            splitArea: {
                show: false,

            },
            // 穿插在雷达图经过原点的直线样式
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, .5)'
                }
            }
        },
        series: [

            {

                name: 'Guangzhou',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataGZ,
                // 设置拐点样式 原点
                symbol: 'circle',
                // 设置拐点大小
                symbolSize: 7,
                // 设置拐点颜色
                itemStyle: {
                    color: '#fff'
                },
                // 设置拐点所围成区域的样式
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)'
                },
                label: {
                    show: true,
                    fontSize: 7,
                }
            }
        ]
    };

    mychart.setOption(option);

    $(window).on("resize", function() {
        mychart.resize();
    })
})();


//  半圆弧的销售统计区域

(function() {
    var mychart = echarts.init(document.querySelector(".season .inner .chart"));

    var option = {


        series: [{
            name: 'Access From',
            type: 'pie',
            radius: ['70%', '90%'],
            center: ['50%', '55%'],
            // avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            // 旋转饼图
            // 起始角度，支持范围[0, 360]
            startAngle: 180,

            labelLine: {
                show: false
            },
            // 鼠标经过不变大
            hoverOffset: 0,
            data: [{
                    value: 100,
                    // 第一段圆弧的样式
                    itemStyle: {
                        // 颜色渐变#00c9e0->#005fc1
                        color: new echarts.graphic.LinearGradient(
                            // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                            0,
                            0,
                            0,
                            1, [
                                { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                                { offset: 1, color: "#005fc1" } // 1 结束颜色
                            ]
                        )
                    },
                },
                {
                    value: 100,
                    // 第二段圆弧的样式
                    itemStyle: {
                        color: '#12274d',
                    }
                },
                {
                    value: 200,
                    // 第三段圆弧的样式，设置为透明，实现半圆效果
                    itemStyle: {
                        color: 'transparent'
                    }
                },
            ]
        }]
    };

    mychart.setOption(option);

    $(window).on("resize", function() {
        mychart.resize();
    })
})();


// 排行版部分，都是之前的知识

(function() {
    var hotData = [{
            city: '北京', // 城市
            sales: '25, 179', // 销售额
            flag: true, //  上升还是下降
            brands: [ //  品牌种类数据
                { name: '可爱多', num: '9,086', flag: true },
                { name: '娃哈哈', num: '8,341', flag: true },
                { name: '喜之郎', num: '7,407', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '6,724', flag: false },
                { name: '好多鱼', num: '2,170', flag: true },
            ]
        },
        {
            city: '河北',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '3,457', flag: false },
                { name: '娃哈哈', num: '2,124', flag: true },
                { name: '喜之郎', num: '8,907', flag: false },
                { name: '八喜', num: '6,080', flag: true },
                { name: '小洋人', num: '1,724', flag: false },
                { name: '好多鱼', num: '1,170', flag: false },
            ]
        },
        {
            city: '上海',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '2,345', flag: true },
                { name: '娃哈哈', num: '7,109', flag: true },
                { name: '喜之郎', num: '3,701', flag: false },
                { name: '八喜', num: '6,080', flag: false },
                { name: '小洋人', num: '2,724', flag: false },
                { name: '好多鱼', num: '2,998', flag: true },
            ]
        },
        {
            city: '江苏',
            sales: '23,252',
            flag: false,
            brands: [
                { name: '可爱多', num: '2,156', flag: false },
                { name: '娃哈哈', num: '2,456', flag: true },
                { name: '喜之郎', num: '9,737', flag: true },
                { name: '八喜', num: '2,080', flag: true },
                { name: '小洋人', num: '8,724', flag: true },
                { name: '好多鱼', num: '1,770', flag: false },
            ]
        },
        {
            city: '山东',
            sales: '20,760',
            flag: true,
            brands: [
                { name: '可爱多', num: '9,567', flag: true },
                { name: '娃哈哈', num: '2,345', flag: false },
                { name: '喜之郎', num: '9,037', flag: false },
                { name: '八喜', num: '1,080', flag: true },
                { name: '小洋人', num: '4,724', flag: false },
                { name: '好多鱼', num: '9,999', flag: true },
            ]
        }
    ];

    var hotStr = '';
    var p2Str = '';
    var index = 0;
    var item = null;
    $(".province ul").html("");
    $(".province2").html("");
    $.each(hotData, function(i, ele) {
        if (ele.flag) {
            hotStr += `<li><span>${ele.city}</span><span>${ele.sales}<span class="icon-arrow-up2" style="color:greenyellow"></span></span></li>`
        } else {
            hotStr += `<li><span>${ele.city}</span><span>${ele.sales}<span class="icon-arrow-down2" style="color:red"></span></span></li>`

        }

        p2Str += `<ul index="${i}">`;
        // console.log(ele.brands.length);
        for (index = 0; index < 6; index++) {
            item = ele.brands[index];
            // console.log(index);
            // console.log(item);
            if (item.flag) {
                p2Str += `<li><span>${item.name}</span><span>${item.num}<span class="icon-arrow-up2" style="color:greenyellow"></span></span></li>`
                continue;
            }

            p2Str += `<li><span>${item.name}</span><span>${item.num}<span class="icon-arrow-down2" style="color:red"></span></span></li>`


        }

        p2Str += `</ul>`;
        // console.log(p2Str);

    })
    $(".province ul").html(hotStr);
    $(".province2").html(p2Str);

    $(".province2 ul").eq(0).show().siblings().hide();


    var index2 = 0;
    $(".province ul").on("mouseover", "li", function() {
        $(this).addClass("active").siblings().removeClass("active");
        var num = $(this).index();
        $(".province2 ul").eq(num).show().siblings().hide();
        index2 = num;
    })

    var timer = setInterval(function() {
        if (index2 == 5) {
            index2 = 0;
        }
        $(".province ul li").eq(index2).addClass("active").siblings().removeClass("active");
        $(".province2 ul").eq(index2).show().siblings().hide();
        index2++;
    }, 2000)

    $(".rank .infos").hover(function() {
        clearInterval(timer);
        timer = null;
    }, function() {
        timer = setInterval(function() {
            if (index2 == 5) {
                index2 = 0;
            }
            $(".province ul li").eq(index2).addClass("active").siblings().removeClass("active");
            $(".province2 ul").eq(index2).show().siblings().hide();
            index2++;
        }, 2000)
    })


})();