import { Link } from "react-router-dom"
import { navs,afterLoginNavs } from "../router";
import {useSelector} from 'react-redux'
import {useLogout} from '../store/action/index'
function Nav() {
    const {isAuth} = useSelector(state=>state.login)
    const logout = useLogout()
    const doLogout = ()=>{
        localStorage.removeItem('@#@TOKEN')
        logout()
    } 
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {
                isAuth
                ?
                <ul className="navbar-nav mr-auto">
                    {afterLoginNavs.map((item, index) => {
                        return <li className="nav-item" key={index}>
                            <Link className="nav-link" to={item.to}>{item.title}</Link>
                        </li>
                    })}
                    <li className="nav-item">
                        <a className="nav-link" href="##" onClick={doLogout}>logout</a>
                    </li>
                </ul>
                :
                <ul className="navbar-nav mr-auto">
                    {navs.map((item, index) => {
                        return <li className="nav-item" key={index}>
                            <Link className="nav-link" to={item.to}>{item.title}</Link>
                        </li>
                    })}
                </ul>
            }
        </div>
    </nav>
}
export default Nav