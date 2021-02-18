import axios from '../../utils/requests'
import { useDispatch } from "react-redux";
// 注册
function useDoRegister() {
  return data =>{
    return axios.post('/api/register', data)
  }
}
// 登录
function useDoLogin(){
  return data =>{
    return axios.post('/api/login',data)
  }
}
// 同步登录信息
function useAsyncInfo(){
  const dispatch = useDispatch()
  return (data)=>{
    dispatch({
      type:'SYNC_STATE_INFO',
      payload:data
    })
  }
}
// 退出登录
function useLogout(){
  const dispatch = useDispatch()
  return ()=>{
    dispatch({
      type:'SYNC_STATE_INFO',
      payload:{}
    })
  }
}
// 添加错误提示
function useAddMsg(){
  const dispatch = useDispatch()
  return (data)=>{
    dispatch({
      type:"ADD_FLASH",
      payload:data
    })
  }
} 
// 删除错误提示
function useDelMsg(){
  const dispatch = useDispatch()
  return (id)=>{
    dispatch({
      type:"DELETE_FLASH",
      id:id
    })
  }
} 

export { useDoRegister,useAddMsg,useDelMsg,useDoLogin,useAsyncInfo,useLogout}