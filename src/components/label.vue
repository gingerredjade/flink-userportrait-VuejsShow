<template>
  <div style="padding:20px;" id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">用户标签</div>
      <table class="table table-bordered table-striped text-center">
        <thead>
        <tr>
          <th>序号</th>
          <th>标签</th>
          <th>信息</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for ="(lable,index) in lables">
          <td>{{index+1}}</td>
          <td>{{lable.typename}}</td>
          <td>{{lable.lablevalue}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        lables: [
          {'typename': '李磊', 'lablevalue': '25'},
          {'typename': '李磊', 'lablevalue': '25'}
        ]
      }
    },
    created() {
      //新增用户
      this.$http.post('http://127.0.0.1:8764/hbaseData/resultinfoView',{
        "type": "-1",
        "userid":"1"
      }).then((response) => {
        this.lables = response.body.list;
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
  tr,th{
    text-align:center;
  }
</style>
