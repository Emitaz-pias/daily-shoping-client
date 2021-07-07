import React from "react";
import { Container, Button } from "react-bootstrap";

import "./LogIn.css";
const LogIn = () => {
  const handleToggleForm = () => {
    const loginFrom = document.getElementById("logInFormWrapper");
    const loginFromHidden = (loginFrom.style.display = "none");
  };
  return (
    <Container>
      <div id="logInFormWrapper">
        <div className="d-flex justify-content-around  mt-5">
          <div className="m-5 p-2 logInForm">
            <h3 className="ml-5">Login</h3>
            <div className="p-5">
              <form action="">
                <input
                  className="inputStyles form-control"
                  type="text"
                  placeholder="Username or Email"
                />
                <br />
                <input
                  className="inputStyles form-control"
                  type="password"
                  placeholder="Password"
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
              <Button className="customButton">Login</Button>
              <p className="mt-3 text-center">
                Don't have an account?
                <a
                  onClick={handleToggleForm}
                  className="customText"
                  href="#createAccount"
                >
                  Create an Account
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="createAccountWrapper" className="m-5 p-2">
        <div className=" ml-5 p-5">
          <div className="createAccFrom ml-5">
            <h3 className="ml-2 p-3">Create an account</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LogIn;
