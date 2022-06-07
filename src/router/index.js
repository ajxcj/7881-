import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JJ_router from './JJ_router'
import AJ_router from './AJ_router'

Vue.use(VueRouter)

const routes = [
  ...JJ_router,
  ...Aj_router
]

const router = new VueRouter({
  routes
})

export default router
