import { createWebHistory, createRouter } from 'vue-router';

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/',
            redirect:'/home',
        },
        {
            path:'/home',
            component: () => import('@/views/HomeView'),
        },
        {
            path:'/work',
            component: () => import('@/views/WorkView'),
        },
        {
            path:'/about',
            component: () => import('@/views/AboutView'),
        },
    ]

})

console.log(router)