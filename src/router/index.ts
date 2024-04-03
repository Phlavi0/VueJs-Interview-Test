import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import UserView from "@/views/PostView.vue";

const HOME_ROUTE = HomeView;
const USER_ROUTE = UserView;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name:"Home", component: HOME_ROUTE },
    { path: '/user/:id', name:"User", component: USER_ROUTE, props: true }
  ]
})

export default router