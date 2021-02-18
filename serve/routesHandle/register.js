const bcrypt = require('bcryptjs');
const db = require('../db');
module.exports = (req, res) => {
    // 查询用户名是否存在
    const selectUsername = 'SELECT * FROM user WHERE username=?';
    db(selectUsername, req.body.username, result => {
        if (result.length >= 1) {
            return res.send({
                status: 2,
                msg: '用户名已存在'
            })
        }
    })
    // 查询邮箱是否存在
    const selectEmail = 'SELECT * FROM user WHERE email=?';
    db(selectEmail, req.body.email, result => {
        if (result.length >= 1) {
            return res.send({
                status: 2,
                msg: '邮箱已存在'
            })
        }
    })
    const insertUser = 'INSERT INTO user set ?';
    req.body.password = bcrypt.hashSync(req.body.password, 10);//自定义密码复杂程度
    const { username, email, password } = req.body;
    db(insertUser, { username, email, password }, result => {
        if (result.affectedRows === 1) {
            return res.send({
                status: 0,
                msg: '注册成功'
            })
        }
        res.send({
            status: 2,
            msg: '注册失败'
        })
    })
}