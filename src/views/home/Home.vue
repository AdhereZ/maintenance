<template>
  <div class="homeWrapper">
    <div class="dataAnalysis">
      <div
        class="analysisItem"
        v-for="(item, index) in dataAnalysisModules"
        :key="index"
      >
        <div class="title">{{ item.title }}</div>
        <div class="count">{{ item.count }}</div>
      </div>
    </div>
    <ContetTemplate title="系统通知">
      <template v-slot:content>
        <div class="notices">
          <div class="notice" v-for="item in systemNotices" :key="item.id">
            {{ item.msg }}
          </div>
        </div>
      </template>
      <template v-slot:operation>
        <div class="operations">
          <el-button class="more" type="success">更多</el-button>
          <el-button class="publish" type="primary">发布</el-button>
        </div>
      </template>
    </ContetTemplate>
    <ContetTemplate title="系统信息">
      <template v-slot:operation>
        <div class="table">
          <div
            class="tableItem"
            v-for="(item, index) in getSystemInfoKeys"
            :key="index"
          >
            <span class="tableTitle">{{ systemInfo[item].key }}</span>
            <span style="padding-right: 12px">|</span>
            <span>{{ systemInfo[item].value }}</span>
          </div>
        </div>
        <div class="operations">
          <el-button class="more" type="success">更多</el-button>
        </div>
      </template>
    </ContetTemplate>
    <ContetTemplate title="开发团队">
      <template v-slot:operation>
        <div class="table">
          <div
            class="tableItem"
            v-for="(item, index) in getDevTeamKeys"
            :key="index"
          >
            <span class="tableTitle">{{ devTeam[item].key }}</span>
            <span style="padding-right: 12px">|</span>
            <span>{{ devTeam[item].value }}</span>
          </div>
        </div>
        <div class="operations">
          <el-button class="edit" type="danger">编辑</el-button>
        </div>
      </template>
    </ContetTemplate>
  </div>
</template>

<script>
/* 
  author: 刘坤林
  date: 2021/10/24
  describe: 实现主页静态页面。
*/
import ContetTemplate from "components/content-template.vue";
export default {
  data() {
    return {
      dataAnalysisModules: [
        {
          title: "用户数",
          count: "888",
        },
        {
          title: "模块数",
          count: "08",
        },
        {
          title: "在线管理员数",
          count: "12",
        },
        {
          title: "一级管理员数",
          count: "10",
        },
        {
          title: "二级管理员数",
          count: "08",
        },
      ],
      systemNotices: [
        {
          id: "1",
          msg: "智慧轨道系统v1.0上线",
        },
        {
          id: "2",
          msg: "智慧轨道系统v2.0上线",
        },
        {
          id: "3",
          msg: "智慧轨道系统v3.0上线",
        },
      ],
      systemInfo: {
        version: {
          value: '"1.0"',
          key: "版本",
        },
        ip: {
          value: '"1.1.1.1"',
          key: "服务器地址",
        },
        os: {
          key: "操作系统",
          value: "Linux",
        },
      },
      devTeam: {
        versionOwn: {
          key: "版权所有",
          value: "feifeikun",
        },
        develop: {
          key: "开发者",
          value: "liukunlin",
        },
      },
    };
  },
  computed: {
    getSystemInfoKeys() {
      return Object.keys(this.systemInfo);
    },
    getDevTeamKeys() {
      return Object.keys(this.devTeam);
    },
  },
  components: {
    ContetTemplate,
  },
};
</script>

<style lang="less" scoped>
.homeWrapper {
  line-height: normal;
  padding: 40px 100px;
}
.dataAnalysis {
  display: flex;
  justify-content: space-between;
}
.analysisItem {
  width: 300px;
  background: white;
  height: 90px;
  cursor: pointer;
  .title,
  .count {
    padding-left: 10px;
    text-align: left;
  }
  .title {
    font-size: 16px;
    margin-top: 10px;
  }
  .count {
    color: #2f742d;
    font-size: 34px;
  }
}
.notices {
  .notice {
    margin-bottom: 8px;
    text-align: left;
    padding-left: 30px;
    font-size: 18px;
  }
}
.operations {
  position: absolute;
  bottom: 0;
  right: 0;
  span {
    cursor: pointer;
    margin: 0 12px;
  }
  .more {
    font-size: 14px;
  }
  .publish {
    font-size: 14px;
  }
  .edit {
    font-size: 14px;
  }
}
.tableItem {
  text-align: left;
  padding-left: 30px;
  font-size: 18px;
  margin-bottom: 8px;
  .tableTitle {
    display: inline-block;
    width: 200px;
    font-weight: bold;
  }
}
</style>
