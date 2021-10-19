<template>
  <div class="loginPage">
    <div class="loginArea">
      <div class="loginTitle">注册</div>
      <el-form>
        <el-form-item label="用户名">
          <el-input type="text"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password"></el-input>
        </el-form-item>
        <el-form-item label="再次输入密码">
          <el-input type="password"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm">注册</el-button>
          <el-button plain class="register" @click="toRegister">返回登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {};
  },
  methods: {
    submitForm() {
      this.$router.push("/login");
    },
    toRegister() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="less" scoped>
.loginPage {
  // background-color: #000;
  position: relative;
  width: 100%;
  height: 100%;
  .loginArea {
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #fff;
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    width: 450px;
    height: 650px;
    padding-top: 150px;
    .loginTitle {
      position: absolute;
      top: 70px;
      left: 20px;
      font-size: 32px;
      font-weight: 700;
    }
    .el-form {
      padding: 0 20px;
      position: relative;
    }
    .btns {
        position: absolute;
        bottom: -60px;
        left: 50%;
        transform: translateX(-50%);
        .el-button {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 20px;
          width: 350px;
          height: 50px;
        }
        .register {
          margin-top: 100px;
          margin-left: 0;
        }
      }
  }
}
</style>
