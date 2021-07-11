import "./App.css";
import Home from "./Components/Home/Home";
import Orders from "./Components/Orders/Orders";
import Admin from "./Components/Admin/Admin";
import LogIn from "./Components/LogIn/LogIn";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";
import Checkout from "./Components/Chceckout/Checkout";
export const UsersContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedProduct, setSeltectedProduct] = useState({});
  return (
    <UsersContext.Provider
      value={{
        user: [loggedInUser, setLoggedInUser],
        product: [selectedProduct, setSeltectedProduct],
      }}
    >
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn></LogIn>
          </Route>
          <PrivateRoute path="/checkout">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <Route path="/admin">
            <Admin />
          </Route>
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
