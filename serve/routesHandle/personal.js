module.exports = (req,res)=>{
    res.send({
        status:0,
        msg:'请求成功',
        username:req.user.username
    })
}