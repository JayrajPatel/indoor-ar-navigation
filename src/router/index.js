import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter and createWebHistory functions from vue-router
import Home from '../components/Home.vue'; // Import your Home component

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router; // Export the router instance
