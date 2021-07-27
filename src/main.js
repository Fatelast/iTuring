import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/normalize.css'
import './assets/css/reset.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'

import VueLazyload from 'vue-lazyload'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(VueLazyload, {
  loading: require('./static/images/b5fa49c3-8ba9-4e21-9989-9d1bba7233c9.png'),
  preLoad: 1.3, // 预载高度比例
  attempt: 2 // 尝试次数
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
