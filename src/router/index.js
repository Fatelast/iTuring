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
    children:[
      {
        path: '/home/book',
        name:'BookMainPage',
        component:()=>import('../views/BookMainPage/BooKMainPage'),
        children:[
          {
            path:'/home/book/:id',
            name:'BookInfo',
            component:()=>import('../views/BookInfo')
          }
        ]
      },
      {
        path: '/home/article',
        name:'Article',
        component:Article
      },
      // {
      //   path:'/login',
      //   name:'Login',  
      // }
    ]
  },
  {
    path:'/',
    redirect:'/home'
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
