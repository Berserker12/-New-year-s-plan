import api from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(username, password) {
  return request({
    url: `${api.login}?username=${username}&password=${password}`,
    method: 'post',
  })
}
//退出登录
export function logout() {
  return request({
    url: api.logout,
    method: 'post',
  })
  // 999
}
//商品管理
export function goodlist(data) {
  return request({
    url: api.goodlist,
    method: 'get',
    data
  })
}
