import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header-body">
      <div className="header-logo">AlAmalAlwadeh</div>
      <div className="header-right-wrapper">
        <div className="header-menu header-menu-select">Home</div>
        <div className="header-menu">Sales & Services</div>
        <div className="header-menu">Contact Us</div>
      </div>
    </div>
  );
};

export default Header;
