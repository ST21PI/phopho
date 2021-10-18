import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from '../Page.vue'
import Todo from '../components/Todo/Todo'


Vue.use(VueRouter)

const routes = [
  {
    path: '/Time',
    name: 'time',
    component: Page
  },
  {
    path: '/Todo',
    name: 'Todo',
    component: Todo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
  // 라우터를 나누긴 했는데 페이지를 나누지는 못했음 어떻게 하는건지 봐야함 
  // 페이지에따라 나오는 화면이 다르게 만들어야 함 
export default router
