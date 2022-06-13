export default [
    {
        path: '/gologin',
        component: () => import('../views/GoLogin.vue')
    },
    {
        path: '/big',
        alias: "/",
        component: () => import('../views/Big.vue'),
        children: [
            {
                path: 'buy',
                component: () => import('../views/Buy.vue')
            },
            {
                path: 'sell',
                component: () => import('../views/Sell.vue')
            },
            {
                path: 'my',
                component: () => import('../views/My.vue')
            },
            {
                path: 'news',
                component: () => import('../views/News.vue')
            },
            {
                path: '/',
                alias: "Home",
                component: () => import('../views/Home.vue'),
                children: [
                    {
                        path: "/",
                        alias: "gameselectarea",
                        component: () => import('../components/gameselectarea.vue')
                    },
                ]
            },
        ]
    },
    {
        path: '/estimate',
        component: () => import('../views/estimate.vue')
    },
    {
        path: '/banner',
        component: () => import('../components/banner.vue')
    },
    {
        path: '/pages-list-index',
        component: () => import('../views/pages-list-index.vue')
    },
    
    



]