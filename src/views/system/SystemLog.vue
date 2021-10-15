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
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <div class="log-main w">123</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 起始日和截止日的数据
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now()
        }
      },
      value1: '',
      value2: '',

      // 用户名的数据
      input: ''
    }
  }
}
</script>

<style lang="less" scoped>
* {
  line-height: 40px;
  text-align: left;
}

.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border: none;
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
  background-color: pink;
  overflow: hidden;
}

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
  margin: 0 5px;
}
</style>
