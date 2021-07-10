import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";

const Admin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div style={{ display: "inline-flex" }}>
      <Sidebar></Sidebar>
      <div id="manageProducts">
        <div className=" mt-2 p-3">
          <div className="shadow  p-1 pl-2  mb-5 bg-body rounded ">
            <h2>Add Product</h2>
          </div>
          <div className="shadow pt-5 m-5 p-5 mb-5 bg-body rounded">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Product Name"
                {...register("Product Name", { required: true, maxLength: 80 })}
              />
              <br />
              <input
                type="text"
                placeholder="Weight"
                {...register("Weight", { required: true, maxLength: 100 })}
              />

              <input
                type="text"
                placeholder="Price"
                {...register("Price", { required: true, maxLength: 12 })}
              />
              <input type="file" placeholder="Upload" />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
      <div id="addProduct">
        <h1>manage product</h1>
      </div>
    </div>
  );
};

export default Admin;
