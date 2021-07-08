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

      <div className="shadow ml-5 p-3 mb-5 bg-body rounded">
        <div className="detailsContainer pl-2 pr-3  d-flex justify-content-between">
          <div className="descriptionContainer">
            {" "}
            <h6>Description</h6>
            <p>aklsdjflkajsdflakjsdflkjakldsfj</p>
            <p>aklsdjflkajsdflakjsdflkjakldsfj</p>
            <p>aklsdjflkajsdflakjsdflkjakldsfj</p>
            <p>aklsdjflkajsdflakjsdflkjakldsfj</p>
            <p>aklsdjflkajsdflakjsdflkjakldsfj</p>
            <p>aklsdjflkajsdflakjsdflkjakldsfj</p>
            <p>aklsdjflkajsdflakjsdflkjakldsfj</p>
            <p>aklsdjflkajsdflakjsdflkjakldsfj</p>
          </div>
          <div className="qtyPriceContainer ml-5 pl-5 w-50 d-flex justify-content-between">
            <h6>Quantity</h6>

            <h6 className="pl-5">Price</h6>
          </div>
        </div>
        <div className="calculationDiv">
          <hr className="bg-secondary.bg-gradient w-100" />
          <h6>Total</h6>
        </div>
      </div>
    </Container>
  );
};

export default Orders;
