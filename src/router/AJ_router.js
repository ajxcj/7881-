import Detail from '../views/Buy.vue'
export default [
    {
        path: '/buy',
        component: () => import('../views/Buy.vue')
    },
    {
        path: '/sell',
        component: () => import('../views/Sell.vue')
    },
    {
        path: '/my',
        component: () => import('../views/My.vue')
    },
]