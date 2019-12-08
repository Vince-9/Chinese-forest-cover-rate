(() => {
    window.mainApp = new Vue({
        el: '#container',
        data: {
            startFlag: false,
            goToLeftTop: false,
            showMapContent: false
        },
        methods: {
            handleStartBtnOnClick(e) {
                this.startFlag = true;
                setTimeout(() => {
                    this.goToLeftTop = true;
                }, 2500);
                setTimeout(() => {
                    this.showMapContent = true;
                }, 4500);
            }
        }
    })
})()

window.onload = function () {
    setMap();
    setChart();
}

function setChart() {
    let chart = document.querySelector("#chart");
    let myChart = echarts.init(chart);
    let app = {};
    chartOption = null;
    chartOption = {
        title: {
            text: '中国森林覆盖率前十的省份',
            subtext: '',
            x: 'center'
        },
        xAxis: {
            type: 'category',
            data: ['福建', '浙江', '广西', '海南', '江西', '广东', '湖南', '重庆', '云南', '贵州']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [68, 59, 55, 52, 52, 50, 48, 45, 45, 41],
            type: 'bar'
        }]
    };
    ;
    if (chartOption && typeof chartOption === "object") {
        myChart.setOption(chartOption, true);
    }
}

function setMap() {
    let myChart = echarts.init(document.querySelector('#map'));
    var option = {
        title: {//设置地图标题
            text: '中国各省森林覆盖率',//地图图名
            left: 'center',//地图在横向上的位置
            top: '20',//地图距其DIV上边界的距离
            textStyle: {//图名字号大小
                fontSize: 30,
            },
        },
        // <!-- backgroundColor: 'lightblue',//Echarts图背景颜色 -->
        tooltip: {//地图悬浮框显示内容
            formatter: '{b}',
        },
        visualMap: {
            type: 'piecewise', //分段型 
            splitNumber: 8,//颜色分割数量
            align: "left",//
            pieces: [ //将不同值的地图区域赋予颜色
                {
                    min: 0,
                    max: 5,//以值的范围选择，也可用特定值来筛选，此时用value:表示 
                    label: '35.13%',//图例的标签名称
                    color: 'rgb(200, 255, 200)'//选中区域的颜色
                },
                {
                    min: 5,
                    max: 10,//以值的范围选择，也可用特定值来筛选，此时用value:表示 
                    label: '35.13%',//图例的标签名称
                    color: 'rgb(180, 235, 180)'//选中区域的颜色
                },
                {
                    min: 10,
                    max: 20,//以值的范围选择，也可用特定值来筛选，此时用value:表示 
                    label: '35.13%',//图例的标签名称
                    color: 'rgb(130,240,130)'//选中区域的颜色
                },
                {
                    min: 20,
                    max: 30,
                    label: '31.39%',
                    color: 'rgb(115,240,115)'
                },
                {
                    min: 30,
                    max: 40,
                    label: '12.41%',
                    color: 'rgb(80,215,85)'
                },
                {
                    min: 40,
                    max: 50,
                    label: '9.70%',
                    color: 'rgb(50,200,50)'
                },
                {
                    min: 50,
                    max: 60,
                    label: '9.42%',
                    color: 'rgb(30,180,30)'
                },
                {
                    min: 60,
                    max: 70,
                    label: '1.95%',
                    color: 'rgb(15,140,15)'
                }],
            left: '89%',
            top: '370px',
            text: ['图例', ''],//地图图例名称
            textStyle: {//图例字号大小及颜色
                color: '#000',
                fontSize: 12
            },
        },
        series: [{
            type: 'map',
            mapType: 'china',
            label: {
                normal: {
                    show: true,//显示省份标签
                    textStyle: { color: "#c71585" }//省份标签字体颜色
                },
                emphasis: {//对应的鼠标悬浮效果
                    show: true,
                    textStyle: { color: "#800080" }
                }
            },
            data: [
                { name: '福建', value: 68, },
                { name: '广东', value: 50 },
                { name: '北京', value: 17 },
                { name: '重庆', value: 45 },
                { name: '广西', value: 55 },
                { name: '江苏', value: 2 },
                { name: '新疆', value: 1 },
                { name: '内蒙古', value: 8 },
                { name: '浙江', value: 59 },
                { name: '西藏', value: 3 },
                { name: '云南', value: 45 },
                { name: '河北', value: 7 },
                { name: '黑龙江', value: 39 },
                { name: '吉林', value: 33 },
                { name: '辽宁', value: 13 },
                { name: '山西', value: 14 },
                { name: '陕西', value: 33 },
                { name: '河南', value: 11 },
                { name: '山东', value: 1 },
                { name: '甘肃', value: 5 },
                { name: '青海', value: 1 },
                { name: '安徽', value: 23 },
                { name: '贵州', value: 41 },
                { name: '宁夏', value: 1 },
                { name: '上海', value: 1 },
                { name: '湖北', value: 38 },
                { name: '湖南', value: 48 },
                { name: '四川', value: 32 },
                { name: '江西', value: 52 },
                { name: '海南', value: 52 },
                { name: '天津', value: 1 },
                { name: '台湾', value: 25 },
            ]
        }],
    };
    myChart.setOption(option);
}

