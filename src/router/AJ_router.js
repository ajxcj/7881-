export default [
    {//去登录
        path: '/gologin',
        component: () => import('../views/GoLogin.vue')
    },
    {//金币
        path: '/goldCoins',
        component: () => import('../views/GoldCoins.vue')
    },
    {//自抽号
        path: '/since',
        component: () => import('../views/Since.vue')
    },
    {//买账号
        path: '/buyAccount',
        component: () => import('../views/BuyAccount.vue')
    },
    {
        path: '/big',
        alias: "/",
        component: () => import('../views/Big.vue'),
        children: [
            {//买
                path: 'buy',
                component: () => import('../views/Buy.vue')
            },
            {//卖
                path: 'sell',
                component: () => import('../views/Sell.vue')
            },
            {//我的
                path: 'my',
                component: () => import('../views/My.vue')
            },
            {//消息
                path: 'news',
                component: () => import('../views/News.vue')
            },

            {//首页
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