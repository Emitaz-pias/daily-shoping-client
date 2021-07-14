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
import Addproduct from "./Components/Addproduct/Addproduct";
import ManageProducts from "./Components/ManageProducts/ManageProducts";
export const UsersContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedProduct, setSeltectedProduct] = useState({});
  const [signInWithEamilAndPssword, setSignInWithEamilAndPssword] = useState(
    () => () => console.log("default blank function")
  );
  console.log("this is from app ", signInWithEamilAndPssword);
  return (
    <UsersContext.Provider
      value={{
        user: [loggedInUser, setLoggedInUser],
        product: [selectedProduct, setSeltectedProduct],
        logingWithEamil: [
          signInWithEamilAndPssword,
          setSignInWithEamilAndPssword,
        ],
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
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <PrivateRoute exact path="/addProduct">
            <Addproduct></Addproduct>
          </PrivateRoute>
          <PrivateRoute path="/manageProducts">
            <ManageProducts />
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
