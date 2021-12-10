import request from '../baseURL/request.js'

export const getQuestionAPI = function () {
  return request.get('/Question/quesView');
}

//登录
export const login = function (content) {
  return request.post('/login', content);
}

//添加一个场景
export const addScene = function (content) {
  return request.post('/moduleManage/addScene', content);
}

// 查看场景
export const sceneView = function (content) {
  return request.get('/moduleManage/sceneView');
}

// 修改场景
export const changeScene = function (content) {
  return request.post('/moduleManage/changeScene', content);
}

// 添加工具
export const addtool = function (content) {
  return request.post('/moduleManage/addtool',content);
}

//查看所有工具
export const toolView = function (content) {
  return request.get('/moduleManage/toolView');
}

// 修改工具
export const changeTool = function (content) {
  return request.post('/moduleManage/changetool',content);
}

