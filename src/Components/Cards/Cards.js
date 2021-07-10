import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Cards.css";
const Cards = (props) => {
  const { productName, price, quantity, productImage } = props.product;
  return (
    <Container>
      <div
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
              <Button className="customBuyNowButton">Buy now</Button>
            </Link>
          </div>
        </Card>
      </div>
    </Container>
  );
};

export default Cards;
