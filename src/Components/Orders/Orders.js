import React from "react";
import { Container, Button } from "react-bootstrap";
import "./Orders.css";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
const Orders = () => {
  return (
    <div>
      <Header />
      <div style={{ border: "1px solid red" }}>
        <h2 className="mt-2 mb-3" style={{ color: "#363958" }}>
          Your Orders!!
        </h2>
        {/* full shadow box */}
        <div className="row customWidth shadow p-3 mb-5 bg-body rounded">
          {/* headers with felx and gray color*/}
          <div className="col  detailsHeaderContainer pl-1 pr-3  d-flex justify-content-between">
            <div className="descriptionContainerHeader">
              <h6>Description</h6>
            </div>
            <div className="qtyPriceContainerHeader pl-5 w-50 d-flex justify-content-around">
              <h6>Quantity</h6>

              <h6>Price</h6>
            </div>
            {/* owersDetailsHeader */}
            <div className="col-md-5 d-flex  justify-content-around">
              <div className=" descriptionContainerHeader ">
                <h6>Owner's Name</h6>
              </div>
              <div className="qtyPriceContainerHeader  pl-2 w-50 d-flex justify-content-between">
                <h6>Email</h6>

                <h6 className="pl-5">Adress</h6>
              </div>
            </div>
            {/* orderDetailsHeader */}
            <div className="col-md-3 ">
              <div className="qtyPriceContainerHeader  w-50 d-flex justify-content-evenly">
                <h6>Order Date</h6>

                <h6 className="pl-5">Delivery Date</h6>
              </div>
            </div>
          </div>

          <hr className="bg-secondary.bg-gradient w-100" />

          {/* loaded orders from database */}
          <div className="col  detailsContainer pl-1 pr-3  d-flex justify-content-between">
            <div className="descriptionContainerHeader">
              <h6>Alur vorta murgir dim</h6>
            </div>
            <div className="qtyPriceContainerHeader pl-5 w-50 d-flex justify-content-around">
              <h6>1 kg 2 case</h6>

              <h6>$400</h6>
            </div>
            {/* owersDetails */}
            <div className="col-md-5 border border-danger d-inline-flex">
              <div className=" descriptionContainerHeader ">
                <h6>Emtiaz pias</h6>
              </div>
              <div className="qtyPriceContainerHeader  pl-5 w-50 d-flex justify-content-between">
                <h6>Emtiazpias@gmailcom</h6>
                <h6 style={{ overflowWrap: "anywhere" }} className="pl-5">
                  Pirujali Gazipur
                </h6>
              </div>
            </div>
            {/* orderDetails */}
            <div className="col-md-3 ">
              <div className="qtyPriceContainerHeader  w-50 d-flex justify-content-evenly">
                <h6>Order Date</h6>

                <h6 className="pl-5">Delivery Date</h6>
              </div>
            </div>
          </div>
          {/* 
        <div className="calculationDiv boldedFont">
          <hr className="bg-secondary.bg-gradient w-100" />
          <div className="d-flex justify-content-between">
            <h6 className="boldedFont">Total</h6>
            <h6 className="boldedFont">$500</h6>
          </div>
        </div> */}
        </div>
        <div className="d-flex justify-content-end">
          <Button className="mr-3 pr-3  customColor" to="/checkout">
            <Link className="customLink" to="/chekout">
              Cancel
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
