import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import { InputGroup, FormControl, Button } from "react-bootstrap";
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className=" ml-5 pl-5">
        <div className="row mt-5 ml-5 pl-5">
          <InputGroup size="lg" className="mb-3 w-50 ml-5 pl-5">
            <FormControl
              className="ml-5 pl-5"
              placeholder="Search Items"
              aria-label="searchInput"
            />
            <Button className="customColor ">Search</Button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};

export default Home;
