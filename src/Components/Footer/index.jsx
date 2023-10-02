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
        <div className="quick-link-heading">Quick Links</div>
        <div className="quick-link-menu">Sales & Services</div>
        <div className="quick-link-menu">About Us</div>
        <div className="quick-link-menu">Contact Us</div>
      </div>
      <div className="footer-end">
        ©2023 , Sapphire Mechanical Equipment Trading L.L.C. All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
