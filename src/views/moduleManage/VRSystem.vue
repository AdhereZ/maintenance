<template>
 <div>
   <el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>模块管理</el-breadcrumb-item>
  <el-breadcrumb-item>VR教学系统</el-breadcrumb-item>
</el-breadcrumb>
<el-card class="box-card">
 <el-form :label-position="labelPosition" label-width="100px">
  <el-form-item label="场景名称">
    <el-input></el-input>
  </el-form-item>
  <el-form-item label="场景文件名">
    <el-input></el-input>
  </el-form-item>
  <el-form-item label="工具名">
    <el-input></el-input>
  </el-form-item>
  <el-form-item label="工具用途">
    <el-input></el-input>
  </el-form-item>
  <el-form-item label="工具id">
    <el-input></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary">提交</el-button>
    <el-button >重置</el-button>
  </el-form-item>
</el-form>
</el-card>
 </div>

</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'left'
    }
  }
}
</script>

<style lang="less" scoped>
.box-card {
  padding: 30px;
}
.el-form-item {
  margin-bottom: 50px;
}

.el-button {
  margin-right: 150px;
}

</style>>