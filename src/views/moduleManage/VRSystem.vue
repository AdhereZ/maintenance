<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>模块管理</el-breadcrumb-item>
      <el-breadcrumb-item>VR教学系统</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <div class="sceneArea">
        <el-row :gutter="20">
         <el-col :span="8">
           <el-input placeholder="请输入场景id" v-model="input3" class="input-with-select">
             <el-button slot="append" icon="el-icon-search" ></el-button>
             </el-input>
         </el-col>
          <el-col :span="6">
            <el-button type="primary" size="small">添加场景</el-button>
            </el-col>
        </el-row>
        <el-table :data="sceneData" style="width: 97%" border>
          <el-table-column fixed prop="sceneId" label="场景id">
          </el-table-column>
          <el-table-column label="场景开关">
            <template v-slot="scope">
              <el-switch
                v-model="scope.row.sceneSwitch"
                inactive-color="#ff4949"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="sceneName" label="场景名"> </el-table-column>
          <el-table-column prop="fileName" label="场景文件名">
          </el-table-column>
          <el-table-column prop="introduce" label="场景介绍"> </el-table-column>
          <el-table-column label="测试开关">
             <template v-slot="scope">
              <el-switch
                v-model="scope.row.testSwitch"
                inactive-color="#ff4949"
              >
              </el-switch>
              </template>
          </el-table-column>
          <el-table-column label="操作">
             <template v-slot="scope">
              <el-button type="primary" size="mini">编辑</el-button>
              <el-button type="danger" size="mini">删除</el-button>
              </template>
               </el-table-column>
        </el-table>
      </div>
        <div class="toolArea">
        <el-row :gutter="20">
         <el-col :span="8">
           <el-input placeholder="请输入工具id" v-model="input3" class="input-with-select">
             <el-button slot="append" icon="el-icon-search" ></el-button>
             </el-input>
         </el-col>
          <el-col :span="6">
            <el-button type="primary" size="small">添加工具</el-button>
            </el-col>
        </el-row>
        <el-table :data="toolData" style="width: 97%" border>
          <el-table-column fixed prop="toolId" label="工具id">
          </el-table-column>
          <el-table-column prop="toolType" label="工具类别"> </el-table-column>
          <el-table-column prop="toolUse" label="工具用途">
          </el-table-column>
          <el-table-column label="工具开关">
             <template v-slot="scope">
              <el-switch
                v-model="scope.row.toolSwitch"
                inactive-color="#ff4949"
              >
              </el-switch>
              </template>
          </el-table-column>
          <el-table-column label="操作">
             <template v-slot="scope">
              <el-button type="primary" size="mini">编辑</el-button>
              <el-button type="danger" size="mini">删除</el-button>
              </template>
               </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sceneData: [
        {
          sceneId: 999,
          sceneSwitch: true,
          sceneName: "场景1",
          fileName: "1.zip",
          introduce: "这是场景1",
          testSwitch: false,
        },
        {
          sceneId: 999,
          sceneSwitch: true,
          sceneName: "场景1",
          fileName: "1.zip",
          introduce: "这是场景1",
          testSwitch: false,
        },
        {
          sceneId: 999,
          sceneSwitch: true,
          sceneName: "场景1",
          fileName: "1.zip",
          introduce: "这是场景1",
          testSwitch: false,
        },
        {
          sceneId: 999,
          sceneSwitch: true,
          sceneName: "场景1",
          fileName: "1.zip",
          introduce: "这是场景1",
          testSwitch: false,
        },
      ],
      toolData: [
        {
          toolId: 111,
          toolType: '金属',
          toolUse: '工具用途',
          toolSwitch: true
        },
        {
          toolId: 111,
          toolType: '金属',
          toolUse: '工具用途',
          toolSwitch: true
        },
        {
          toolId: 111,
          toolType: '金属',
          toolUse: '工具用途',
          toolSwitch: true
        },
      ]
    };
  },
};
</script>

<style lang="less" scoped>
* {
  line-height: 20px;
  text-align: left;
}
.box-card {
  padding: 50px;
}
.sceneArea {
  margin-bottom: 80px;
}
 .el-table {
  margin: 20px 20px 20px 0;
}

</style>
