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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Product Name"
            {...register("Product Name", { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="Weight"
            {...register("Weight", { required: true, maxLength: 100 })}
          />
          <input
            type="number"
            placeholder="Price"
            {...register("Price", { required: true, maxLength: 12 })}
          />

          <input type="submit" />
        </form>
      </div>
      <div id="addProduct">
        <h1>manage product</h1>
      </div>
    </div>
  );
};

export default Admin;
