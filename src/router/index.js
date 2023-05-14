import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/register.vue')
    },
    {
      path: '/Contact_form',
      name: 'Contact_form',
      component: () => import('../views/Contact_form.vue')
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('../views/category.vue')
    },
    {
      path: '/services/:id',
      name: 'services',
      component: () => import('../views/Services.vue')
    },

  ]
})

export default router
