import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import { InputGroup, FormControl, Container, Row } from "react-bootstrap";
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <InputGroup size="lg" className="mb-3 w-50">
          <FormControl
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  );
};

export default Home;
