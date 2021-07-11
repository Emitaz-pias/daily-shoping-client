import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import fakeData from "../fakeData/fakeData";
import Cards from "../Cards/Cards";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Home = () => {
  const handleSearchBtn = () => {
    const searchedText = document.getElementById("searchInputField").value;
  };
  return (
    <div className="container">
      <div className="">
        <Header />
      </div>
      <div className="ml-5 pl-5">
        <div className="mt-5 ml-5 pl-5">
          <InputGroup
            id="searchContainer"
            size="lg"
            className="mb-3 w-50 ml-5 pl-5"
          >
            <FormControl
              id="searchInputField"
              placeholder="&#xF002; Search Items  "
              aria-label="searchInput"
              onKeyUp={(event) => {
                if (event.keyCode === 13) {
                  handleSearchBtn();
                  event.target.value = " ";
                }
              }}
            />
            <Button
              id="searchButton"
              onClick={() => {
                handleSearchBtn();
                document.getElementById("searchInputField").value = "";
              }}
              className="customColor"
            >
              Search
            </Button>
          </InputGroup>
        </div>
      </div>

      <Cards />
    </div>
  );
};

export default Home;
