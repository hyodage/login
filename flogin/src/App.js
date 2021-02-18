import { Switch, Route } from "react-router-dom"
import { routes } from './router'
import Nav from './component/Nav'
import Flash from './component/Flash'
function App() {
  return <div>
    <Nav />
    <Flash />
    <Switch>
      {routes.map((item, index) => {
        return <Route
          path={item.path}
          exact={item.exact}
          component={item.component}
          key={index}
        />
      })}
    </Switch>
  </div>
}
export default App;