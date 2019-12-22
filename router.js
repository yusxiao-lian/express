const express = require('express');
//引入控制器
const ctrl = require('./controller');
//创建路由
const router = express.Router();


//路由分发
router.get('/',(req,res)=>{
    ctrl.showIndex(req,res)
})
.get('/add',(req,res)=>{
    ctrl.showAddPage(req,res)
})
.get('/edit',(req,res)=>{
   ctrl.showEditPage(req,res)
})
.get('/info',(req,res)=>{
   ctrl.showInfopage(req,res)
})
//暴露路由
module.exports = router;