<template>
<div>
  <!--斑马纹表格-->
  <el-table
    :data="tableData"
    stripe
    style="width: 70%;margin:10px auto">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  <!--树形控件-->
  <el-tree :data="data" style="align-content: center"></el-tree>
</div>
</template>

<script>
export default {
  name: 'Homework',
  data() {
    return {
      // 斑马纹表格
      tableData: [{
        date: '2023-03-12',
        name: 'Tom',
        address: '天津市南开区'
      }, {
        date: '2023-03-13',
        name: 'Jerry',
        address: '北京市朝阳区'
      }],
      // 树形控件
      data: [{
        label: '家用电器',
        children: [{
          label: '电视',
          children: [
            {label: '全面屏电视'},
            {label: '教育电视'},
            {label: 'OLED电视'}
          ]}]
      }]
    }
  }
}
</script>

<style scoped>

</style>
