import React from "react";
import "./style.css";
import fb from "../../Assets/Icon/facebook.svg";
import insta from "../../Assets/Icon/insta.svg";
import x from "../../Assets/Icon/X.svg";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="footer-header-wrapper">
        <div className="footer-heading">
          SAPPHIRE MECHANICAL EQUIPMENT TRADING L.L.C
        </div>
        <div className="header-right-wrapper">
          <img src={fb} alt="" />
          <img src={insta} alt="" />
          <img src={x} alt="" />
        </div>
      </div>
      <div className="quick-link">
        <div className="quick-link-heading">ADDRESS</div>
        <div className="quick-link-menu">Building no I 07 Shop no 04</div>
        <div className="quick-link-menu">Morocco Cluster International City Warsan Dubai</div>
        <div className="quick-link-heading">Phone</div>
        <div className="quick-link-menu">045875655</div>
        <div className="quick-link-heading">Email</div>
        <div className="quick-link-menu">manager@alamalalwadeh.com</div>
      </div>
      <div className="footer-end">
        ©2024 , Al Amal Alwadeh Electromechanical Equipment Installation And Maintenance 
      </div>
    </div>
  );
};

export default Footer;
