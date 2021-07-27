import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import Article from '../views/Article.vue'
import BookInfo from '../views/BookInfo/BookInfo'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/book',
    name:'Book',
    component:Book
  },
  {
    path: '/article',
    name:'Article',
    component:Article
  },
  {
    path: '/book/123',
    name:'BookInfo',
    component:BookInfo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
