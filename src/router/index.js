import { createRouter, createWebHistory } from 'vue-router'
import ForestArea from "@/views/ForestArea.vue"
import Forestry from "@/views/Forestry.vue";
import Quarter from "@/views/Quarter.vue";
import TaxCard from "@/views/TaxCard.vue";
import Options from "@/views/Options.vue";

const routes = [
  {
    path: '/',
    name: 'forest-district',
    component: ForestArea
  },

  {
    path: '/forest-district/:id',
    name: 'forestry',
    component: Forestry
  },

  {
    path: '/forest-district/forestry/:id',
    name: 'quarter',
    component: Quarter
  },

  {
    path: '/tax-card',
    name: 'tax-card',
    component: TaxCard
  },

  {
    path: '/options',
    name: 'options',
    component: Options
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
