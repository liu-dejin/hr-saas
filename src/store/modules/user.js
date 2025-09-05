import { getToken, setToken, removeToken } from '@/utils/auth'
const state = {
  token: getToken() || null // 从缓存中读取token
}
const mutations = {
  setToken(state, token) {
    state.token = token
    // 同步到缓存
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    // 同步到缓存
    removeToken()
  }
}
const actions = {
  // context 上下文 传入参数
  login(context, data) {
    console.log(data)
    // TODO : 调用登录接口
    // 返回了token 123456
    context.commit('setToken', '123456')
  }
}
export default { namespaced: true, // 开启命名空间
  state, mutations, actions }

