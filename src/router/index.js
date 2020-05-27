import Vue from 'vue';
import VueRouter from 'vue-router';

const Login = () => import(/* webpackChunkName: 'login' */ '../views/Login')
const Home = () => import(/* webpackChunkName: 'home' */ '../views/layout')

Vue.use(VueRouter);

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    }
];

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
