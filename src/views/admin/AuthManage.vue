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
        <el-table-column label="角色id" prop="roleid"></el-table-column>
        <el-table-column label="角色名" prop="rolename"></el-table-column>
        <el-table-column label="拥有权限" prop="rolejurisdiction"></el-table-column>
        <el-table-column label="描述" prop="roledescribe"></el-table-column>
        </el-table-column>
         <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scope.row.id)"
            ></el-button>
            <!-- 删除按钮 -->
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="removeUserById(scope.row.id)"
            ></el-button>
            <el-tooltip
              effect="dark"
              content="分配角色"
              placement="top-start"
              :enterable="false"
            >
              <el-button
                type="warning"
                icon="el-icon-setting"
                size="mini"
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
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

        // 用户名的数据
        input: '',

         // 获取用户列表的参数对象
      queryInfo: {
        query: '',
        // 当前的页数
        pagenum: 1,
        // 当前每页显示的条数
        pagesize: 2
      },
      userList: [],
      total: 0,

        // 日志表格的数据
        tableData: [{
            roleid: 1,
            rolename: '超级管理员',
            rolejurisdiction: '......',
            roledescribe: '......',
            rolestate: '启用',
          },
          {
            roleid: 2,
            rolename: '一级管理员',
            rolejurisdiction: '......',
            roledescribe: '......',
            rolestate: '启用',
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