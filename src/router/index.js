import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: "nav-link-active",
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import(/* webpackChunkName: "home" */ '../views/Index.vue'),
            meta:{
                title: "Home"
            }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import(/* webpackChunkName: "login" */ '../views/auth/Login.vue'),
            meta: {
                title: "Login"
            }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import(/* webpackChunkName: "register" */ '../views/auth/Register.vue'),
            meta: {
                title: "register"
            }
        },
        {
            path: '/product',
            name: 'product',
            component: () => import(/* webpackChunkName: "product" */ '../views/product/Index.vue'),
            meta:{
                title: "Home"
            }
        },
        {
            path: '/product/:slug',
            name: 'product-detail',
            component: () => import(/* webpackChunkName: "product-detail" */ '../views/product/Show.vue'),
            meta: {
                title: 'Product Detail'
            }
        },
        {
            path: '/category',
            name: 'category',
            component: () => import(/* webpackChunkName: "category" */ '../views/category/Index.vue'),
            meta:{
                title: "Home"
            }
        },
        {
            path: '/flashsale',
            name: 'flashsale',
            component: () => import(/* webpackChunkName: "flashsale" */ '../views/flashsale/Index.vue'),
            meta:{
                title: "Home"
            }
        },
        {
            path: '/customer/dashboard',
            name: 'dashboard',
            component: () => import( /* webpackChunkName: "dashboard" */ '../views/dashboard/Index.vue'),
            meta: {
                requiresAuth: true,
            }
        },
        {
            path: '/customer/order',
            name: 'order',
            component: () => import( /* webpackChunkName: "order" */ '../views/order/Index.vue'),
            meta: {
                requiresAuth: true,
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters['auth/isLoggedIn']) {
        next()
        return
        }
        next('/login')
    } else {
        next()
    }
})


export default router
