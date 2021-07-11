import React from "react";
import { CDBSidebar } from "cdbreact";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
      }}
    >
      <CDBSidebar
        style={{ width: "22vw" }}
        textColor="#fff"
        backgroundColor="#203D37"
      >
        <NavLink className="mt-4 ml-5 customLink" to="/">
          <h1 style={{ color: "#ffff", fontFamily: "Bebas Neue" }}>
            Daily Shopping
          </h1>
        </NavLink>
        {/* manage producs icon and link */}
        <div className="bg">
          <div className="links d-flex align-items-center justify-content-around pt-4 pb-1 ml-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="30"
              fill="currentColor"
              className="bi bi-grid-fill "
              viewBox="0 0 16 16"
            >
              <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
            </svg>
            <NavLink
              className="mt-2 mr-3 pr-5   customLink"
              to="/manageProducts"
            >
              <h6>Manage Product</h6>
            </NavLink>
          </div>
        </div>
        {/* add product icon and link */}
        <div className="bg">
          <div className="   links d-flex align-items-center justify-content-around mt-4 ml-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-plus mr-1 "
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            <NavLink className="mt-2 mr-5 pr-5  customLink" to="/addProduct">
              <h6>Add Product</h6>
            </NavLink>
          </div>
        </div>

        {/* edit product icon and link */}
        <div className="bg">
          <div className=" links d-flex align-items-center justify-content-around mt-4 ml-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="30"
              fill="currentColor"
              class="bi bi-pen "
              viewBox="0 0 16 16"
            >
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
            </svg>
            <NavLink className="mt-2 mr-5 pr-5  customLink" to="/editProduct">
              <h6>Edit Product</h6>
            </NavLink>
          </div>
        </div>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
