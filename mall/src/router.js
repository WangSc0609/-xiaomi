import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
// import Login from './pages/login'
// import Product from './pages/product'
// import Detail from './pages/detail'
// import Cart from './pages/cart'
// import Order from './pages/order'
// import OrderConfirm from './pages/orderConfirm'
// import OrderList from './pages/orderList'
// import OrderPay from './pages/orderPay'
// import AliPay from './pages/alipay'
// import { resolve } from 'core-js/fn/promise'


Vue.use(Router); //加载插件固定语法,代表vue已经把插件加载进去了

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index', //路由重定向
            children: [{
                    path: '/index',
                    name: 'index',
                    component: Index,
                }, {
                    path: '/product/:id',
                    name: 'product',
                    component: resolve => require(['./pages/product.vue'], resolve),
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: resolve => require(['./pages/detail.vue'], resolve),
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: resolve => require(['./pages/login.vue'], resolve),
        },
        {
            path: '/cart',
            name: 'cart',
            component: resolve => require(['./pages/cart.vue'], resolve),
        },
        {
            path: '/order',
            name: 'order',
            component: resolve => require(['./pages/order.vue'], resolve),
            children: [{
                    path: 'list', //子路由会带上父路由的路径，不能斜杠
                    name: 'order-list',
                    component: resolve => require(['./pages/orderList.vue'], resolve),
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: resolve => require(['./pages/orderConfirm.vue'], resolve),

                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: resolve => require(['./pages/orderPay.vue'], resolve),
                }, {
                    path: 'alipay',
                    name: 'alipay',
                    component: resolve => require(['./pages/alipay.vue'], resolve),
                }
            ]
        }
    ]
});