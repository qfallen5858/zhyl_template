const tokens = {
  admin: {
    token: 'admin-token'
  },
  user: {
    token: 'user-token'
  }
}

const users = {
  'admin-token': {
    deptName: '研发部',
    nickName: 'admin',
    roles: ['admin']
  },
  'user-token': {
    deptName: '市场部',
    nickName: '运营人员',
    roles: ['user']
  }
}

// const users = {

// }

module.exports = [{
  url: '/user/login',
  type: 'post',
  response: config => {
    const { username } = config.body
    const token = tokens[username]

    if (!token) {
      return {
        code: 60204,
        message: 'Account and passwords are not incorrect'
      }
    }
    return {
      code: 20000,
      data: token
    }
  }
},
{
  url: '/user/info\.*',
  type: 'get',
  response: config => {
    const { token } = config
    const info = users[token]
    console.log(info)
    if (!info) {
      return {
        code: 50008,
        message: 'Login failed, unable to get user details.'
      }
    }
    return {
      code: 20000,
      data: info
    }
  }
},
{
  url: '/user/logout',
  type: 'post',
  response: () => {
    return {
      code: 20000,
      data: 'success'
    }
  }
}
]

