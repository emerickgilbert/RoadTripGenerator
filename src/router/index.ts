import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFoundView from '../views/PageNotFoundView.vue'
import AuthenticatorView from '@/views/AuthenticatorView.vue'
import { getCurrentUser } from 'aws-amplify/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/authenticate',
      name: 'authenticate',
      component: AuthenticatorView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/:pathMatch(.*)*', // Catch-all route for unmatched paths
      component: PageNotFoundView
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    try {
      const user = await getCurrentUser()
      next() // User is authenticated, proceed to route
    } catch (error) {
      next({ name: 'authenticate' }) // Redirect to login page
    }
  } else {
    next() // Proceed if the route does not require authentication
  }
})
export default router
