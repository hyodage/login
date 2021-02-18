import { useState } from 'react'
import shortid from 'shortid'
import classnames from 'classnames'
import { useAddMsg } from '../store/action'
import { useDoRegister } from "../store/action";
function Register() {
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [passwordConfirm, setpasswordConfirm] = useState('')
    const [errMsg, seterrMsg] = useState([])
    const requestData = { username, email, password, passwordConfirm }
    const doRegister = useDoRegister();
    const addMsg = useAddMsg();
    const handleSubmit = async e => {
        e.preventDefault()
        seterrMsg([])
        const { data } = await doRegister(requestData)
        if (data.status === 1) {
            // 表单中间件验证错误格式
            seterrMsg(data.msg)
        }
        if (data.status === 2) {
            // 用户名存在等信息
            addMsg({
                type: 'alert-warning',
                text: data.msg,
                id: shortid.generate()
            })
        }
        if (data.status === 0) {
            // 注册成功
            addMsg({
                type: 'alert-warning',
                text: data.msg,
                id: shortid.generate()
            })
        }
    }
    return <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" className={classnames("form-control", {
                "is-invalid": errMsg[0] === "username",
            })} id="username" value={username} onChange={({ target }) => {
                setusername(target.value)
            }} />
            <small className="form-text text-muted">
                {errMsg[0] === 'username' && errMsg[1]}
            </small>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className={classnames("form-control", {
                "is-invalid": errMsg[0] === "email",
            })} id="email" aria-describedby="emailHelp" value={email} onChange={({ target }) => {
                setemail(target.value)
            }} />
            <small className="form-text text-muted">
                {errMsg[0] === 'email' && errMsg[1]}
            </small>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className={classnames("form-control", {
                "is-invalid": errMsg[0] === "password",
            })} id="password" value={password} onChange={({ target }) => {
                setpassword(target.value)
            }} />
            <small className="form-text text-muted">
                {errMsg[0] === 'password' && errMsg[1]}
            </small>
        </div>
        <div className="form-group">
            <label htmlFor="passwordConfirm">passwordConfirm</label>
            <input type="password" className={classnames("form-control", {
                "is-invalid": errMsg[0] === "passwordConfirm",
            })} id="passwordConfirm" value={passwordConfirm} onChange={({ target }) => {
                setpasswordConfirm(target.value)
            }} />
            <small className="form-text text-muted">
                {errMsg[0] === 'passwordConfirm' && errMsg[1]}
            </small>
        </div>
        <button type="submit" className="btn btn-primary">sign up</button>
    </form>
}
export default Register