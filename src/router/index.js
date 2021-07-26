import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Book from '../views/Book.vue'
import Article from '../views/Article.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Article',
    component: Article
  },
  {
    path: '/book',
    name:'Book',
    component:Book
  },
  {
    path: '/article',
    name:'Home',
    component:Home
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
