const express = require('express');
const router = require('./router')
//创建服务器
const app = express();

//配置使用的ejs模板
app.set('view engine','ejs')

//托管静态资源并设置虚拟路径
app.use('/node_modules',express.static('node_modules'))

//监听端口
app.listen(5005,()=>{
    console.log('server is running at http://127.0.0.1:5005')
})

//注册中间件
app.use(router)