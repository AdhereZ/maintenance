<template>
  <div>
    <ul class="tab-title">
      <li>我的桌面</li>
    </ul>
    <div class="log-header w">
      <h2>
        系统日志
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
        <el-table-column prop="logId" label="日志ID"></el-table-column>
        <el-table-column prop="ip" label="操作IP"> </el-table-column>
        <el-table-column prop="type" label="操作类型"> </el-table-column>
        <el-table-column prop="content" label="操作内容"> </el-table-column>
        <el-table-column prop="operatorId" label="操作员ID"> </el-table-column>
        <el-table-column prop="operator" label="操作员"> </el-table-column>
        <el-table-column prop="date" label="操作时间" sortable> </el-table-column>
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
            logId: 123456789,
            ip: '127.0.0.1',
            type: '修改数据',
            content: '修改XXX数据',
            operatorId: 1,
            operator: 'admin',
            date: '2021-10-16'
          },
          {
            logId: 234567891,
            ip: '127.0.0.1',
            type: '修改数据',
            content: '修改XXX数据',
            operatorId: 2,
            operator: 'admin',
            date: '2021-10-1'
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