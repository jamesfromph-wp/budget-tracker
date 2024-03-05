import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import Transactions from "@/views/Transactions.vue";
import Budgets from "@/views/Budgets.vue";
import Goals from "@/views/Goals.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Dashboard,
    },
    {
      path: "/transactions",
      name: "transactions",
      component: Transactions,
    },
    {
      path: "/budgets",
      name: "budgets",
      component: Budgets,
    },
    {
      path: "/goals",
      name: "goals",
      component: Goals,
    },
  ],
});

export default router;
