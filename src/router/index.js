import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/Home/home.vue'
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
        path:'/home/homepage',
        name:'HomePage',
        component:HomePage
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
      // {
      //   path:'/home/book/:id',
      //   name:'BookInfo',
      //   component:()=>import('../views/BookInfo')
      // },
    ]
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
