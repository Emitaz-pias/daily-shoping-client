import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UsersContext } from "../../App";
import "./Cards.css";
const Cards = (props) => {
  // const { productName, price, quantity, productImage } = props.product;
  const { product } = useContext(UsersContext);
  const [products, setProducts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((pd) => setProducts(pd));
      });
  }, []);
  console.log("this is a product name is  ", products.name);
  const [selectProduct, setSelectProduct] = product;

  const handleBuyNow = (pd) => {
    // pass the product selected by buy now button
    setSelectProduct(pd);
  };

  return (
    <Container>
      <h1>this is card</h1>
      {/* <div
        className="shadow ml-2 mt-4   mb-5 bg-body rounded"
        style={{ float: "left" }}
      >
        <Card
          className="p-3"
          style={{ width: "22rem", height: "30rem", border: "none" }}
        >
          <Card.Img variant="top" src={productImage} />
          <Card.Body>
            <Card.Title>
              {productName} -{quantity}
            </Card.Title>
          </Card.Body>
          <div className="d-flex justify-content-between align-items-center ">
            <h2 className="customTextColor">{price}</h2>
            <Link to="/checkout">
              <Button
                onClick={() => handleBuyNow(props.product)}
                className="customBuyNowButton"
              >
                Buy now
              </Button>
            </Link>
          </div>
        </Card>
      </div> */}
    </Container>
  );
};

export default Cards;
