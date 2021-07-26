import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/normalize.css'
import './assets/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  sblxn,
  render: h => h(App)
}).$mount('#app')
