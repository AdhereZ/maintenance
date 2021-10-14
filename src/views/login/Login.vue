<template>
  <div class="loginPage">
  <div class="loginArea">
     <el-form>
  <el-form-item label="用户名">
    <el-input type="text"></el-input>
  </el-form-item>
  <el-form-item label="密码">
    <el-input type="password"></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="submitForm">登录</el-button>
  </el-form-item>
</el-form>
  </div>
  </div>
</template>

<script>
export default {
   name: 'Login',
    data() {
    
      return {
      
      };
    },
    methods: {
      submitForm() {
        this.$router.push('/home')
      }
    }
}
</script>

<style lang="less" scoped>
.loginPage {
  background-color: #000;
  position: relative;
  width: 100%;
  height: 100%;
  .loginArea {
    background-color: #fff;
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    width: 500px;
    height: 700px;
    padding-top: 150px;
    .el-form {
      padding: 0 20px;
      position: relative;
      .el-button {
         position: absolute;
         left: 50%;
         transform: translateX(-50%);
         margin: 20px;
         width: 350px;
         height: 50px;
      }
    }
  }
}
</style>