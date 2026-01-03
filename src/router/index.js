import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/views/LandingPage.vue';
import MainPage from '@/views/MainPage.vue';

const routes = [
  {
    path: '/',
    component: LandingPage,
  },
  {
    path: '/content',
    component: MainPage,
  },
];

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // ensures base path is correct
  routes,
});
