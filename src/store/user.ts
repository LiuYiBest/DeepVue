import { defineStore } from 'pinia'
import { ref } from 'vue'
import { login, getUserInfo, logout } from '@/api/user'

export const useUserStore = defineStore('user', () => {
  // 状态
  const token = ref(localStorage.getItem('token') || '')
  const userInfo = ref({
    username: '',
    avatar: '',
    roles: [] as string[],
    value: ''   
  })

  // actions
  // 登录
  const loginAction = async (username: string, password: string) => {
    try {
      const res = await login({ username, password })
      token.value = res.data.token
      localStorage.setItem('token', res.data.token)
      return Promise.resolve(res)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  // 获取用户信息
  const getUserInfoAction = async () => {
    try {
      const res = await getUserInfo()
      userInfo.value = res.data
      return Promise.resolve(res)
    } catch (error) {
      return Promise.reject(error)
    }
  }

  // 退出登录
  const logoutAction = async () => {
    try {
      await logout()
      resetState()
      return Promise.resolve()
    } catch (error) {
      return Promise.reject(error)
    }
  }

  // 重置状态
  const resetState = () => {
    token.value = ''
    userInfo.value = {
      username: '',
      avatar: '',
      roles: [],
      value: ''
    }
    localStorage.removeItem('token')
  }

  return {
    token,
    userInfo,
    loginAction,
    getUserInfoAction,
    logoutAction,
    resetState
  }
})