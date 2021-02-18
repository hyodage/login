import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import decode from 'jwt-decode'
import shortid from 'shortid'
import { actionCreators as loginActionCreators } from './store'
import { actionCreators as flashActionCreators} from '../Flash/store'
class Login extends Component {
    state = {
        userInfo: {
            username: '',
            password: ''
        },
        errMsg: []
    }
    // 提交
    handleSubmit = async e =>{
        e.preventDefault();
        const {data} = await this.props.loginFn.loginAc(this.state.userInfo);
        if(data.status === 0){
            // 存储token到本地
            localStorage.setItem('@#@TOKEN',data.token);
            // 同步用户状态和用户信息到Redux
            this.props.loginFn.syncInfoAc(decode(data.token));
            this.props.history.push('/')
            this.props.flashFn.addFlashAc({
                type:'alert-primary',
                text:data.msg,
                id:shortid.generate()
            })
            return;
        }
        // 登录失败
        this.props.flashFn.addFlashAc({
            type:'alert-warning',
            text:data.msg,
            id:shortid.generate()
        })
    }
    // 绑定数据
    handleChange = e => {
        this.setState({
            userInfo: {
                ...this.state.userInfo,
                [e.target.name]: e.target.value
            }
        })
    }
    render() {
        const { username, password } = this.state.userInfo
        // const { errMsg } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" name="username" defaultValue={username} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" name="password" defaultValue={password} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">sign in</button>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginData: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginFn: bindActionCreators(loginActionCreators, dispatch),
        flashFn: bindActionCreators(flashActionCreators,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)