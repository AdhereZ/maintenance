<template>
  <div class="questionBankBox">
    <el-card class="box-card">
      <div class="reviewQuestion">
        <div v-for="(question, index) in questionList" :key="question.id" :class="question.clas" @click="changeCurrentQuestion(index)">
          {{(currentPage - 1) * 10 + index + 1}}
        </div>
      </div>
      <div class="question" ref="question" v-for="(question, index) in questionList" :key="question.id">
        <h4>{{(index+1) +10*(currentPage-1)}}. {{question.ques}}</h4>
        <div class="choose" v-for="option in question.options" :key="option.id" @click="selectAnswer(index, question.id, option.value)">
          <label>
            <input type="radio" :name="question.optionsName" :checked="(question.id+','+option.value) | check">
            <span>{{option.value}}</span>
          </label>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next, jumper" :total="total" :page-size="pageLimit" :hide-on-single-page="noPagination" @current-change="currentChange">
      </el-pagination>
      <el-button type="success" class="submit" v-if="canSubmit">提交</el-button>
    </el-card>
  </div>
</template>

<script>
import { getQuestionAPI } from 'network/api/questionAPI.js';

let that = null;

export default {
  data() {
    return {
      allques: [],
      allanswer: [],
      useranswer: [],
      questionList: [],
      noPagination: true,
      total: 50,
      choiceQuestion: 50,
      pageLimit: 10,
      currentPage: 1,
      canSubmit: false
    };
  },
  methods: {
    currentChange(page) {
      this.currentPage = page;
      const pageStart = (page - 1) * this.pageLimit;
      const pageEnd = pageStart + this.pageLimit;
      this.questionList = this.allques.slice(pageStart, pageEnd);
      if (page === Math.ceil(this.total / this.pageLimit)) {
        this.canSubmit = true;
      } else {
        this.canSubmit = false;
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;

      this.restore(); // 还原做题情况
    },
    async initQuestion() {
      const { data: result } = await getQuestionAPI(this.total, this.choiceQuestion);
      let data = result.data;
      this.total = data.length;
      for (let i = 0; i < data.length; i++) {
        let item = {};
        let item2 = {};
        item2.id = data[i].id;
        item2.answer = data[i].answer;
        item.id = data[i].id;
        item.ques = data[i].ques;
        item.answer = data[i].answer;
        item.optionsName = 'answer' + item.id;
        item.options = [
          { id: 1, value: data[i].selectA },
          { id: 2, value: data[i].selectB },
          { id: 3, value: data[i].selectC },
          { id: 4, value: data[i].selectD }
        ];
        item.clas = '';
        this.allques.push(item);
        this.allanswer.push(item2);
      }

      this.questionList = this.allques.slice(0, this.pageLimit);
    },
    selectAnswer(index, id, answer) {
      this.questionList[index].clas = 'selected';
      while (answer[0] === ' ') {
        answer = answer.slice(1);
      }
      for (let i = 0; i < this.useranswer.length; i++) {
        if (this.useranswer[i].id === id) {
          this.useranswer[i].answer = answer[0];
          return;
        }
      }
      let item = {};
      item.id = id;
      while (answer[0] === ' ') {
        answer = answer.slice(1);
      }
      item.answer = answer[0];
      this.useranswer.push(item);
    },
    changeCurrentQuestion(index) {
      let h = this.$refs.question[index].offsetTop;
      document.body.scrollTop = h;
      document.documentElement.scrollTop = h;
    },
    restore() {
      // 还原做题情况
      for (let i = 0; i < this.useranswer.length; i++) {
        for (let j = 0; j < this.questionList.length; j++) {
          if (this.questionList[j].id === this.useranswer[i].id) {
            this.questionList[j].clas = 'selected';
            break;
          }
        }
      }
    }
  },
  filters: {
    check(str) {
      let id = str.split(',')[0];
      let option = str.split(',')[1];

      while (option[0] === ' ') {
        option = option.slice(1);
      }
      option = option[0];

      for (let i = 0; i < that.useranswer.length; i++) {
        if (that.useranswer[i].id === id && that.useranswer[i].answer === option) {
          return true;
        }
      }
      return false;
    }
  },
  created() {
    that = this;
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
    height: 40px;
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
.reviewQuestion {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 200px;
  right: 200px;
  width: 60px;
  height: 700px;
  background-color: #f8faf5;
  box-sizing: content-box;
  div {
    flex: 1;
    margin: 5px;
    border: 1px solid#cfcfcf;
    font-size: 20px;
    text-align: center;
    line-height: 60px;
  }
  .selected {
    background-color: #409eff;
  }
}
.questionBankBox {
  position: relative;
}
</style>