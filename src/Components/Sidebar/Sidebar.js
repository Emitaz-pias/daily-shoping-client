import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

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
        <div className="links d-flex justify-content-between mt-2 ml-4 p-5">
          <h6>icon</h6>
          <NavLink className=" customLink" to="/">
            <h6>Manage Products </h6>
          </NavLink>
        </div>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
