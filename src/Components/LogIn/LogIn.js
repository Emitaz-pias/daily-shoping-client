import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";

import "./LogIn.css";
const LogIn = () => {
  const [existingUser, setexixtingUser] = useState(false);
  const [newUser, setNewUser] = useState(false);
  return (
    <Container>
      {!newUser && (
        <div id="createAccountWrapper">
          <div className="d-flex justify-content-around">
            <div className="m-4 p-2 logInForm">
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
          <div className="d-flex align-items-center justify-content-around p-1">
            <div className="createAccFrom mt-4">
              <h3 className="ml-5">Create an account</h3>
              <div className="p-5">
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
                  />
                  <br />
                  <input
                    type="password"
                    placeholder="Password"
                    className="inputStyles form-control"
                  />
                  <br />
                  <input
                    className="inputStyles form-control"
                    type="password"
                    placeholder="Confirm Password"
                  />
                </form>
                <br />
                <Button className="customButton">Create Account</Button>
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
    </Container>
  );
};

export default LogIn;
