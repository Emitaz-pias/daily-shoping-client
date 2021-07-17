import React, { useContext, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Orders.css";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import { UsersContext } from "../../App";
import { useState } from "react";
const Orders = () => {
  const { user } = useContext(UsersContext);
  const [loggedInUser, setLoggedInUser] = user;
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/orders?email=${loggedInUser.email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log("orders", orders);
  return (
    <div>
      <Header />
      {/* full order page */}
      <div>
        <h2 className="mt-2 mb-3" style={{ color: "#363958" }}>
          here is Your Orders!!
        </h2>
        {/* full shadow box */}
        <div className="row  shadow p-3 mb-5 bg-body rounded">
          {/* headers with felx and gray color*/}
          <div className="col  detailsHeaderContainer pl-1 pr-2  d-flex justify-content-between">
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
              <div className="qtyPriceContainerHeader  mr-5 pr-2 w-50 d-flex justify-content-between">
                <h6>Email</h6>

                <h6>Adress</h6>
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
          {orders.map((order) => (
            <div className="col  detailsContainer pl-1 pr-5 d-flex justify-content-between">
              <div className="descriptionContainerHeader">
                <h6>{order.name}</h6>
              </div>
              <div className="qtyPriceContainerHeader  w-25 d-flex justify-content-around">
                <h6>1 kg{order.weight}</h6>

                <h6>$400{order.price}</h6>
              </div>
              {/* owersDetails */}
              <div className="col-md-5 d-flex  justify-content-around">
                <div className=" descriptionContainerHeader  ">
                  <h6>Emtiaz pias {order.name}</h6>
                </div>
                <div className="qtyPriceContainerHeader  w-75 ml-5 pl-5 d-flex justify-content-around">
                  <h6>Emtiazpias@gmailcom como com ocmoc com {order.email}</h6>
                  <h6 className="pl-5">
                    Pirujali Gazipur dhaka bangladesh {order.address}
                  </h6>
                </div>
              </div>
              {/* orderDetails */}
              <div className="col-md-3 ">
                <div className="qtyPriceContainerHeader  w-75  d-flex justify-content-between">
                  <h6>{order.orderDate}</h6>

                  <h6 className="pl-5">{order.deliveryDate}</h6>
                </div>
              </div>
            </div>
          ))}
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
