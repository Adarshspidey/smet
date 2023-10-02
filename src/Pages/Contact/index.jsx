import React from "react";
import "./style.css";

const Contact = () => {
  return (
    <div>
      <div className="about-us-wrapper">
        <div className="about-us-heading">About Us</div>
        <div className="about-us-sub-heading">
          SAPPHIRE MECHANICAL EQUIPMENT TRADING L.L.C
        </div>
        <div className="about-us-content">
          We are a recently established company. We thrive on our experience in
          the field of Engineering and sealing solutions, specializing in
          trading and manufacturing of hydraulic, pneumatic seals along with
          providing Reverse Engineering of metal and plastic products.
        </div>
      </div>
      <div className="office-details">
        <div className="office-detail-content">
          <div className="office-detail-content-header">Office Time</div>
          <div className="office-details-content-menu">Monday - Saturday</div>
          <div className="office-details-content-menu">8 AM - 6 PM</div>
          <div className="office-details-content-menu">
            All Day Support for <span className="bold">Shutdown</span> Jobs
          </div>
        </div>
        <div className="office-detail-content">
          <div className="office-detail-content-header">Contact</div>
          <div className="office-details-content-menu">
            Musaffah M-33, Abu Dhabi, UAE
          </div>
          <div className="office-details-content-menu">+971553783355</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
