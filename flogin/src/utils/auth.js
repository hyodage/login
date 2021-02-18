import shortid from 'shortid'
import { useAddMsg } from '../store/action'
import { useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom"
function Guards(props) {
    const { Cmp } = props
    const history = useHistory();
    console.log(history)
    const { isAuth } = useSelector(state => state.login)
    const addMsg = useAddMsg()
    if (!isAuth) {
        addMsg({
            type: 'alert-primary',
            text: '请登录',
            id: shortid.generate()
        })
        return <Redirect to="/login" />
    }
    return <Cmp />
}
function Auth(Cmp) {
    return () => {
        return <Guards Cmp={Cmp} />
    }
}
export default Auth