import Vue from 'vue'
import router from './router'
import axios from 'axios'
// import VueAxios from 'vue-axios'
// import env from './env'
import App from './App.vue'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/index'

Vue.prototype.axios = axios
Vue.use(VueLazyload, {
    loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.use(VueCookie)

//element-ui
Vue.prototype.$message = Message;

//mock开关
const mock = false
if (mock) {
    require('./mock/api')
}

//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api' //接口代理
axios.defaults.timeout = 8000 //8秒超时
    // axios.defaults.baseURL = env.baseURL;

//接口错误拦截
axios.interceptors.response.use(function(response) { //response 参数是 axios 封装好的
    let res = response.data;
    let path = location.hash;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) { //后台设定：未登录时接口状态为10
        if (path != '#/index') {
            window.location.href = '/#/login';
        }
        return Promise.reject(res);
    } else {
        Message.warning(res.msg)
        return Promise.reject(res);
    }
})

// Vue.use(VueAxios, axios); //以后可以用this调用
Vue.config.productionTip = false



new Vue({
    router, //键值相同时省略
    store, //Vuex
    render: h => h(App),
}).$mount('#app')