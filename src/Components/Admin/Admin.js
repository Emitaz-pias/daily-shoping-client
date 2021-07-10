import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import "./Admin.css";

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleToggle = () => {
    console.log("tog btn clicked");
  };
  return (
    <div>
      <div className="row w-100">
        <div className="col-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col">
          <div id="manageProducts">
            <div className="shadow mt-2  p-3 mb-5 bg-body rounded">
              <h2 style={{ fontWeight: 700 }}>Manage Products</h2>
            </div>
            <div className="shadow  p-3 mb-3 bg-body rounded row manageProductsHeader">
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
              <div className="row">
                <div className="col-md-4">
                  <h5 className="">Product Name is longer than anythin else</h5>
                </div>
                <div className="col-md-4">
                  <h5>Weight is soo bighhssdkl;fasdfklsdfjkl</h5>
                </div>
                <div className="col-md-2">
                  <h5>Price</h5>
                </div>
                <div className="col-md-2">
                  <h5>Action</h5>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <h5 className="">Product Name is longer than anythin else</h5>
                </div>
                <div className="col-md-4">
                  <h5>Weight is soo bighhssdkl;fasdfklsdfjkl</h5>
                </div>
                <div className="col-md-2">
                  <h5>Price</h5>
                </div>
                <div className="col-md-2">
                  <h5>Action</h5>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <h5 className="">Product Name is longer than anythin else</h5>
              </div>
              <div className="col-md-4">
                <h5>Weight is soo bighhssdkl;fasdfklsdfjkl</h5>
              </div>
              <div className="col-md-2">
                <h5>Price</h5>
              </div>
              <div className="col-md-2">
                <h5>Action</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <h5 className="">Product Name is longer than anythin else</h5>
              </div>
              <div className="col-md-4">
                <h5>Weight is soo bighhssdkl;fasdfklsdfjkl</h5>
              </div>
              <div className="col-md-2">
                <h5>Price</h5>
              </div>
              <div className="col-md-2">
                <h5>Action</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <h5 className="">Product Name is longer than anythin else</h5>
              </div>
              <div className="col-md-4">
                <h5>Weight is soo bighhssdkl;fasdfklsdfjkl</h5>
              </div>
              <div className="col-md-2">
                <h5>Price</h5>
              </div>
              <div className="col-md-2">
                <h5>Action</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <h5 className="">Product Name is longer than anythin else</h5>
              </div>
              <div className="col-md-4">
                <h5>Weight is soo bighhssdkl;fasdfklsdfjkl</h5>
              </div>
              <div className="col-md-2">
                <h5>Price</h5>
              </div>
              <div className="col-md-2">
                <h5>Action</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4">
                <h5 className="">Product Name is longer than anythin else</h5>
              </div>
              <div className="col-md-4">
                <h5>Weight is soo bighhssdkl;fasdfklsdfjkl</h5>
              </div>
              <div className="col-md-2">
                <h5>Price</h5>
              </div>
              <div className="col-md-2">
                <h5>Action</h5>
              </div>
            </div>
          </div>
          {/* add product page */}
          <div id="addProduct">
            <div className="shadow mt-2  p-3 mb-5 bg-body rounded">
              <h2 style={{ fontWeight: 700 }}>Add Product</h2>
            </div>
            <div className="shadow p-2">
              <form action="">
                <div className="row p-3">
                  <div className="col">
                    <h6 className="customHeader">Product Name</h6>
                    <input
                      className="form-control mt-4 customPlaceholder"
                      type="text"
                      name=""
                      placeholder="Enter Name"
                      id=""
                    />
                  </div>
                  <div className="col">
                    <h6 className="customHeader">Weight</h6>
                    <input
                      type="text"
                      name=""
                      placeholder="Weight"
                      className="form-control mt-4 customPlaceholder"
                      id=""
                    />
                  </div>
                </div>
                <div className="row mt-3 p-3">
                  <div className="col">
                    <h6 className="customHeader">Add Price</h6>
                    <input
                      className="form-control mt-4  customPlaceholder"
                      type="text"
                      name=""
                      placeholder="Enter Price"
                      id=""
                    />
                  </div>
                  <div className="col">
                    <h6 className="customHeader"> Add Photo</h6>

                    <input
                      className="mt-4  customFileInput"
                      type="file"
                      name="file"
                      id="file"
                    />
                    <label
                      className="uploadButton d-flex justify-content-around align-items-center mt-4 ml-1"
                      htmlFor="file"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        class="bi bi-cloud-upload"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"
                        />
                      </svg>
                      Upload photo
                    </label>
                  </div>
                </div>
                <button onClick={handleToggle}>toggle</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
