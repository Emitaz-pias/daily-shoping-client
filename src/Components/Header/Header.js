import React from "react";
import "./Header.css";
import { Container, Navbar, Nav } from "react-bootstrap";
const Header = () => {
  return (
    <Container>
      <Navbar
        className="bg-light d-flex justify-content-between align-items-center"
        expand="lg"
        fixed="top"
        variant="light"
      >
        <Navbar.Brand className="ml-3 p-2" href="#home">
          <h1 style={{ fontFamily: "Bebas Neue" }}>Dailay Shopping</h1>
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
