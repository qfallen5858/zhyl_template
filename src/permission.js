import router from './router'
import store from './store'
import { getToken } from '@/utils/auth'

const whitelist = ['/login']

router.beforeEach(async(to, from, next) => {
  const hasToken = getToken()

  if (hasToken) {
    console.log('has token')
    if (to.path === '/login') {
      next({ path: '/home' })
    } else {
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      console.log(`hasRoles:${hasRoles}`)
      if (hasRoles) {
        next()
      } else {
        try {
          console.log('try getinfo')
          await store.dispatch('user/getInfo')
          next({ ...to, replace: true })
        } catch (err) {
          next('/login')
        }
      }
    }
  } else {
    if (whitelist.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
