import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/views/Index.vue"
import TaxCard from "@/views/TaxCard.vue";
import Options from "@/views/Options.vue";

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },

  {
    path: '/',
    name: 'tax-card',
    component: TaxCard
  },

  {
    path: '/',
    name: 'options',
    component: Options
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
