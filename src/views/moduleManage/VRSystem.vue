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
              <el-switch
                v-model="scope.row.switch"
                inactive-color="#ff4949"
                @change="sceneSwitch($event, scope.row.id)"
              >
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
                @change="sceneTestSwitch($event, scope.row.id)"
                inactive-color="#ff4949"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template v-slot="scope">
              <el-button
                type="primary"
                size="mini"
                @click="changeSceneFun(scope.row.id)"
                >编辑</el-button
              >
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
          <el-table-column fixed prop="id" label="工具id"> </el-table-column>
          <el-table-column prop="name" label="工具名"> </el-table-column>
          <el-table-column prop="type" label="工具类别"> </el-table-column>
          <el-table-column prop="use" label="工具用途"> </el-table-column>
          <el-table-column label="工具开关">
            <template v-slot="scope">
              <el-switch
                v-model="scope.row.switch"
                inactive-color="#ff4949"
                @change="toolSwitch($event, scope.row.id)"
              >
              </el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template v-slot="scope">
              <el-button
                type="primary"
                size="mini"
                @click="changeToolView(scope.row.id)"
                >编辑</el-button
              >
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
        <!-- 修改场景对话框 -->
        <el-dialog
          title="修改场景"
          :visible.sync="changeSceneVisible"
          width="50%"
        >
          <span>
            <el-form
              :model="changePara"
              status-icon
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="类别">
                <el-select v-model="changePara.type" placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="修改为">
                <el-input v-model="changePara.para"></el-input>
              </el-form-item>
            </el-form>
            <div class="warnMsg">开关的修改值只能为1或0！</div>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="changeSceneVisible = false">取 消</el-button>
            <el-button type="primary" @click="changeSceneSubmit"
              >确 定</el-button
            >
          </span>
        </el-dialog>
        <!-- 修改工具对话框 -->
        <el-dialog
          title="修改工具"
          :visible.sync="changeToolVisible"
          width="50%"
        >
          <span>
            <el-form
              :model="changeToolPara"
              status-icon
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="类别">
                <el-select v-model="changeToolPara.type" placeholder="请选择">
                  <el-option
                    v-for="item in toolOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="修改为">
                <el-input v-model="changeToolPara.para"></el-input>
              </el-form-item>
            </el-form>
            <div class="warnMsg">开关的修改值只能为1或0！</div>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="changeToolVisible = false">取 消</el-button>
            <el-button type="primary" @click="changeToolSubmit"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </div>
    </el-card>
  </div>
</template>

<script>
import {
  addScene,
  sceneView,
  addtool,
  changeScene,
  toolView,
  changeTool,
} from "network/api/questionAPI.js";
export default {
  data() {
    return {
      // 场景表格数据
      sceneData: [],
      // 工具表格数据
      toolData: [],
      sceneVisible: false,
      // 添加场景表单数据
      addSceneForm: {
        Switch: false,
        name: "",
        fileName: "",
        introduce: "",
        testSwitch: false,
      },
      // 场景类别选择器数据
      options: [
        {
          value: 1,
          label: "场景开关",
        },
        {
          value: 2,
          label: "名字",
        },
        {
          value: 3,
          label: "文件名",
        },
        {
          value: 4,
          label: "介绍",
        },
        {
          value: 5,
          label: "测试开关",
        },
      ],
      // 工具类别选择器数据
      toolOptions: [
        {
          value: 1,
          label: "类型",
        },
        {
          value: 2,
          label: "用途",
        },
        {
          value: 3,
          label: "开关",
        },
        {
          value: 4,
          label: "名字",
        },
      ],
      // 修改场景参数
      changePara: {
        id: null,
        type: null,
        para: "",
      },
      //修改工具参数
      changeToolPara: {
        id: null,
        type: null,
        para: "",
      },
      // 修改场景对话框控制参数
      changeSceneVisible: false,
      // 修改工具对话框控制参数
      changeToolVisible: false,
    };
  },
  async created() {
    this.getScene();
    this.getTool();
  },
  methods: {
    async getScene() {
      const res = await sceneView();
      let { data } = res.data;
      data.forEach((item) => {
        if (item.switch == 1) item.switch = true;
        else item.switch = false;
        if (item.testSwitch == 1) item.testSwitch = true;
        else item.testSwitch = false;
      });
      this.sceneData = data;
    },
    async getTool() {
      const res = await toolView();
      let { data } = res.data;
      data.forEach((item) => {
        if (item.switch == 1) item.switch = true;
        else item.switch = false;
      });
      this.toolData = data;
    },
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
    //修改场景按钮
    changeSceneFun(id) {
      id = id.slice(4) - 0;
      this.changePara.id = id;
      this.changeSceneVisible = true;
    },
    // 修改场景提交按钮
    async changeSceneSubmit() {
      const res = await changeScene(this.changePara);
      this.getScene();
      this.changePara = {
        id: null,
        type: null,
        para: "",
      };
      this.changeSceneVisible = false;
    },
    // 修改场景按钮
    changeToolView(id) {
      this.changeToolPara.id = id;
      this.changeToolVisible = true;
    },
    // 场景开关修改
    sceneSwitch($event, id) {
      let para = $event ? 1 : 0;
      id = id.slice(4) - 0;
      this.switchChange(id, 1, para);
    },
    // 测试开关修改
    sceneTestSwitch($event, id) {
      let para = $event ? 1 : 0;
      id = id.slice(4) - 0;
      this.switchChange(id, 5, para);
    },
    // 工具开关修改
    toolSwitch($event, id) {
      let para = $event ? 1 : 0;
      this.toolSwitchChange(id, 3, para);
    },
    //场景的一切开关网络请求方法
    async switchChange(id, type, para) {
      await changeScene({
        id,
        type,
        para,
      });
    },
    // 工具开关修改的网络请求方法
    async toolSwitchChange(id, type, para) {
      await changeTool({
        id, 
        type, 
        para
      });
    },
    // 修改工具提交按钮
    async changeToolSubmit() {
      console.log(this.changeToolPara);
      const res = changeTool(this.changeToolPara);
      console.log(res);
      this.getTool();
      this.changeToolPara = {
        id: null,
        type: null,
        para: "",
      };
      this.changeToolVisible = false;
    },
  },
};
</script>

<style lang="less" scoped>
* {
  line-height: 20px;
  text-align: left;
}
.el-card {
  height: 100%;
}
.sceneArea {
  margin-bottom: 80px;
}
.el-table {
  margin: 20px 20px 20px 0;
}
.warnMsg {
  color: red;
  margin-top: 40px;
  margin-left: 70px;
}
</style>
