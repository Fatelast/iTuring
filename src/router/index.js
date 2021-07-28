import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/Home/home.vue'
import Home from '../views/Home/index.vue'
import Article from '../views/Home/Article/Article.vue'
import CartPage from '../views/product/CartPage'
import Login from '../views/product/Login/index.vue'
import Register from '../views/product/RegisterPage/index.vue'
import Cart from '../views/product/CartPage/index.vue'
import Search from '../components/Search/Search.vue'
import BookInfo from '../views/BookInfo'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/home/homepage',
        name:'HomePage',
        component:HomePage
      },
      {
        path: '/home/book/:id',
        name: 'BookInfo',
        component: BookInfo
      },
      {
        path: '/home/book',
        name:'BookMainPage',
        component:()=>import('../views/Home/BookMainPage/BookMainPage'),
      },
      {
        path: '/home/article',
        name: 'Article',
        component: Article
      },
      /* 购物车 */
      {
        path:'/home/cartPage',
        name:'CartPage',
        component:CartPage
      },
      {
        path:'/home/cart',
        name:'Cart',
        component:Cart
      },
      
    ]
  },
  {
    path:'/search',
    name:'Search',
    component:Search
  },
  {
    path:'/login',
    name:'Login',
    component:Login
  },
  {
    path:'/register',
    name:'Register',
    component:Register
  },
  
  {
    path:'*',
    redirect:'/home/homepage'
  }
]

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
