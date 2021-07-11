import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UsersContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(UsersContext);
  const [loggedInUser] = user;
  // console.log(loggedInUser);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
