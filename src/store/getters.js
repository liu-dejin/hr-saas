const getters = {
  // 取app
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  // 取user
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name
}
export default getters
