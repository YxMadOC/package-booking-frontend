import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:8090/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  withCredentials: false
})

// http request 拦截器
service.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json'

    }
    return config
  },
  error => {
    return Promise.reject(err)
  }
)

// http response 拦截器
service.interceptors.response.use(
  response => {
    // if(response.data.errCode ==2){
    //   router.push({
    //     path:"/login",
    //     querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
    //   })
    // }
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
