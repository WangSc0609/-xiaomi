module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: { //为接口配置代理，解决跨域
            '/api': {
                target: 'https://www.imooc.com', //接口地址
                secure: false, //false为http访问，true为https访问
                changeOrigin: true, //跨域访问设置，true代表跨域
                pathRewrite: { //路径改写规则
                    '/api': ''
                }
            }
        }
    }
}