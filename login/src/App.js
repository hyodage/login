import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./pages/Nav";//导航
import Home from "./pages/Home";//首页
import Login from "./pages/Login";//登录
import Register from "./pages/Register";//注册
import Flash from "./pages/Flash";//提示
import Personal from "./pages/Personal";//个人中心
import Auth from "./utils/auth"
export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Flash />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/personal" exact component={Auth(Personal)} />
        </Switch>
      </Router>
    )
  }
}

