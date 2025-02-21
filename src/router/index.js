import { createRouter, createWebHistory } from 'vue-router'
import Home_page from '@/components/Home_page.vue'
import about from '@/components/about.vue'
import Booking from '@/components/Booking.vue'

import feedback from '@/components/feedback.vue'
import Menu from '@/components/Menu.vue'

import Order from '@/components/Order.vue'

// route array of objects : path, component
const routes = [
  {
    path: '/',
    component:Home_page
  },
  {
    path: '/about',
    component:about
  },
  
  {
    path: '/Booking',
    component:Booking
  },
  {
    path: '/feedback',
    component: feedback
  },
  {
    path: '/Menu',
    component:Menu
  },
  ,
  {
    path: '/Order',
    component: Order
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router