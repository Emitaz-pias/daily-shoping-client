import React, { useEffect, useState } from "react";
import "./Home.css";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import { InputGroup, FormControl, Button, Spinner } from "react-bootstrap";

const Home = () => {
  const handleSearchBtn = () => {
    const searchedText = document.getElementById("searchInputField").value;
  };
  const [products, setProducts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  // load data from database

  useEffect(() => {
    fetch("https://dailyshopping.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setDataLoaded(true);
        setProducts(data);
      });
  }, []);
  return (
    <div className="container">
      {dataLoaded ? (
        <div>
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
        </div>
      ) : (
        <div className="d-flex justify-content-center align-items-center mt-5 pt-5">
          <Spinner animation="border" variant="success" />
        </div>
      )}

      {products.map((pd) => (
        <Cards product={pd} />
      ))}
    </div>
  );
};

export default Home;
