import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import RefListePage from '../views/pages/refListePage.vue'
import LoginPage from '../views/pages/loginPage.vue'
import saisiePage from '../views/pages/saisiePage.vue'


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
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path: '/saisie/:semaine',
    component: saisiePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
