const mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'login'
})
// 暂时封装一个方法
module.exports=(sql,arr,callback)=>{
    db.query(sql,arr,function (error,result){
        if(error){
            return console.log(error)
        }
        callback(result)
    })
}