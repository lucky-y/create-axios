import Axios from 'axios'
import QS from 'qs'

// 设置请求超时时间
Axios.defaults.timeout = 10000

// 设置请求头
Axios.defaults.headers.post['content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

if (process.env.NODE_ENV == 'development') {
	Axios.defaults.baseURL = ''}
else if (process.env.NODE_ENV == 'testing') {
	Axios.defaults.baseURL = 'https://www.ceshi.com'
}
else if (process.env.NODE_ENV == 'production') {
	Axios.defaults.baseURL = 'https://www.production.com'
}

export function get(url, params){
  return new Promise((resolve, reject) =>{
    Axios.get(url, {
          params: params
      }).then(res => {
          resolve(res.data);
      }).catch(err =>{
          reject(err.data)
    })
  })
}

export function post(url, params) {
  return new Promise((resolve, reject) => {
    Axios.post(url, QS.stringify(params))
      .then(res => {
          resolve(res.data);
      })
      .catch(err =>{
          reject(err.data)
      })
  });
}