import * as echarts from 'echarts';

export function getAreaChartConfig({ data, startDate, endDate, themeConfig }) {
  console.log(themeConfig); 
  const option = {
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%'];
      }
    }, 
    title: {
      show: false
    },
    toolbox: {
      show: false
    },
    xAxis: {
      type: 'time',
      boundaryGap: false,
      axisLabel: {
        color: themeConfig.palette.secondary.main
      }
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%'],
      min: 'dataMin',
      max: 'dataMax',
      axisLabel: {
        color: themeConfig.palette.secondary.main,
        formatter: (value) => {
          return  parseFloat(value).toFixed(2);
        }
      }
    },
    grid: {
      top: '10',  
    },
    dataZoom: [
      {
        type: 'inside',
        startValue: startDate,
        endValue: endDate 
      },
      {
        startValue: startDate,
        endValue: endDate
      }
    ],
    series: [
      {
        name: '单位净值',
        type: 'line',
        smooth: true,
        symbol: 'none',
        sampling: 'average',
        itemStyle: {
          color: themeConfig.palette.primary.main
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: themeConfig.palette.primary.main
          }, {
            offset: 1,
            color: themeConfig.palette.primary.light
          }])
        },
        data: data
      }
    ]
  };

  return option; 
}