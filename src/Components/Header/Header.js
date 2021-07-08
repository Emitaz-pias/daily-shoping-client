import React from "react";
import "./Header.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  const handleLogIn = () => {
    console.log("log in clicked");
  };
  return (
    <Container>
      <Navbar
        className="d-flex justify-content-between align-items-center"
        expand="lg"
        sticky="top"
        variant="light"
      >
        <Navbar.Brand className="ml-2 mt-1" href="#home">
          <h1 style={{ color: "#363958", fontFamily: "Bebas Neue" }}>
            <Link className="customLink" to="/">
              {" "}
              Dailay Shopping
            </Link>
          </h1>
        </Navbar.Brand>
        <Nav className="mr-2 pr-3 p-2 mb-2 h6">
          <Nav.Link className=" mr-3 pr-3  customFont" to="/home">
            <Link className="customLink" to="/home">
              {" "}
              Home{" "}
            </Link>
          </Nav.Link>
          <Nav.Link className=" mr-3 pr-3 customFont">
            <Link className="customLink" to="/orders">
              Orders{" "}
            </Link>
          </Nav.Link>
          <Nav.Link className="mr-3 pr-3 customFont" to="/admin">
            <Link className="customLink" to="/admin">
              Admin
            </Link>
          </Nav.Link>
          <Nav.Link className="mr-3 pr-3 customFont" to="/deals">
            <Link className="customLink" to="/deals">
              {" "}
              Deals
            </Link>
          </Nav.Link>
          <Link className="customLink border border-danger" to="/logIn">
            <Button
              onClick={handleLogIn}
              className=" customColor logInBtn"
              to="/logIn"
            >
              LogIn
            </Button>
          </Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
