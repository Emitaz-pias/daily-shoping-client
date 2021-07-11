import React from "react";
import "./Admin.css";
import Addproduct from "../Addproduct/Addproduct";

const Admin = () => {
  return (
    <div>
      <div className="row w-100">
        <div className="col">
          <Addproduct />
        </div>
      </div>
    </div>
  );
};

export default Admin;
