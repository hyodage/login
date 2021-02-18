import * as actionTypes from './actionTypes'
import isEmpty from 'loadsh/isEmpty'
const initState = {
    isAuth:false,
    user:{}
}
const LoginReducer = (state=initState,action) => {
    switch (action.type) {
        case actionTypes.SYNC_STATE_INFO:
            return {
                isAuth:!isEmpty(action.payload),
                user:action.payload
            }
        default:
            return state;
    }
}
export default LoginReducer