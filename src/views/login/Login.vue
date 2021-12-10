<template>
  <div class="loginPage">
    <div class="loginArea">
      <div class="loginTitle">登录</div>
      <el-form :model="loginForm" :rules="loginRule" ref="loginRef">
        <el-form-item label="用户名" prop="userName">
          <el-input type="text" v-model="loginForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPassword">
          <el-input type="password" v-model="loginForm.userPassword"></el-input>
        </el-form-item>
        <router-link
          to="/findPassword"
          style="font-size: 16px; color: #409eff; margin-left: 10px"
          >忘记密码？</router-link
        >
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button plain class="register" @click="toRegister">注册</el-button>
        </el-form-item>
        <router-link
          to="/back-login"
          style="color: #858585; position: absolute;
        bottom: -240px;
        left: 50%;
        transform: translateX(-50%);"
          >to backstage</router-link
        >
      </el-form>
    </div>
    <div class="copyright">
      Copyright © 2021 JuLongping Technology Co.Ltd.All righht
    </div>
  </div>
</template>

<script>
import { login } from "network/api/questionAPI.js";
import { throttle } from "utils/public";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        userName: "",
        userPassword: "",
      },
      loginRule: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 8, message: "长度在 3 到 8 个字符", trigger: "blur" },
        ],
        userPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 5,
            max: 10,
            message: "长度在 5 到 10 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    submitForm: throttle(function() {
      this.$refs.loginRef.validate(async (valid) => {
        if (!valid) return;
        console.log(this.loginForm);
        const res = await login(this.loginForm);
        console.log(res);
        if (res.data.code != 200)
          return this.$message.error("登录失败 " + res.data.msg);
        this.$message.success("登录成功");
        let { tokenHead, token } = res.data.data;
        const token1 = tokenHead + " " + token;
        window.sessionStorage.setItem("token", token1);
        this.$router.push("/user");
      });
    },3000), 
    toRegister() {
      this.$router.push("/register");
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
      bottom: -80px;
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
  .copyright {
    position: absolute;
    left: 50%;
    bottom: 5%;
    transform: translateX(-50%);
    font-size: 16px;
  }
}
</style>
