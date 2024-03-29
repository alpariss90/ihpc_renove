import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

import { IonicVue } from '@ionic/vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import layoutTemplate from '../src/views/Layout.vue'
import axios from 'axios';
import VueAxios from 'vue-axios'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

/* Theme variables */
import './theme/variables.css'; 

axios.defaults.withCredentials=false

const app = createApp(App)
  .use(IonicVue)
  .use(VueAxios, axios)
  .use(router);
  app.component('layout-template', layoutTemplate)
router.isReady().then(() => {
  app.mount('#app');
});