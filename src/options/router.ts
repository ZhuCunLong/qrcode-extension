import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
    },
    component: () => import('@options/views/HomeView.vue'),
  },
  {
    path: '/form-test',
    name: 'FormTest',
    meta: {
      title: '表单',
    },
    component: () => import('@options/views/FormTest.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

