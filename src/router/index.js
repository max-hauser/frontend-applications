import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Capacity from '../views/Capacity.vue'
import MaxCarHeight from '../views/MaxCarHeight.vue'
import Time from '../views/Time.vue'
import GeldMethode from '../views/GeldMethode.vue'
import Garage from '../views/Garage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/capacity',
    name: 'Capacity',
    component: Capacity
  },
  {
    path: '/carheight',
    name: 'MaxCarHeight',
    component: MaxCarHeight
  },
  {
    path: '/availability',
    name: 'Time',
    component: Time
  },
  {
    path: '/payment',
    name: 'GeldMethode',
    component: GeldMethode
  },
  {
    path: '/garages',
    name: 'Garage',
    component: Garage
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
