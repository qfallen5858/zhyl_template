const tokens = {
  admin: {
    token: 'admin-token'
  },
  user: {
    token: 'user-token'
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

