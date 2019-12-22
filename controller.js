//引入model层
const modelData = require('./model')

module.exports = {
    showIndex(req,res){
        res.render('index',{})
    },
    showAddPage(req,res){
        res.render('add',{})
    },
    showEditPage(req,res){
        res.render('edit',{})
    },
    showInfopage(req,res){
        res.render('info',{})
    }
}