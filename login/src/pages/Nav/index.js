import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { logout } from '../Login/store/actionCreators'
class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {
                        this.props.loginData.isAuth
                            ?
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/personal">Personal</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="##" onClick={this.props.logout}>logout</a>
                                </li>
                            </ul>
                            :
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">sign up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">sign in</Link>
                                </li>
                            </ul>
                    }
                </div>
            </nav>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        loginData: state.login
    }
}
export default connect(mapStateToProps, {logout})(Nav)