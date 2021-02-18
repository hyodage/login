import axios from '../utils/requests'
import {useEffect} from 'react'
function Personal(){
    useEffect(() => {
        axios.post('/api/personal').then((res)=>{
            console.log(res)
        })
    }, [])
    return <div>个人中心</div>
}
export default Personal