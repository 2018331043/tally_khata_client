import { createRouter, createWebHistory } from "vue-router";
import SignInView from "../views/SignInView.vue";
import HomePage from "../HomeView.vue";
import WelcomeViewVue from "../views/WelcomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "WelcomeViewVue",
      component: WelcomeViewVue
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
    },
    {
      path:"/signin",
      name: "SignInView",
      component: SignInView
    }
  ],
});

export default router;
