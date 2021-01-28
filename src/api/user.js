import api from './index'
// axios
import request from '@/utils/request'

// 登录
export function login(data) {
  return request({
    url: api.login,
    method: 'post',
    data
  })
}
//退出登录
export function logout() {
  return request({
    url: api.logout,
    method: 'post',
  })
}
//商品管理
export function goodlist(data) {
  return request({
    url: api.goodlist,
    method: 'get',
    data
  })
}
