import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./LogIn.css";
import PopUpSign from "../PopUp/PopUpSign";
import { UsersContext } from "../../App";
import { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import AuthManager from "../AuthManager/AuthManager";

const LogIn = () => {
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState(false);
  const { user, createUserEamil, logingWithEamil, loginWithPopUp } =
    useContext(UsersContext);
  const [loggedInUser, setLoggedInUser] = user;
  const [signInWithEamilAndPssword, setSignInWithEamilAndPssword] =
    logingWithEamil;
  const [createUser, setCreateUser] = createUserEamil;

  // log in button handler
  const handleLogInBtn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    signInWithEamilAndPssword(email, password);
    history.replace(from);
  };

  // create account button handler
  const handleCreateAccount = () => {
    const email = document.getElementById("createAccEamil").value;
    const password = document.getElementById("createAccPass").value;
    createUser(email, password);
    alert("congratulaion!! your has been created successfully now log in...");
    setNewUser(false);
  };

  // google sign in button

  return (
    <Container>
      <div className="mt-3">
        <h1 style={{ color: "#363958", fontFamily: "Bebas Neue" }}>
          <Link className="customLink" to="/">
            {" "}
            Dailay Shopping
          </Link>
        </h1>
      </div>
      {!newUser && (
        <div id="createAccountWrapper">
          <div className="d-flex justify-content-around">
            <div className="p-2 logInForm">
              <h3 className="ml-5">Login</h3>
              <div className="p-4">
                <form action="">
                  <input
                    className="inputStyles form-control"
                    type="text"
                    placeholder="Username or Email"
                    id="email"
                  />
                  <br />
                  <input
                    className="inputStyles form-control"
                    type="password"
                    placeholder="Password"
                    id="pass"
                  />
                  <br />
                  <span className="d-flex align-items-center justify-content-between">
                    <label htmlFor="">
                      {" "}
                      <input type="checkbox" />
                      <span className="ml-1"> Remember Me</span>
                    </label>
                    <a className="customText" href="/">
                      Forgot Password
                    </a>
                  </span>
                </form>{" "}
                <br />
                <Button onClick={handleLogInBtn} className="customButton">
                  Login
                </Button>
                <p className="mt-3 text-center">
                  Don't have an account?
                  <a
                    onClick={() => setNewUser(true)}
                    className="customText"
                    href="#createAccountWrapper"
                  >
                    Create an Account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {newUser && (
        <div id="createAccountWrapper">
          <div className="d-flex align-items-center justify-content-around">
            <div className="createAccFrom">
              <h3 className="ml-5">Create an account</h3>
              <div className="p-4">
                <form action="">
                  <input
                    type="text"
                    placeholder="Name"
                    className="inputStyles form-control"
                  />
                  <br />
                  <input
                    type="text"
                    placeholder="Email"
                    className="inputStyles form-control"
                    id="createAccEamil"
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    className="inputStyles form-control"
                    id="createAccPass"
                  />
                  <br />
                  <input
                    className="inputStyles form-control"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </form>
                <br />
                <Button onClick={handleCreateAccount} className="customButton">
                  Create Account
                </Button>
                <p className="mt-3 text-center">
                  Already have an account?{" "}
                  <a
                    onClick={() => setNewUser(false)}
                    className="customText"
                    href="#createAccountWrapper"
                  >
                    Login
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="d-flex justify-content-center">
        <div className="hrTextContainer">
          <div className="hrBefore">
            <hr className="hrLine1" />
          </div>
          <div className="hrText">or</div>
          <div className="hrAfter">
            <hr className="hrLine2" />
          </div>
        </div>
      </div>
      <PopUpSign />
      <AuthManager />
    </Container>
  );
};

export default LogIn;
