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
      // {
      //   path: '/home/book',
      //   name:'BookMainPage',
      //   component:()=>import('../views/BookMainPage/BooKMainPage'),
      // },
      // {
      //   path:'/home/book/:id',
      //   name:'BookInfo',
      //   component:()=>import('../views/BookInfo')
      // },
      {
        path:'/home/homepage',
        name:'HomePage',
        component:HomePage
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
    path:'*',
    redirect:'/home/homepage'
  }
  
 ]
// >>>>>>> 7d7f465def1eedab6c4f0e91ab145a4e4bab3a46

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
