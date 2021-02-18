import {combineReducers} from 'redux'
import {reducer as registerReducer} from '../pages/Register/store'
import {reducer as flashReducer} from '../pages/Flash/store'
import {reducer as loginReducer} from '../pages/Login/store'
// 组合所有的reducer
export default combineReducers({
    register:registerReducer,
    flash:flashReducer,
    login:loginReducer
})