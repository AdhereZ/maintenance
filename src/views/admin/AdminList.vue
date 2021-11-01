<template>
  <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理员管理</el-breadcrumb-item>
      <el-breadcrumb-item>管理员列表</el-breadcrumb-item>
      </el-breadcrumb>
    <el-card>
      <!--搜索与添加区域-->
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
      <!-- 表格部分 -->
     <el-table :data="tableData" tooltip-effect="dark" style="width: 100%" border stripe class="log-table" :header-cell-style="setHeaderColor">
        <el-table-column type="selection"> </el-table-column>
        <el-table-column prop="id" label="角色id"></el-table-column>
        <el-table-column prop="mangaeid" label="管理员id"> </el-table-column>
        <el-table-column prop="grade" label="权限等级"> </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.mg_state"
              @change="userStateChanged(scope.row)"
            ></el-switch>
          </template>
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
</el-card>
</el-card>
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

        // 日志表格的数据
        tableData: [{
            id: 1,
            mangaeid: '2.02109E+15',
            grade: '超级管理员',
            state: '启用',
          },
          {
            id: 2,
            mangaeid: '2.02109E+15',
            grade: '一级管理员',
            state: '启用',
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
</style>