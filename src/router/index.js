import { createRouter, createWebHashHistory } from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'
import MainPage from '@/views/MainPage.vue'

const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/content', name: 'Content', component: MainPage },
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
