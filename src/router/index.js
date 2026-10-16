import Vue from 'vue'
import VueRouter from 'vue-router'
//import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/user',
    name:'user',
    component:()=>import('../views/elment/UserView.vue')
  },
  {
    path:'/question',
    name:'question',
    component:()=>import('../views/elment/QuestionView.vue')
  },
  {
    path:'/',
    redirect: '/user'
  }
]

const router = new VueRouter({
  routes
})

export default router
