export default [
  {
    path: '/',
    alias: "/home",
    component: () => import('../views/Home.vue'),
    children: [
      {
        path:"/",
        alias: "gameselectarea",
        component: () => import('../components/gameselectarea.vue')
      },
    ]
  },
]
