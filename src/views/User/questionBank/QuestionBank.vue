<template>
  <div>
    <el-card class="box-card">
      <div class="question" v-for="question in questionList" :key="question.id">
        <h4>{{question.id}}. {{question.name}}</h4>
        <div class="choose" v-for="option in question.options" :key="option.id">
          <label>
            <input type="radio" :name="question.optionsName" :value="option.value">
            <span>{{option.value}}</span>
          </label>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next, jumper" :total="total" :page-size="pageLimit" :hide-on-single-page="noPagination" @current-change="currentChange">
        <!-- 只有一页时隐藏分页 -->
      </el-pagination>
      <el-button type="success" class="submit" v-if="canSubmit">提交</el-button>
    </el-card>
  </div>
</template>

<script>
import { getQuestionAPI } from 'network/api/questionAPI.js';

export default {
  data() {
    return {
      questionList: [],
      noPagination: true,
      total: 30,
      pageLimit: 10,
      canSubmit: false
    };
  },
  methods: {
    currentChange(page) {
      if (page === Math.ceil(this.total / this.pageLimit)) {
        this.canSubmit = true;
      } else {
        this.canSubmit = false;
      }
    },
    async initQuestion() {
      const { data: result } = await getQuestionAPI();
      let data = result.data;
      this.total = data.length;
      for (let i = 0; i < data.length; i++) {
        let item = {};
        item.id = data[i].id;
        item.name = data[i].ques;
        item.optionsName = 'result' + item.id;
        item.options = [
          { id: 1, value: data[i].selectA },
          { id: 2, value: data[i].selectB },
          { id: 3, value: data[i].selectC },
          { id: 4, value: data[i].selectD }
        ];
        this.questionList.push(item);
      }
    }
  },
  created() {
    this.initQuestion();
  }
};
</script>

<style lang="less" scoped>
.box-card {
  width: 1200px;
  height: 100%;
  margin: 70px auto;
  .choose {
    position: relative;
    height: 50px;
    line-height: 50px;
    border: 1px solid #d4d4d4;
    margin: 20px 0;
    label {
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 0 20px;
      span {
        margin: 0 10px;
        font-size: 16px;
      }
    }
  }
  .question h4 {
    font-size: 20px;
  }
  .question:nth-of-type(n + 2) {
    margin: 50px 0;
  }

  .submit {
    float: right;
    margin: 10px 20px;
  }
}
</style>