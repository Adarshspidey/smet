import React from "react";
import "./style.css";
import worker from "../../Assets/Image/worker-walking.png";

const Sales = () => {
  return (
    <div className="sales-background">
      <div className="sales-heading">Sales & Services</div>
      <div className="content-wrapper">
        <div className="content">
          <ul>
            <li>
              CNAF Gasket, Sheets, RTJ, DAI Moulded Rings, Insulation Kits
            </li>
            <li>Rubber Sheets, Rolls, Profile Cutting</li>
            <li>Nylon Sheets, Tubes, Profile Machining</li>
            <li>PTFE, UHMWPE, DERLIN, POM, Bakelite, PVC, PEEK, Acrylic</li>
            <li>Hydraulic Seals</li>
            <li>Pneumatic Seals</li>
            <li>O-Ring & Oil Seals</li>
            <li>Gland Packings</li>
            <li>Standard & Customized Mechanical Seals</li>
            <li>CNC Multi axis Machining</li>
            <li>Manual Lathe Workshop</li>
            <li>Laser cutting Workshops</li>
            <li>Power Pack Design</li>
            <li>Reverse Engineering Services</li>
            <li>Metal Casting </li>
            <li>Oilfield Inspection Services</li>
            <li>Metal Sheets & Rods</li>
            <li>Heat treatment of Different Materials</li>
            <li>Metal Forging Services</li>
          </ul>
        </div>
        <div className="image">
          <img src={worker} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sales;
