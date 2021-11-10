<template>

  <div class="all">
    <ul class="tab-title">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="bread" :to="{ path: '' }">我的桌面</el-breadcrumb-item>
        <el-breadcrumb-item class="bread" :to="{ path: '' }">用户管理</el-breadcrumb-item>
        <el-breadcrumb-item class="bread" :to="{ path: '' }">用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </ul>
    <el-card>
      <div class="ListBackground">
        <div class="ListHeader">
          <h2>用户列表</h2>
          <el-button type="danger" size="medium" class="HeaderButton">批量删除</el-button>
          <el-button type="success" size="medium" class="HeaderButton">添加</el-button>

          <div class="block">
            <el-date-picker v-model="value1" type="date" class="position" placeholder="起始日"> </el-date-picker>
            <el-date-picker v-model="value2" type="date" class="position" placeholder="截止日"> </el-date-picker>
            <el-input v-model="input" placeholder="请输入用户名" class="InputText position"></el-input>
            <el-button type="success" class="search-button position">搜索</el-button>
          </div>
        </div>
      </div>

      <div class="main">
        <el-table :data="tableData" stripe=true style="width: 100%" border=true :header-cell-style="setHeaderColor">
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="ID" label="ID" width="50"></el-table-column>
          <el-table-column prop="name" label="用户名" width="80"></el-table-column>
          <el-table-column prop="sex" label="性别" width="50"></el-table-column>
          <el-table-column prop="phone" label="手机" width="120"></el-table-column>
          <el-table-column prop="Email" label="邮箱" width="300" text-align='center' show-overflow-tooltip></el-table-column>
          <el-table-column prop="address" label="地址" width="309"> </el-table-column>
          <el-table-column prop="JoinDate" label="加入时间" width="120"> </el-table-column>
          <el-table-column prop="state" label="状态" width="100">
            <template>
              <el-button type="primary" size="small">已启用</el-button>
            </template>
          </el-table-column>
          <el-table-column prop="operation" label="操作" width="240">
            <template>
              <el-button type="info" plain size="small">启用</el-button>
              <el-button type="primary" size="small">编辑</el-button>
              <el-button type="warning" size="small">修改密码</el-button>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-table-column> -->
        </el-table>

      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          ID: '1',
          name: '张三',
          sex: '男',
          phone: '10000',
          Email: '123@qq.com',
          address: '上海路',
          JoinDate: '2000-1-1'
        },
        {
          ID: '2',
          name: '李四',
          sex: '女',
          phone: '100000000',
          Email: '1231@qq.com',
          address: '上海路',
          JoinDate: '2000-1-1'
        },
        {
          ID: '3',
          name: '王五',
          sex: '男',
          phone: '10004',
          Email: '123111@qq.com',
          address: '上海路',
          JoinDate: '2000-1-11'
        }
      ]
    };
  },
  methods: {
    setHeaderColor() {
      return 'background-color: #F2F2F2';
    }
  }
};
</script>

<style lang="less" scoped>
* {
  text-align: left;
}
.all {
  background-color: #e9eef3;
}
// .ListBackground{
//   width: 90%;
//   background-color: #FFF;
// }
.tab-title {
  height: 30px;
  background-color: #e9eef3;
  text-align: left;
}
.InputText {
  width: 200px;
  // float: right;
  //margin: 0 10px;
}
.ListHeader {
  background-color: #ffffff;
  //width: 80%;
  height: 120px;
  //margin: 50px auto;
  overflow: hidden;
  text-align: left;
  line-height: 30px;
}
.ListHeader h2 {
  margin: 10px;
}
.bread {
  display: block;
  font-size: 15px;
  line-height: 30px;
}
.block {
  float: right;
  margin: 0 10px;
}
.block button {
  color: black;
}
.position {
  margin: 0 5px;
}
.HeaderButton {
  margin-top: 2px;
  margin-left: 10px;
}
.main {
  background-color: #e9eef3;
  //width: 80%;
  margin: 0 auto;
  // overflow-x: hidden;
  line-height: 30px;
}
.main button {
  padding: 5px;
}
</style>