<template>
  <div class="feedback">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>反馈中心</el-breadcrumb-item>
    </el-breadcrumb>
    <el-card class="feedback-main">
      <!-- <el-row class="block">
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
        </el-row> -->
      <!-- 查找表格部分 -->
      <el-table :data="tableDataFeedback" tooltip-effect="dark" style="width: 100%" border stripe class="feedback-table" :header-cell-style="setHeaderColor">
        <!-- :header-cell-style="setHeaderColor" -->
        <el-table-column prop="status" label="状态"></el-table-column>
        <el-table-column prop="id" label="反馈者ID"> </el-table-column>
        <el-table-column prop="title" label="标题" :formatter="titleFormat"> </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click.native.prevent="checkFeedback(scope.$index, tableDataFeedback)" type="text" size="small">
              查看
            </el-button>
            <el-button @click.native.prevent="deleteFeedback(scope.$index, tableDataFeedback)" type="text" size="small" class="delete-btn">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="feedback-describe" v-if="tableDataFeedback.length">
        <el-row class="describe-row">
          <strong>反馈者ID</strong>
          {{tableDataFeedback[describeIndex].id}}
        </el-row>
        <el-row class="describe-row">
          <strong>反馈日期</strong>
          {{tableDataFeedback[describeIndex].date}}
        </el-row>
        <el-row class="describe-row">
          <strong>反馈标题</strong>
          {{tableDataFeedback[describeIndex].title}}
        </el-row>
        <el-row class="describe-row">
          <strong>反馈详情</strong>
          <div class="feedback-content">
            {{tableDataFeedback[describeIndex].details}}
          </div>
        </el-row>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableDataFeedback: [
        {
          status: '已解决',
          id: '1',
          type: 'App问题',
          date: '2021-10-23',
          title: '挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好挺好',
          details: '差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 '
        },
        {
          status: '未解决',
          id: '2',
          type: 'App问题',
          date: '2021-10-23',
          title: 'test test test',
          details: '1 + 1 = 2'
        },
        {
          status: '已解决',
          id: '3',
          type: 'App问题',
          date: '2021-10-23',
          title: 'tttttt',
          details: '123456 '
        },
        {
          status: '未解决',
          id: '4',
          type: 'App问题',
          date: '2021-10-23',
          title: 'test test test',
          details: 'Hello Hello Hello Hello Hello Hello Hello Hello Hello'
        },
        {
          status: '已解决',
          id: '5',
          type: 'App问题',
          date: '2021-10-23',
          title: '挺好挺好挺好挺好挺好挺好',
          details: '差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 差一点点 '
        },
        {
          status: '未解决',
          id: '6',
          type: 'App问题',
          date: '2021-10-23',
          title: '123',
          details: 'abc'
        },
        {
          status: '未解决',
          id: '6',
          type: 'App问题',
          date: '2021-10-23',
          title: '123',
          details: 'abc'
        }
      ],
      describeIndex: 0
    };
  },
  methods: {
    setHeaderColor() {
      return 'background-color: #f2f2f2';
    },
    titleFormat(row, column, cellValue) {
      if (cellValue.length > 10) {
        cellValue = cellValue.slice(0, 10) + '...';
      }
      return cellValue;
    },
    checkFeedback(index, rows) {
      this.describeIndex = index;
    },
    deleteFeedback(index, rows) {
      if (index === rows.length - 1) {
        this.describeIndex = index - 1;
      } else if (index < this.describeIndex) {
        this.describeIndex = this.describeIndex - 1;
      }
      rows.splice(index, 1);
    }
  }
};
</script>

<style lang="less" scoped>
* {
  line-height: 40px;
  text-align: left;
}

strong {
  font-size: 16px;
}

.block div {
  display: inline-block;
  width: 150px;
  margin: 0 5px;
}

.block button {
  padding: 0 10px;
  margin: 0 20px 0 5px;
}
// 搜索模块

/deep/ .el-card__body {
  display: flex;
}

.feedback-table,
.feedback-describe {
  flex: 1;
  min-height: 600px;
}

.feedback-describe {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 50px;
}

.feedback-describe::before {
  content: '';
  position: absolute;
  left: -25px;
  display: block;
  width: 1px;
  height: 100%;
  background-color: #f0f0f0;
}

.feedback-describe .el-row {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #e3e3e3;

  overflow: hidden;
}

.feedback-describe .el-row:nth-last-of-type(1) {
  position: relative;
  flex: 1;
}

.feedback-content {
  position: absolute;
  top: 16px;
  left: 86px;
  line-height: 24px;
}

.describe-row strong {
  margin-right: 20px;
}

.delete-btn {
  color: #c03637;
}
</style>
