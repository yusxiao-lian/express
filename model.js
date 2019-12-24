//加载数据库模板
const mysql = require('mysql');
//连接数据库
let conn = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'hero',
    dateStrings : true
})

//开启连接
conn.connect()

module.exports = {
    getAllHeros(callback){
        let sql = 'select * from heros';
        conn.query(sql,(err,result)=>{
            if(err) return callback(err);
            callback(null,result);
        })
    },
    //单个英雄信息详情
    heroInfo(id,callback){
        let sql = 'select * from heros where id=?';
        conn.query(sql,[id],(err,result)=>{
            if(err) return callback(err);
            callback(null,result);
        })
    },
    //添加英雄
    addHero(hero,callback){
        let sql = 'insert into heros set ?'
        conn.query(sql,[hero],(err,result)=>{
            if(err) return callback(false);
            callback(true)
        })
    },
    //编辑英雄
    editHero(hero,callback){
        let {id} = hero;
        delete hero.id;
        let sql = 'update heros set ? where id=?';
        conn.query(sql,[hero,id],(err,result)=>{
            if(err) return callback(false);
            callback(true)
        })
    },
    //删除英雄
    deleteHero(id,callback){
        let sql = 'delete from heros where id=?'
        conn.query(sql,[id],(err,result)=>{
            if(err) {
                return callback(false)
            }else{
                 callback(true)
            }
           
        })
    }
 
}