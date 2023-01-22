import { createRouter, createWebHashHistory } from 'vue-router'
import AuthPage from "@/views/AuthPage";
import Panel from "@/views/Panel";

const routes = [
  {
    path: '/',
    name: 'login',
    component: AuthPage
  },
  {
    path: '/panel',
    name: 'panel',
    component: Panel
  },
  {
    path: '/registration',
    name: 'register',
    component: () => import('../components/RegistrationInputForm')

  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
