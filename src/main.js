import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/css/normalize.css";
import "./assets/css/reset.css";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import VueLazyload from "vue-lazyload";
// <<<<<<< HEAD

// =======
import './assets/iconfont/iconfont.css'
import './assets/iconfont/iconfont.js'
// >>>>>>> c9d973ef1f1d06051d7746cf8fc9757dd7db6c5c
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.use(VueLazyload, {
	preLoad: 1.3,
	error: "dist/error.png",
// <<<<<<< HEAD
	loading: require("./assets/loding.gif"),
	attempt: 1,
// =======
	// loading: require("./assets/loding2.gif"),
	// attempt: 3,
// >>>>>>> c9d973ef1f1d06051d7746cf8fc9757dd7db6c5c
	// the default is ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend']
	listenEvents: ["scroll"],
});

Vue.config.productionTip = false;
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
