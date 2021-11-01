<template>
  <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

      <el-card>
      <!--搜索与添加区域-->
      <el-row  :gutter="20">
        <el-col :span="8">
          <el-input
            placeholder="请输入id"
            v-model="queryInfo.query"
            clearable
            @clear="getUserList"
          >
            <el-button
              slot="append"
              icon="el-icon-search"
              @click="getUserList"
            ></el-button>
          </el-input>
        </el-col>
        <el-col :span="10">
          <el-button type="primary" size="small" @click="addDialogVisible = true" >添加用户</el-button>
        </el-col>
      </el-row>
      <!-- 查找表格部分 -->
      <!-- <el-table :data="tableData" tooltip-effect="dark"  :header-cell-style="setHeaderColor"> -->

  
      <!--列表区域-->
      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%" border stripe class="log-table" :header-cell-style="setHeaderColor">
        <el-table-column type="selection"> </el-table-column>
        <el-table-column label="角色id" prop="roleid"></el-table-column>
        <el-table-column label="角色名" prop="rolename"></el-table-column>
        <el-table-column label="拥有权限" prop="rolejurisdiction"></el-table-column>
        <el-table-column label="描述" prop="roledescribe"></el-table-column>
        <!-- </el-table-column> -->
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
      <!-- 分页区域 -->
<el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="queryInfo.pagenum"
    :page-sizes="[1, 2, 5, 10]"
    :page-size="queryInfo.pagesize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
</el-pagination>

      </el-card>

    </div>
</template>
    

<script>
  export default {
    data() {
      return {

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


        // 数据
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
      setHeaderColor({ row, column, rowIndex, columnIndex }) {
      return 'background-color: #f2f2f2';
    },
    // 监听 pagesize改变的事件
handleSizeChange(newSize) {
  this.queryInfo.pagesize = newSize;
  this.getUserList();
},
// 监听页码值改变的时间
handleCurrentChange(newPage) {
  this.queryInfo.pagenum = newPage;
  this.getUserList();
},
    }
  };
</script>

<style lang="less" scoped>
* {
  line-height: 20px;
  text-align: left;
}

.el-breadcrumb {
  margin-bottom: 15px;
  font-size: 12px;
}

.el-table{
  margin-top: 15px;
  font-size: 12px;
}
.el-pagination {
  margin-top: 15px;
}
</style>