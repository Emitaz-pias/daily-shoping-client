import React from "react";
import "./Checkout.css";
import { Container, Button } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UsersContext } from "../../App";
import { useState } from "react";

const Checkout = () => {
  const { product, user } = useContext(UsersContext);
  const [loggedInUser] = user;
  const [selectProduct] = product;
  const { productName, price, quantity } = selectProduct;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [orderClicked, setOrderClicked] = useState(false);

  const handleCheckOut = () => {
    setOrderClicked(true);
  };
  const onPlaceOrder = (user) => {
    const order = { ...selectProduct, user };
    const newOrder = order;
    document.getElementById("orderArea").style.display = "none";
  };
  return (
    <Container>
      <Header />

      {/* orderSubmitForm */}
      {orderClicked ? (
        <div id="orderArea">
          <h2>Hey, {loggedInUser.name} Your Order is : </h2>

          <div className="mt-5">
            <div className="d-flex shadow-sm p-2 mb-3 bg-rounded justify-content-around">
              <h4>Product Name</h4>
              <h4>Quantity</h4>
              <h4>Price</h4>
            </div>
            <div className="d-flex justify-content-around">
              <h4>{productName}</h4>
              <h4>{quantity}</h4>
              <h4>{price}</h4>
            </div>
            <div className="w-75 ml-5 pl-5" id="submitForms">
              <form
                id="placeOrderForm"
                className="mt-5 ml-5 pl-5"
                onSubmit={handleSubmit(onPlaceOrder)}
                action=""
              >
                <input
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  {...register("Name", { required: true, maxLength: 80 })}
                />
                <br />
                <input
                  className="form-control"
                  type="email"
                  placeholder="Eamil"
                  {...register("Eamil", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <br />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address"
                  {...register("Address", { required: true, maxLength: 12 })}
                />
                <br />
                <input
                  className="form-control customColor  orderPlaceBtn"
                  type="submit"
                  value="Place Order"
                />
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="m-5" style={{ color: "#363958" }}>
            Checkout
          </h2>
          {/* full shadow box */}
          <div className="shadow ml-5 p-3 mb-5 bg-body rounded">
            {/* headers with felx and gray colored */}
            <div className="detailsHeaderContainer pl-2 pr-3  d-flex justify-content-between">
              <div className="descriptionContainerHeader">
                <h6>Description</h6>
              </div>
              <div className="qtyPriceContainerHeader ml-5 pl-5 w-50 d-flex justify-content-between">
                <h6>Quantity</h6>

                <h6 className="pl-5">Price</h6>
              </div>
            </div>
            <hr className="bg-secondary.bg-gradient w-100" />
            {/* oreders from user*/}
            <div className="detailsContainer pl-2 pr-3  d-flex justify-content-between">
              <div className="descriptionContainer ">
                <h6 className="boldedFont">{productName}</h6>
              </div>
              <div className="qtyPriceContainer ml-5 pl-5 w-50 d-flex justify-content-between">
                <h6 className="boldedFont">{quantity}</h6>

                <h6 className="pl-5 boldedFont">{price}</h6>
              </div>
            </div>
            <div className="calculationDiv boldedFont">
              <hr className="bg-secondary.bg-gradient w-100" />
              <div className="d-flex justify-content-between">
                <h6 className="boldedFont ml-2">Total</h6>
                <h6 className="boldedFont mr-3">{price}</h6>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <Button
              onClick={handleCheckOut}
              className="mr-3 pr-3  customColor"
              to="/checkout"
            >
              <Link className="customLink">checkout</Link>
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Checkout;
