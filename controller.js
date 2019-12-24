//引入model层
const modelData = require('./model')
const moment = require('moment');
//

module.exports = {
    showIndex(req,res){
        // res.render('index',{})
        modelData.getAllHeros((err,result)=>{
            if(err) return res.json({
                code : 201,
                msg : '获取英雄数据失败'
            })
            // console.log({data : result})
            res.render('index',{data : result})    
        })
    },
    showAddPage(req,res){
        res.render('add',{})
    },
    showEditPage(req,res){
        res.render('edit',{})
    },
    showInfopage(req,res){
        res.render('info',{})
    },
    heroInfo(req,res){
        let {id} = req.query;
        modelData.heroInfo(id,(err,result)=>{
            if(err) return res.json({
                code : 201,
                msg : '无法获得信息'
            })
            res.json({
                code : 200,
                msg : '获取成功',
                data : result
            })
        })
    },
    //添加英雄
    addHero(req,res){
        let hero = req.body;
        // console.log(req.body)
        hero.time = moment().format('YYYY-MM-DD HH-mm-ss')
        modelData.addHero(hero,(result)=>{
            if(result) return res.json({
                code : 200,
                msg : '新增成功'
            })
            return res.json({
                code : 201,
                msg : '增加失败'
            })
        })
    },
    //编辑英雄
    edirHero(req,res){
        let hero = req.body;
        hero.time = moment().format('YYYY-MM-DD HH-mm-ss');
        modelData.editHero(hero,()=>{
            
        })
    }

}