<template>
  <div>
    <x-chart id="high" class="high" :option="option"></x-chart>
  </div>
</template>

<script>
  // 导入chart组件
  var myvue = {};
  import XChart from './charts'
  export default {
    data() {
      return {
        option:{
          chart: {
            type: 'column'
          },
          title: {
            text: '月平均降雨量'
          },
          subtitle: {
            text: '数据来源: WorldClimate.com'
          },
          xAxis: {
            categories: [
              '一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'
            ],
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: '降雨量 (mm)'
            }
          },
          series: [{
            name: '东京',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5,500, 194.1, 95.6, 54.4]
          }]
        },
      }
    },
    beforeCreate:function(){
      myvue = this;
    },
    created() {
      this.$http.post('http://127.0.0.1:8764/mongoData/resultinfoView',{
        "type": "chaoManAndWomen"
      }).then((response) => {
        this.option = {
          chart: {
            type: 'column'
          },
          title: {
            text: '潮男潮女分布'
          },
          xAxis: {
            categories: response.body.infolist,
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: '数量'
            }
          },
          series: [{
            name: '潮男潮女',
            data: response.body.countlist
          }]
        };
      });
    },
    components: {
      XChart
    }
  }
</script>

<style scoped>

</style>
