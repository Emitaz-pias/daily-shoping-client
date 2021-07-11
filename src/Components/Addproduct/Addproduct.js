import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { useForm } from "react-hook-form";
import "./AddProduct.css";
import axios from "axios";
const Addproduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // error message for the input type file

  const handleUploadImage = (event) => {
    console.log("input changed", event.target.files[0]);
    const ImageBBUrl = ` https://api.imgbb.com/1/upload`;
    const image = event.target.files[0];
    const imageData = new FormData();
    imageData.set("key", "1b155e7e761be44367daaf7b9b9d5a06");
    imageData.set("image", image);
    axios({
      method: "post",
      url: ImageBBUrl,
      data: imageData,
    })
      .then((response) => {
        console.log(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const sendProductToDatabase = (data) => {
    console.log("form submitted", data);
  };
  return (
    <div className="row w-100">
      <div className="col-3">
        <Sidebar />
      </div>
      <div className="col">
        <div id="addProduct">
          <div className="shadow mt-2 p-3 mb-3 bg-body rounded whiteBg">
            <h2 style={{ fontWeight: 700 }}>Add Product</h2>
          </div>
          <div className="p-2">
            <form onSubmit={handleSubmit(sendProductToDatabase)} action="">
              <div className="shadow p-3 mb-3 bg-body rounded  whiteBg">
                <div className="row p-3">
                  <div className="col">
                    <h6 className="customHeader">Product Name</h6>
                    <input
                      className="form-control mt-4 customPlaceholder"
                      type="text"
                      name=""
                      placeholder="Enter Name"
                      id=""
                      {...register("ProductName", {
                        required: true,
                        maxLength: 80,
                      })}
                    />
                    {errors.ProductName && (
                      <span className="addProductError">
                        Product's Name is required
                      </span>
                    )}
                  </div>
                  <div className="col">
                    <h6 className="customHeader">Weight</h6>
                    <input
                      type="text"
                      name=""
                      placeholder="Weight"
                      className="form-control mt-4 customPlaceholder"
                      id=""
                      {...register("Weight", { required: true, maxLength: 80 })}
                    />
                    {errors.Weight && (
                      <span className="addProductError">
                        Weight is required
                      </span>
                    )}
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
                      {...register("Price", { required: true, maxLength: 80 })}
                    />
                    {errors.Price && (
                      <span className="addProductError">Price is required</span>
                    )}
                  </div>
                  <div className="col">
                    <h6 className="customHeader"> Add Photo</h6>
                    <input
                      className="mt-4  customFileInput"
                      type="file"
                      onChange={handleUploadImage}
                      name="file"
                      id="file"
                      accept=".jpg, .jpeg, .png"
                      required
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
              </div>
              <div className="d-flex justify-content-end">
                <input className="customSubmitBtn" type="submit" value="save" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addproduct;
