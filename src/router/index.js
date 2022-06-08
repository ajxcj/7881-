import Vue from 'vue'
import VueRouter from 'vue-router'
import JJ_router from './JJ_router.js'
import AJ_router from './AJ_router'

Vue.use(VueRouter)

const routes = [
  ...JJ_router,
  ...AJ_router
]

const router = new VueRouter({
  routes
})

export default router
