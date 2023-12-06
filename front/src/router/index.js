import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import RefListePage from '../views/pages/refListePage.vue'

const routes= [
  {
    path: '/',
    redirect: '/ref'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/ref',
    component: RefListePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
