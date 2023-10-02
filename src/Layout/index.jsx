import React from "react";
import "./style.css";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <>
      <div className="layout">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
