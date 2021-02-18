import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreators as registerActionCreators } from './store'
import { actionCreators as flashActionCreators} from '../Flash/store'
import { bindActionCreators } from 'redux'
import shortid from 'shortid'
import classnames from 'classnames'
class Register extends Component {
    state = {
        userInfo: {
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        },
        errMsg: []
    }
    // 提交
    handleSubmit = async e => {
        e.preventDefault();//阻止默认提交行为
        this.setState({errMsg:[]});
        const { data } = await this.props.registerFn.registerAc(this.state.userInfo)
        if (data.status === 1) {
            this.setState({
                errMsg: data.msg
            })
        }
        if(data.status ===2){
            this.props.flashFn.addFlashAc({
                type:'alert-warning',
                text:data.msg,
                id:shortid.generate()
            })
        }
        if(data.status === 0 ){
            this.props.flashFn.addFlashAc({
                type:'alert-primary',
                text:data.msg,
                id:shortid.generate()
            })
            // 这里可以设置跳转
            // this.props.history.push('/login')
        }
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
        const { username, email, password, passwordConfirm } = this.state.userInfo
        const { errMsg } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text"
                        className={classnames("form-control", {
                            "is-invalid": errMsg[0] === "username",
                        })}
                        id="username" name="username" defaultValue={username} onChange={this.handleChange} />
                    <small className="form-text text-muted">
                        {errMsg[0] === 'username' && errMsg[1]}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className={classnames("form-control", {
                        "is-invalid": errMsg[0] === "email",
                    })} id="email" name="email" aria-describedby="emailHelp" defaultValue={email} onChange={this.handleChange} />
                    <small className="form-text text-muted">
                        {errMsg[0] === 'email' && errMsg[1]}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className={classnames("form-control", {
                        "is-invalid": errMsg[0] === "password",
                    })} id="password" name="password" defaultValue={password} onChange={this.handleChange} />
                    <small className="form-text text-muted">
                        {errMsg[0] === 'password' && errMsg[1]}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirm">passwordConfirm</label>
                    <input type="password" className={classnames("form-control", {
                        "is-invalid": errMsg[0] === "passwordConfirm",
                    })} id="passwordConfirm" name="passwordConfirm" defaultValue={passwordConfirm} onChange={this.handleChange} />
                    <small className="form-text text-muted">
                        {errMsg[0] === 'passwordConfirm' && errMsg[1]}
                    </small>
                </div>
                <button type="submit" className="btn btn-primary">sign up</button>
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        registerData: state.register
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerFn: bindActionCreators(registerActionCreators, dispatch),
        flashFn:bindActionCreators(flashActionCreators,dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)
// 映射state对象，映射actionCreatorsduix
