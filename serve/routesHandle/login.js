const db = require('../db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const config = require('../config');
module.exports = (req,res)=>{
    // 查询用户是否存在
    const selectUser = 'SELECT * FROM user WHERE username=?';
    db(selectUser,req.body.username,result=>{
        if(result.length !== 1){
            return res.send({
                status:2,
                msg:'此用户不存在'
            })
        }
        // 如果存在就进行密码比较
        const psRes = bcrypt.compareSync(req.body.password,result[0].password)
        if(!psRes){
            return res.send({
                status:2,
                msg:'密码错误'
            })
        }
        // 根据用户信息生成token
        const token = jwt.sign({username:req.body.username},config.jwtkey,{
            expiresIn:'24h'
        })
        res.send({
            status:0,
            msg:'登录成功',
            token
        })
    })
}