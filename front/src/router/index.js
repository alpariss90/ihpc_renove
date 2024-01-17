import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'
import RefListePage from '../views/pages/refListePage.vue'
import saisiePage from '../views/pages/saisiePage.vue'
import dataPage from '../views/pages/dataPage.vue'
import dataAllPage from '../views/pages/dataAllPage'
import loginPage from '../views/LoginPage.vue'
import registerPage from '../views/RegisterPage.vue'
import pivotPage from '../views/PivotPage.vue'


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
    path: '/saisie/:semaine',
    component: saisiePage
  },
  {
    path: '/data',
    component: dataPage
  },
  {
    path: '/all-data',
    component: dataAllPage
  },
  {
    path: '/login',
    component: loginPage
  },
  {
    path: '/register',
    component: registerPage
  },
  {
    path: '/pivot',
    component: pivotPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
