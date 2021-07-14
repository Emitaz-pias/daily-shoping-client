import React, { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";

const ManageProducts = () => {
  // loaded products from database
  const [products, setProducts] = useState([]);
  // load product from database
  useEffect(() => {
    fetch("http://localhost:8080/manageProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  // delete product when button is clicked
  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:8080/product/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="row w-100">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col">
        <div id="manageProductsDiv">
          <div className="shadow mt-2  p-3 mb-5 bg-body rounded">
            <h2 style={{ fontWeight: 700 }}>Manage Products</h2>
          </div>
          {/* manage product header */}
          <div className="shadow-sm  p-3 mb-3 bg-body rounded row manageProductsHeader">
            <div className="col-md-4">
              <h5 className="">Product Name</h5>
            </div>
            <div className="col-md-4">
              <h5>Weight</h5>
            </div>
            <div className="col-md-2">
              <h5>Price</h5>
            </div>
            <div className="col-md-2">
              <h5>Action</h5>
            </div>
          </div>

          <div className="">
            {/* single product data row */}
            {products.map((product) => (
              <div className="row p-3">
                <div className="col-md-4">
                  <h5 className="">{product.name}</h5>
                </div>
                <div className="col-md-4">
                  <h5>{product.weight}</h5>
                </div>
                <div className="col-md-2">
                  <h5>{product.price}</h5>
                </div>
                <div className="col-md-2">
                  <button className="editBtn">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pen"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    className="deleteBtn ml-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
