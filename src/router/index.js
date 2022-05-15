import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'arrivals',
    component: HomeView,
    children:[
      {
        path:'arrivals',
        name:'NewArrivals',
        component:()=> import("../components/Categories/NewArrivals.vue")
      },
      {
        path:'natural',
        name:'NaturalOrganic',
        component:()=> import("../components/Categories/NaturalOrganic.vue")
      },
      {
        path:'story',
        name:'FarmStory',
        component:()=> import("../components/Categories/FarmStory.vue")
      },
      {
        path:'cake',
        name:'PlumCake',
        component:()=> import("../components/Categories/PlumCake.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
