import request from '../baseURL/request.js'

export const getQuestionAPI = function () {
  return request.get('/Question/quesView');
}