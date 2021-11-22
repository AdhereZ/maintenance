import request from '../baseURL/request.js'

export const getQuestionAPI = function (sum, num) {
  return request.get('/Question/quesView', {
    params: {
      sum,
      num
    }
  });
}

export const login = function (content) {
  return request.post('/login', content);
}