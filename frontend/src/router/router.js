import Vue from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import App from '../App.vue';
// Add more components as needed

const routes = [
  { 
    path: '/', 
    name:"dashboard",
    component: App 
  },
  // Define more routes as needed
];

const router = createRouter({
  routes,
  history: createWebHistory() // Optional, use 'hash' mode if you don't have server-side configuration
});

export default router;
