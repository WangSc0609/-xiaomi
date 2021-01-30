import Vue from 'vue'
import router from './router'
import axios from 'axios'
// import VueAxios from 'vue-axios'
import env from './env'
import App from './App.vue'

//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api' //接口代理
axios.defaults.timeout = 8000 //8秒超时
axios.defaults.baseURL = env.baseURL;
//接口错误拦截
axios.interceptors.response.use(function(response) { //response 参数是 axios 封装好的
    let res = response.data;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) { //这个项目的后台设定:未登录时接口状态为10
        window.location.href = '/#/login';
    } else {
        alert(res.msg);
    }

})

// Vue.use(VueAxios, axios); //以后可以用this调用
Vue.config.productionTip = false

new Vue({
    router, //键值相同时省略
    render: h => h(App),
}).$mount('#app')