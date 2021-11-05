<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>系统日志</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card>
      <el-row class="block">
        <el-col>
          <el-date-picker v-model="startDay" type="date" placeholder="起始日"></el-date-picker>
        </el-col>
        <el-col>
          <el-date-picker v-model="endDay" type="date" placeholder="截止日"> </el-date-picker>
        </el-col>
        <el-col>
          <el-input v-model.trim="username" placeholder="请输入用户名"></el-input>
        </el-col>
        <el-col v-if="flagButton">
          <el-button type="primary" icon="el-icon-search" class="search-button" @click="search">搜索</el-button>
        </el-col>
        <el-col v-else>
          <el-button type="primary" icon="el-icon-search" disabled class="search-button" @click="search">搜索</el-button>
        </el-col>
      </el-row>
      <!-- 查找表格部分 -->
      <el-table :data="tableDataSearch" tooltip-effect="dark" style="width: 100%" border stripe class="log-table" :header-cell-style="setHeaderColor">
        <!-- :header-cell-style="setHeaderColor" -->
        <el-table-column type="selection"> </el-table-column>
        <el-table-column prop="logId" label="日志ID"></el-table-column>
        <el-table-column prop="ip" label="操作IP"> </el-table-column>
        <el-table-column prop="type" label="操作类型"> </el-table-column>
        <el-table-column prop="content" label="操作内容"> </el-table-column>
        <el-table-column prop="operatorId" label="操作员ID"> </el-table-column>
        <el-table-column prop="operator" label="操作员"> </el-table-column>
        <el-table-column prop="date" label="操作时间" sortable> </el-table-column>
        <el-table-column label="操作" width="100px">
          <template slot-scope="scope">
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="removeSystemlog(scope.row.id)"></el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-table :data="tableData" tooltip-effect="dark" style="width: 100%" border stripe class="log-table" :header-cell-style="setHeaderColor">
        <el-table-column type="selection"> </el-table-column>
        <el-table-column prop="logId" label="日志ID"></el-table-column>
        <el-table-column prop="ip" label="操作IP"> </el-table-column>
        <el-table-column prop="type" label="操作类型"> </el-table-column>
        <el-table-column prop="content" label="操作内容"> </el-table-column>
        <el-table-column prop="operatorId" label="操作员ID"> </el-table-column>
        <el-table-column prop="operator" label="操作员"> </el-table-column>
        <el-table-column prop="date" label="操作时间" sortable> </el-table-column>
        <el-table-column label="操作" width="100px">
          <template slot-scope="scope">
            <el-button type="danger" icon="el-icon-delete" size="mini" @click.native.prevent="removeSystemlog(scope.$index, tableData)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startDay: '',
      endDay: '', // 起始日和截止日的数据
      startDayMS: 0,
      endDayMS: 0, // 起始日和截止日的ms数据

      username: '', // 用户名的数据
      flagButton: false,

      // 日志表格的数据
      tableData: [
        {
          logId: 123456789,
          ip: '127.0.0.1',
          type: '修改数据',
          content: '修改XXX数据',
          operatorId: 1,
          operator: 'admin',
          date: '2021-9-16'
        },
        {
          logId: 234567891,
          ip: '127.0.0.1',
          type: '修改数据',
          content: '修改XXX数据',
          operatorId: 2,
          operator: 'clz',
          date: '2021-10-30'
        },
        {
          logId: 234567891,
          ip: '127.0.0.1',
          type: '修改数据',
          content: '修改XXX数据',
          operatorId: 3,
          operator: 'czh',
          date: '2019-8-1'
        },
        {
          logId: 234567891,
          ip: '127.0.0.1',
          type: '修改数据',
          content: '修改XXX数据',
          operatorId: 4,
          operator: 'test',
          date: '2020-10-1'
        }
      ],
      tableDataSearch: [],
      multipleSelection: []
    };
  },
  methods: {
    setHeaderColor({ row, column, rowIndex, columnIndex }) {
      return 'background-color: #f2f2f2';
    },
    search() {
      this.tableDataSearch = this.tableData.filter(o => {
        let date = new Date(o.date.replace(/-/g, '/') + ' 00:00:00');
        return date.getTime() >= this.startDayMS && date.getTime() <= this.endDayMS && o.operator === this.username;
      });
    },
    setButton() {
      // 根据输入条件设置按钮状态
      if (this.startDay && this.endDay && this.username) {
        this.startDayMS = new Date(this.startDay).getTime();

        let endDate = new Date(this.endDay);
        endDate.setHours(23);
        endDate.setMinutes(59);
        endDate.setSeconds(59);
        this.endDayMS = endDate.getTime();

        if (this.endDayMS >= this.startDayMS) {
          this.flagButton = true;
        } else {
          this.flagButton = false;
        }
      } else {
        this.flagButton = false;
      }
    },
    removeSystemlog(index, rows) {
      rows.splice(index, 1);
    }
  },
  updated() {
    this.setButton();
  }
};
</script>

<style lang="less" scoped>
* {
  line-height: 40px;
  text-align: left;
}

.w {
  width: 80%;
  margin: 0 auto;
}

// 组件样式模块
.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border-color: #dcdfe6; // 未生效
}
// 组件样式模块

// 搜索模块
.block div {
  display: inline-block;
  width: 150px;
  margin: 0 5px;
}

.block button {
  padding: 0 10px;
  margin: 0 20px 0 5px;
  height: 40px;
}
// 搜索模块

.log-table {
  margin: 20px 0;
}
</style>