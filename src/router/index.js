import { createRouter, createWebHistory } from 'vue-router'
import ManagementComp from '../components/ManagementComp.vue'

const routes = [
  { path: '/',       name: 'default-management',  component: ManagementComp },
  { path: '/trade',  name: 'trade',               component: () => import('../components/TradeComp.vue') } 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
