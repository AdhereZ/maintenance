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


export const addtool = function (content) {
  return request.post('/moduleManage/addtool',content);
}

export const changeScene = function (content) {
  return request.post('/moduleManage/changeScene',content);
}

export const toolView = function (content) {
  return request.get('/moduleManage/toolView');
}

