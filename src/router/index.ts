import { createRouter, createWebHistory } from 'vue-router'
import MobilePadView from "../views/MobilePadView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mobile-pad",
      component: MobilePadView,
    },
  ],
});
export default router;