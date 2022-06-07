import Detail from '../views/Detail.vue'
export default [
    {
        path: '/detail',
        component: () => import('../views/Detail.vue')
    }
]