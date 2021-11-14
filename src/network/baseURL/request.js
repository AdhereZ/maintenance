import axios from 'axios'

const request = axios.create({
  baseURL: '/api'
})
request.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

export default request