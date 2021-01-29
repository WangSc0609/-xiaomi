import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'


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
                    component: Product,
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: Detail,
                }
            ]
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart,
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [{
                    path: 'list', //子路由会带上父路由的路径，不能斜杠
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay,
                }, {
                    path: 'alipay',
                    name: 'alipay',
                    component: AliPay,
                }
            ]
        }
    ]
});