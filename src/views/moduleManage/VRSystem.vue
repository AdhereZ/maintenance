<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>模块管理</el-breadcrumb-item>
      <el-breadcrumb-item>VR教学系统</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <!-- 场景列表 -->
      <div class="sceneArea">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-input placeholder="请输入场景id" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </el-col>
          <el-col :span="6">
            <el-button type="primary" size="small" @click="addScene"
              >添加场景</el-button
            >
          </el-col>
        </el-row>
        <el-table :data="sceneData" style="width: 97%" border>
          <el-table-column fixed prop="id" label="场景id"> </el-table-column>
          <el-table-column label="场景开关">
            <template v-slot="scope">
              <el-switch v-model="scope.row.switch" inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="场景名"> </el-table-column>
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
      <!-- 工具列表 -->
      <div class="toolArea">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-input placeholder="请输入工具id" class="input-with-select">
              <el-button slot="append" icon="el-icon-search"></el-button>
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
          <el-table-column prop="toolUse" label="工具用途"> </el-table-column>
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
        <!-- 添加场景对话框 -->
        <el-dialog title="添加场景" :visible.sync="sceneVisible" width="50%">
          <span>
            <el-form
              :model="addSceneForm"
              status-icon
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="场景开关">
                <el-switch
                  v-model="addSceneForm.Switch"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                >
                </el-switch>
              </el-form-item>
              <el-form-item label="场景名">
                <el-input v-model="addSceneForm.name"></el-input>
              </el-form-item>
              <el-form-item label="场景文件名">
                <el-input v-model="addSceneForm.fileName"></el-input>
              </el-form-item>
              <el-form-item label="场景介绍">
                <el-input v-model="addSceneForm.introduce"></el-input>
              </el-form-item>
              <el-form-item label="测试开关">
                <el-switch
                  v-model="addSceneForm.testSwitch"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                >
                </el-switch>
              </el-form-item>
            </el-form>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="sceneVisible = false">取 消</el-button>
            <el-button type="primary" @click="submitSceneForm">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </el-card>
  </div>
</template>

<script>
import { addScene, sceneView, addtool,changeScene,toolView } from "network/api/questionAPI.js";
export default {
  data() {
    return {
      // 场景表格数据
      sceneData: [],
      // 工具表格数据
      toolData: [
        {
          toolId: 111,
          toolType: "金属",
          toolUse: "工具用途",
          toolSwitch: true,
        },
        {
          toolId: 111,
          toolType: "金属",
          toolUse: "工具用途",
          toolSwitch: true,
        },
        {
          toolId: 111,
          toolType: "金属",
          toolUse: "工具用途",
          toolSwitch: true,
        },
      ],
      sceneVisible: false,
      // 添加场景表单数据
      addSceneForm: {
        Switch: false,
        name: "",
        fileName: "",
        introduce: "",
        testSwitch: false,
      },
    };
  },
  async created() {
    const res = await sceneView();
    let { data } = res.data;
    data.forEach((item) => {
      if (item.switch == 1) item.switch = true;
      else item.switch = false;
      if (item.testSwitch == 1) item.testSwitch = true;
      else item.testSwitch = false;
    });
    this.sceneData=data
  },
  methods: {
    addScene() {
      this.sceneVisible = true;
    },
    async submitSceneForm() {
      // // 为了对接口转换数据类型
      // if (this.addSceneForm.Switch) this.addSceneForm.Switch = 1;
      // else this.addSceneForm.Switch = 0;
      // if (this.addSceneForm.testSwitch) this.addSceneForm.testSwitch = 1;
      // else this.addSceneForm.testSwitch = 0;
      // console.log(this.addSceneForm);
      // const res = await addScene(this.addSceneForm);
      // console.log(res);
      const res = await toolView();
      console.log(res);
    },
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
