import React from "react";
import "./Checkout.css";
import { Container, Button } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { UsersContext } from "../../App";

const Checkout = () => {
  const { product } = useContext(UsersContext);
  const [selectProduct] = product;
  console.log("from checkout", selectProduct);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleCheckOut = () => console.log("thi si chelkout");
  return (
    <Container>
      <Header />
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
        {/* loaded orders from database */}
        <div className="detailsContainer pl-2 pr-3  d-flex justify-content-between">
          <div className="descriptionContainer ">
            <h6 className="boldedFont">Products details is alur vorta</h6>
          </div>
          <div className="qtyPriceContainer ml-5 pl-5 w-50 d-flex justify-content-between">
            <h6 className="boldedFont">10000gm</h6>

            <h6 className="pl-5 boldedFont">$553</h6>
          </div>
        </div>
        <div className="calculationDiv boldedFont">
          <hr className="bg-secondary.bg-gradient w-100" />
          <div className="d-flex justify-content-between">
            <h6 className="boldedFont">Total</h6>
            <h6 className="boldedFont">$500</h6>
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
      {/* orderSubmitForm */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("Name", { required: true, maxLength: 80 })}
        />
        <input
          type="email"
          placeholder="Eamil"
          {...register("Eamil", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="text"
          placeholder="Address"
          {...register("Address", { required: true, maxLength: 12 })}
        />

        <input type="submit" />
      </form>
    </Container>
  );
};

export default Checkout;
