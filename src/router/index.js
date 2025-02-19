import { createRouter, createWebHistory } from 'vue-router'
import Home_page from '@/components/Home_page.vue'
import about from '@/components/about.vue'
import Booking from '@/components/Booking.vue'
import Contact from '@/components/Contact.vue'
import feedback from '@/components/feedback.vue'
import Menu from '@/components/Menu.vue'
import restaurant from '@/components/restaurant.vue'
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
    path: '/Contact',
    component:Contact
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
  {
    path: '/restaurant',
    component: restaurant
  },
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