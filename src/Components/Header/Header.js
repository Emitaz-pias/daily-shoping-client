import React from "react";
import "./Header.css";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
const Header = () => {
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
          <Nav.Link className=" mr-3 pr-3  customFont" to="/Home">
            Home
          </Nav.Link>
          <Nav.Link className=" mr-3 pr-3 customFont" to="/Oders">
            Orders
          </Nav.Link>
          <Nav.Link className="mr-3 pr-3 customFont" to="/Admin">
            Admin
          </Nav.Link>
          <Nav.Link className="mr-3 pr-3 customFont" to="/Deals">
            Deals
          </Nav.Link>
          <Button className="mr-3 pr-3  customColor" to="/Login">
            LogIn
          </Button>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
