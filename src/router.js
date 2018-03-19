import Vue from "vue";
import Router from "vue-router";

import Contact from "./views/contact.vue";
import Home from "./views/home.vue";
import Reservations from "./views/reservations.vue";
import Sent from "./views/sent.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/contact", component: Contact },
    { path: "/reservations", component: Reservations },
    { path: "/sent", component: Sent }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
