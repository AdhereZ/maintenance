<template>
  <div class="user">
    <header>
      <div class="head-left">
        <img :src="userSrc" alt="LOGO" class="logo">
        <router-link to='/user/questionBank'>题库</router-link>
        <router-link to='/user/contact'>联系我们</router-link>
      </div>
      <div class="head-right">
        <el-input v-model.trim="seachContent" placeholder="搜索" class="search"></el-input>
        <el-dropdown class="dropdown">
          <span class="el-dropdown-link">
            用户名<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>反馈中心</el-dropdown-item>
            <el-dropdown-item @click.native="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  data() {
    return {
      seachContent: '',
      userSrc: require('/src/assets/uploads/clz.jpg')
    };
  },
  methods: {
    loginout() {
      window.sessionStorage.removeItem('token')
      this.$router.replace('/');
    }
  }
};
</script>

<style lang="less" scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: #001529;
  z-index: 999;
  .logo {
    float: left;
    height: 60px;
    margin-left: 60px;
    border-radius: 50%;
  }
  .head-left {
    float: left;
    a {
      float: left;
      height: 60px;
      line-height: 60px;
      padding: 0 10px;
      margin: 0 20px;
      font-size: 16px;
      color: #fff;
    }
    a:hover {
      color: #409eff;
    }
  }

  .head-right {
    float: right;
    line-height: 60px;
    margin-right: 60px;
    .search {
      display: inline-block;
      width: 200px;
      margin: 0 20px;
    }
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
  }
}
</style>