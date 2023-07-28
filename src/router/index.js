import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Manage from '@/views/ManageView.vue'
import useUserStore from '@/stores/user.js'

const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about', component: About },
  {
    name: 'manage',
    path: '/manage-music',
    // alias: '/manage',
    component: Manage,
    beforeEnter(to, from, next) {
      next()
    },
    meta: {
      requiresAuth: true
    }
  },
  { path: '/manage', redirect: { name: 'manage' } },
  { path: '/:catchAll(.*)*', redirect: { name: 'home' } }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500'
})

router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next()
    return
  }
  const store = useUserStore()
  store.userLoggedIn ? next() : next({ name: 'home' })
  // if (store.isLoggedIn) {
  //   next()
  // } else {
  //   next({ name: 'home' })
  // }
})

export default router
