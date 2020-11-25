import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Capacity from '../views/Capacity.vue'
import CarHeight from '../views/CarHeight.vue'
import Departure from '../views/Departure.vue'
import Payment from '../views/Payment.vue'
import Garages from '../views/Garages.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/capacity',
    name: 'Capacity',
    component: Capacity
  }, 
  {
    path: '/carheight',
    name: 'CarHeight',
    component: CarHeight
  }, 
  {
    path: '/departure',
    name: 'Departure',
    component: Departure
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment
},
{
  path: '/garages',
  name: 'Garages',
  component: Garages
},       
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
