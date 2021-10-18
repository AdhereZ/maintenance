<template>
  <div>
    <ul class="tab-title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      </el-breadcrumb>
    </ul>
    <div class="log-header w">
      <h2>
        权限管理
      </h2>
      <div class="block">
        <el-date-picker v-model="value1" type="date" placeholder="起始日"> </el-date-picker>
        <el-date-picker v-model="value2" type="date" placeholder="截止日"> </el-date-picker>
        <el-input v-model="input" placeholder="请输入用户名"></el-input>
        <el-button type="primary" icon="el-icon-search" class="search-button">搜索</el-button>
      </div>
    </div>
    <div class="log-main w">
      <!-- 查找表格部分 -->
      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%" :header-cell-style="setHeaderColor">
        <el-table-column type="selection"> </el-table-column>
        <el-table-column prop="id" label="角色id"></el-table-column>
        <el-table-column prop="name" label="角色名"> </el-table-column>
        <el-table-column prop="jurisdiction" label="拥有权限"> </el-table-column>
        <el-table-column prop="describe" label="描述"> </el-table-column>
        <el-table-column prop="state" label="状态"> </el-table-column>
        <el-table-column prop="operate" label="操作"> 
        <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">启动</el-button>
        <el-button type="text" size="small">禁止</el-button>
        <el-button type="text" size="small">编辑</el-button>
        <el-button type="text" size="small">删除</el-button>
      </template>
      </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // 起始日和截止日的数据
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
        },
        value1: '',
        value2: '',

        // 用户名的数据
        input: '',

        // 日志表格的数据
        tableData: [{
            id: 1,
            name: '超级管理员',
            jurisdiction: '......',
            describe: '......',
            state: '启用',
          },
          {
            id: 2,
            name: '一级管理员',
            jurisdiction: '......',
            describe: '......',
            state: '启用',
          }
        ],
        multipleSelection: []
      };
    },
    methods: {
      setHeaderColor({
        row,
        column,
        rowIndex,
        columnIndex
      }) {
        return "background-color: #ddd";
      }
    }
  };
</script>

<style lang="less" scoped>
  * {
    line-height: 40px;
    text-align: left;
  }

  .w {
    width: 80%;
    margin: 0 auto;
  }

  .tab-title {
    height: 40px;
    line-height: 40px;
    background-color: #ccc;
    padding: 0;
    text-align: left;
  }

  .tab-title li {
    display: inline-block;
    margin: 0 40px;
  }

  .log-header {
    height: 120px;
    margin-top: 40px;
    background-color: #ddd;
    overflow: hidden;
  }

  .log-header h2 {
    margin: 10px;
  }

  .log-main {
    margin-top: 50px;
  }

  // 搜索模块
  .block {
    float: right;
  }

  .block div {
    display: inline-block;
    width: 150px;
    margin: 0 5px;
  }

  .block button {
    padding: 0 10px;
    margin: 0 20px 0 5px;
  }

  // 搜索模块
</style>