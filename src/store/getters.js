const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  nickName: state => state.user.nickName,
  deptName: state => state.user.deptName
}

export default getters
