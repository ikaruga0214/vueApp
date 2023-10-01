import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import TimeView from "../views/TimeView.vue";
import { useLoginStore } from "../stores/login";
import AbcView from "../views/AbcView.vue";
import AYAYAView from "../views/AYAYAView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: AYAYAView,
      children: [
        {
          path: "/time",
          name: "time",
          component: TimeView,
        },
      ],
    },

    {
      path: "/items/:product",
      name: "product",
      component: AbcView,
      props: true,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
  ],
});

export default router;
