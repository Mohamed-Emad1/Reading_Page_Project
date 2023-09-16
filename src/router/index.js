import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/Home.vue'
import راسلنا from '../views/who.vue'
import aboutUs from '../views/AboutView.vue'
import search from '../views/search.vue'
import useful from '../views/useful.vue'


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
  {
    path: '/useful',
    name: 'useful',
    component: useful
  },
  {
    path: '/search',
    name: 'search',
    component: search
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
