import auth from "../utils/auth"
import IndexPage from "../views/Index";
import LoginPage from "../views/Login";
import RegisterPage from "../views/Register";
import UndefinedPage from "../views/Undefined";
import Personal from "../views/Personal";
const routes = [{
  path: "/",
  exact: true,
  component:IndexPage
}, {
  path: "/login",
  exact: true,
  component:LoginPage,
}, {
  path: "/register",
  exact: true,
  component:RegisterPage
}, {
  path: "/personal",
  exact: true,
  component:auth(Personal)
}, {
  path: "",
  exact: false,
  component:UndefinedPage
}];
const navs = [
  {
    title: "Home",
    to: "/"
  }, {
    title: "sign up",
    to: "/register"
  }, {
    title: "sign in",
    to: "/login"
  }
];

const afterLoginNavs = [
  {
    title: "Home",
    to: "/"
  }, {
    title: "Personal",
    to: "/personal"
  }
];
export { routes, navs ,afterLoginNavs};