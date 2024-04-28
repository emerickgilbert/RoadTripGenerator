import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import { useUserContext } from '@/stores/userContext'
import SignupView from '@/views/SignupView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  if (to.name == 'signup') {
    next()
  }
  const userStore = useUserContext()

  if (!userStore.user && to.name !== 'login') {
    // Check if user is authenticated
    await userStore.checkIfUserAuthenticated()
    if (!userStore.user) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else if (to.name == 'login' && userStore.user) {
    console.log('should not')
  } else {
    next()
  }
})
export default router
