import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecruitView from "@/views/RecruitView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: SwustMap
    // },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/homepage',
      name:'homepage',
      component:HomeView
    },
    {
      path:'/zhaosheng',
      name:'zhaosheng',
      component: () => import('../views/ZhaoshengView.vue')
    },
    {
      path: '/recruit',
      name: 'recruit',
      component:RecruitView
    },
    {
      path: '/famous',
      name: 'famous',
      component: () => import('../views/Famous.vue')
    }
  ]
})

export default router
