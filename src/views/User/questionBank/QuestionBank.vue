<template>
  <div>
    <el-card class="box-card">
      <div class="question" v-for="question in questionList" :key="question.id">
        <h4>{{question.name}}</h4>
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
import { getQuestionAPI } from '/src/api/questionAPI.js';

export default {
  data() {
    return {
      testlist: [],
      questionList: [
        {
          id: 1,
          name: '1 + 1 = :',
          optionsName: 'result1',
          options: [
            {
              id: 1,
              value: '1'
            },
            {
              id: 2,
              value: '2'
            },
            {
              id: 3,
              value: '3'
            },
            {
              id: 4,
              value: '4'
            }
          ]
        },
        {
          id: 2,
          name: '10 * 10 = :',
          optionsName: 'result2',
          options: [
            {
              id: 1,
              value: '20'
            },
            {
              id: 2,
              value: '999'
            },
            {
              id: 3,
              value: '100'
            },
            {
              id: 4,
              value: '333'
            }
          ]
        },
        {
          id: 3,
          name: '777 * 777 = :',
          optionsName: 'result3',
          options: [
            {
              id: 1,
              value: '603729'
            },
            {
              id: 2,
              value: '603629'
            },
            {
              id: 3,
              value: '612559'
            },
            {
              id: 4,
              value: '653359'
            }
          ]
        },
        {
          id: 4,
          name: "从字符串 const str = 'qwbewrbbeqqbbbweebbbbqee';中能得到结果 ['b', 'bb', 'bbb', 'bbbb'] 以下错误语句是？",
          optionsName: 'result1',
          options: [
            {
              id: 1,
              value: 'str.match(/b+/g)'
            },
            {
              id: 2,
              value: 'str.match(/b*/g)'
            },
            {
              id: 3,
              value: 'str.match(/b{1,4}/g)'
            },
            {
              id: 4,
              value: 'str.match(/b{1,5}/g)'
            }
          ]
        }
      ],
      noPagination: true,
      total: 30,
      pageLimit: 4,
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
      const { data } = await getQuestionAPI();
      console.log(data);
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
  margin: 20px auto;
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