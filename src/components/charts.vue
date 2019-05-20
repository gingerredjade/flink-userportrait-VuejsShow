<!--
template定义了一个自定义的组件.':id'表示值是父组件传递过来的
option传递过来之后，直接走到watch里的option()方法绘制图表。
 -->
<template>
  <div class="x-bar">
    <div :id="id"  :option="option"></div>
  </div>
</template>
<script>
  // 定义charts组件，引入安装好的highcharts组件
  import HighCharts from 'highcharts'
  export default {
    // 验证类型
    props: {
      id: {
        type: String
      },
      option: {
        type: Object
      }
    },
    watch: {
      option () {
        HighCharts.chart(this.id,this.option);
      }
    },
    mounted() {
      HighCharts.chart(this.id,this.option)
    }
  }
</script>
