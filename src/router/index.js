import Vue from 'vue'
import VueRouter from 'vue-router'
// import Book from '../views/Home/Book.vue'
import Home from '../views/Home'
import Article from '../views/Home/Article/Article.vue'
import BookInfo from '../views/BookInfo'
Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/home/book/123',
        name: 'BookInfo',
        component: BookInfo
      },
      /* {
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
      }, */
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
  /* {
    path: '/book',
    name: 'Book',
    component: Book
  }, */
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
