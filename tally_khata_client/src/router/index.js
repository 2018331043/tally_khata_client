import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/SignInView.vue";
import HomePage from "../HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "signin",
      component: HomeView
    },
    {
      path: "/signup",
      name: "signup",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/RegisterView.vue")
    },
    {
      path : "/homepage",
      name: "homepage",
      component: HomePage
    }
  ],
});

export default router;
