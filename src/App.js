import "./App.css";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Admin from "./Components/Admin/Admin";
import LogIn from "./Components/LogIn/LogIn";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";
export const UsersContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UsersContext.Provider value={{ user: [loggedInUser, setLoggedInUser] }}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Router path="*">
            <NotFound></NotFound>
          </Router>
        </Switch>
      </Router>
    </UsersContext.Provider>
  );
}

export default App;
