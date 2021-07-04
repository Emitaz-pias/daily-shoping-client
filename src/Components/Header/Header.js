import React from "react";
import "./Header.css";
import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <Container>
      <Navbar
        className="bg-dark d-flex justify-content-between align-items-center"
        expand="lg"
        fixed="top"
        variant="light"
      >
        <Navbar.Brand className="bg-danger" href="#home">
          <h1>Dailay Shopping</h1>
        </Navbar.Brand>
        <Nav className="ml-5 pl-5  bg-success">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
    </Container>
  );
};

export default Header;
