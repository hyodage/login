// import {combineReducers, createStore} from "redux";
// import register from "./reducer/register";
// const store = createStore(combineReducers({register}));
// export default store;
import {combineReducers, createStore,compose} from "redux";
import register from "./reducer/register";
import flash from "./reducer/flash"
import login from "./reducer/login"
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(combineReducers({register,flash,login}),composeEnhancers());
export default store;