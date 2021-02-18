import React from 'react'
import { connect } from 'react-redux'
import shortid from 'shortid'
import { addFlashAc } from '../pages/Flash/store/actionCreators'
export default function (Comp) {
    class Auth extends React.Component {
        componentDidMount() {
            // 如果没有登录就跳转到登录页
            if (this.props.isAuth === false) {
                this.props.history.push('/login')
            }
        }
        componentDidUpdate(nextProps) {
            if (!nextProps.isAuth && nextProps.isAuth !== this.props.isAuth) {
                this.props.addFlashAc({
                    type: 'alert-primary',
                    text: '请登录',
                    id: shortid.generate()
                })
                this.props.history.push('/login');
            }
        }
        render() {
            return <Comp {...this.props} />
        }
    }
    const mapStateToprops = state => {
        return {
            isAuth: state.login.isAuth
        }
    }
    return connect(mapStateToprops, { addFlashAc })(Auth)
}