import React from "react";
import "./Header.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
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
            Dailay Shopping
          </h1>
        </Navbar.Brand>
        <Nav className="mr-2 pr-3 p-2 mb-2 h6">
          <Nav.Link className=" mr-3 pr-3  customFont" to="/home">
            Home
          </Nav.Link>
          <Nav.Link className=" mr-3 pr-3 customFont" to="/orders">
            Orders
          </Nav.Link>
          <Nav.Link className="mr-3 pr-3 customFont" to="/admin">
            Admin
          </Nav.Link>
          <Nav.Link className="mr-3 pr-3 customFont" to="/deals">
            Deals
          </Nav.Link>
          <Button
            onClick={handleLogIn}
            className="mr-3 pr-3  customColor"
            to="/Login"
          >
            LogIn
          </Button>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
