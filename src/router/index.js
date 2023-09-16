import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import راسلنا from '../views/who.vue'
import aboutUs from '../views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'راسلنا',
    component: راسلنا
  },
  {
  path: '/aboutUs',
  name: 'who',
  component: aboutUs
  },
 
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
