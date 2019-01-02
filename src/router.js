import Vue from "vue";
import Router from "vue-router";

import Home from "./views/home";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/contact", component: () => import("./views/contact.vue") },
    {
      path: "/reservations",
      component: () => import("./views/reservations.vue")
    },
    { path: "/sent", component: () => import("./views/sent.vue") }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
