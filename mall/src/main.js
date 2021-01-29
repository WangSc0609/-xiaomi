import Vue from 'vue'
import router from './router'
import App from './App.vue'


Vue.config.productionTip = false

new Vue({
    router, //键值相同时省略
    render: h => h(App),
}).$mount('#app')