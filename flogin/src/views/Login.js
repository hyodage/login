import {useState} from 'react'
import decode from 'jwt-decode'
import shortid from 'shortid'
import classnames from 'classnames'
import {useDoLogin,useAsyncInfo} from '../store/action'
import { useAddMsg } from '../store/action'
function Login(props) {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [errMsg, seterrMsg] = useState([])
    const requestData = {username,password}
    const dologin = useDoLogin()
    const asyncInfo = useAsyncInfo()
    const addMsg = useAddMsg()
    const handleSubmit = async e=>{
        e.preventDefault()
        seterrMsg([])
        const {data} = await dologin(requestData)
        if(data.status ===0){
            // 存储token到本地
            localStorage.setItem('@#@TOKEN',data.token);
            // 同步用户状态和用户信息到Redux
            asyncInfo(decode(data.token))//同步
            // 跳转
            props.history.push('/')
            // 成功提示信息
            addMsg({
                type: 'alert-warning',
                text: data.msg,
                id: shortid.generate()
            })
            return
        }
        if(data.status ===1){
            // 中间件验证错误
            seterrMsg(data.msg)
            return
        }
        // 数据库验证错误
        if(data.status ===2){
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
            <label htmlFor="password">Password</label>
            <input type="password" className={classnames("form-control", {
                "is-invalid": errMsg[0] === "password",
            })} id="password" value={password} onChange={({target})=>{
                setpassword(target.value)
            }} />
            <small className="form-text text-muted">
                {errMsg[0] === 'password' && errMsg[1]}
            </small>
        </div>
        <button type="submit" className="btn btn-primary">sign in</button>
    </form>
}
export default Login