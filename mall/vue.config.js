module.exports = {
    devServer: {
        host: 'localhost', //主机
        port: 8080, //端口
        proxy: { //为接口配置代理，解决跨域
            '/api': {
                target: 'http://mall-pre.springboot.cn', //接口地址
                changeOrigin: true, //跨域访问设置，true代表跨域
                pathRewrite: { //路径转发规则
                    '/api': ''
                }
            }
        }
    },
    productionSourceMap: false,
    chainWebpack: (config) => { //config拿到webpack配置参数
        config.plugins.delete('prefetch'); //防止一次性将所有文件预加载出来
    }
}