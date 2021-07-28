import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Article from '../views/Home/Article/Article.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/book',
        name: 'BookMainPage',
        component: () => import('../views/BookMainPage/BookMainPage.vue')
      },
      {
        path: '/home/book/bookinfo/:id',
        name: 'BookInfo',
        component: () => import('../views/BookInfo')
      },
      {
        path: '/home/article',
        name: 'Article',
        component: Article
      }
      // {
      //   path:'/login',
      //   name:'Login',
      // }
    ]
  },
  {
    path: '/',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  //切换路由时，控制滚动条位置
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

export default router
