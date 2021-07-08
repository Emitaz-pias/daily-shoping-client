import React from "react";
import { Container } from "react-bootstrap";
import "./Orders.css";
import Header from "../../Components/Header/Header";
const Orders = () => {
  return (
    <Container>
      <Header />
      <h2 className="m-5" style={{ color: "#363958" }}>
        Checkout
      </h2>
      <div className="detailsContainer  d-flex justify-content-between">
        <div className="descriptionContainer">
          {" "}
          <h6>Description</h6>
        </div>
        <div className="qtyPriceContainer w-25 d-flex justify-content-between">
          <h6>Quantity</h6>

          <h6 className="pl-5">Price</h6>
        </div>
      </div>
    </Container>
  );
};

export default Orders;
