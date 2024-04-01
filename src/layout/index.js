import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default Layout;
