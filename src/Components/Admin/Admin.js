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

  return (
    <div>
      <div className="row w-100">
        <div className="col-3">
          <Sidebar></Sidebar>
        </div>
        {/* <div id="manageProducts">
        <h1>manage product</h1>
      </div> */}
        <div className="col" id="addProduct">
          <div className="shadow mt-2  p-3 mb-5 bg-body rounded">
            <h2 style={{ fontWeight: 700 }}>Add product</h2>
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
                    placeholder="Enter price"
                    id=""
                  />
                </div>
                <div className="col">
                  <h6 className="customHeader"> Add Photo</h6>
                  <input
                    className="mt-4"
                    type="file"
                    name=""
                    placeholder="Upload file"
                    id=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
