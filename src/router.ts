import { createRouter, createWebHistory } from "vue-router";
import StatusHomeView from "@/views/StatusHomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "status",
      component: StatusHomeView,
      meta: { title: "SkinDeck Status" },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

router.afterEach((to) => {
  document.title = (to.meta.title as string | undefined) ?? "SkinDeck Status";
});

export default router;
