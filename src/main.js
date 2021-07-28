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
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'
import moment from 'moment'
Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(moment)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
