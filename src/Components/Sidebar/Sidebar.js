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
        backgroundColor="#333"
      >
        <CDBSidebarHeader>
          <NavLink className="customLink" to="/">
            <h2>Daily Shopping</h2>
          </NavLink>
        </CDBSidebarHeader>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
