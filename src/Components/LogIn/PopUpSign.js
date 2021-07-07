import { Button } from "react-bootstrap";
import React from "react";

const PopUpSign = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="">
        <Button className="mt-4" size="lg">
          Continue with google
        </Button>
        <br />
        <Button className="mt-4" size="lg">
          Continue with facebook{" "}
        </Button>
      </div>
    </div>
  );
};

export default PopUpSign;
