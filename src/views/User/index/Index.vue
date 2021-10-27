<template>
  <div>
    <header>
      <div class="head-left">
        <img src="https://pic.imgdb.cn/item/6178d8332ab3f51d91b90f87.jpg" alt="LOGO" class="logo">
        <a href="javascript:;">题库</a>
        <a href="javascript:;">联系我们</a>
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
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
    <div class="banner">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seachContent: ''
    };
  }
};
</script>

<style lang="less" scoped>
header {
  height: 60px;
  background-color: #001529;
  .logo {
    float: left;
    height: 60px;
    margin-left: 60px;
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

.banner {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>