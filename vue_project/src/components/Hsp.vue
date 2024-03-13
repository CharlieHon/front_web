<!--模板：表示页面视图-->
<!--模板：表示页面视图html-->
<template>
  <div>
    <h1>{{ msg }}</h1>
    <!--引入/使用ElementUI组件-->
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <!--InputNumber计数器-->
    <el-input-number v-model="num" style="width: 200px" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    <table>
      <tr>
        <th colspan="3">第1行第1列</th>
      </tr>
      <tr>
        <td rowspan="2">第2行第1列</td>
        <td>第2行第2列</td>
        <td>第2行第3列</td>
      </tr>
      <tr>
        <td>第3行第2列</td>
        <td>第3行第3列</td>
      </tr>
      <tr>
        <td rowspan="2">第4行第1列</td>
        <td>第4行第2列</td>
        <td>第4行第3列</td>
      </tr>
      <tr>
        <td>红烧肉<img src="@/assets/ikun.png" width="100px"/></td>
        <td>第5行第3列</td>
      </tr>
    </table>
  </div>
</template>

<!--定义数据和操作方法，组件核心-->
<script>
export default {
  name: 'Hsp',
  data() {
    return {
      msg: 'Welcome to Hsp!',
      num: 1
    }
  },
  methods: {
    handleChange(value) {
      // 这里可以获取到用户增加/减少的值
      console.log(value);
    }
  }
}
</script>

<!--样式，css，可以去修饰页面视图
- 0 表示上下边距，auto表示左右居中
-->
<style scoped>
div {
  width: 900px;
  backgroud-color: aliceblue;
  margin: 0 auto;
}

table, tr, td {
  border: 1px solid red;
  border-collapse: collapse;
}

table {
  margin: 0 auto;
  width: 600px;
  height: 50px;
}

h1 {
  color: red;
}
</style>
