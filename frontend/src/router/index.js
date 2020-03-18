import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '@/views/Landing.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Hub from '@/views/Hub.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    meta: { requiresAuth: false }
  },
  {
    path: '/hub',
    name: 'Hub',
    component: Hub,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggendIn = () => store.getters.isLoggendIn
  const isAuthRequired = to.matched.some(record => record.meta.requiresAuth)

  if (isAuthRequired && !isLoggendIn) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router

// router.beforeEach((to, from, next) => {
//   const isAuthRequired = to.matched.some(record => record.meta.requiresAuth)
//   const isLoggendIn = () => store.getters.isLoggendIn

//   if (!isAuthRequired && !isLoggendIn) {
//     next({ name: 'Login' })
//   } else {
//     next()
//   }
// })

// export default router
