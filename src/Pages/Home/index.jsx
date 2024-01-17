import React from "react";
import "./style.css";
import handShake from "../../Assets/Image/handshake.png";
import gear from "../../Assets/Image/worker-operating-gear.png";

const Home = () => {
  return (
    <div>
      <div className="handshake-wrapper">
        <div className="handshake-content">
          <div className="small-intro">WE DELIVER</div>
          <div className="large-intro">
            YOUR <span className="intro-blue">TRUST</span>
          </div>
          <div className="colored-intro">UNBEATABLE SERVICES</div>
        </div>
        <div className="hand-shake-image">
          <img src={handShake} alt="" />
        </div>
      </div>
      <div className="mission">
        "Our mission is to provide top-quality services and engineering works,
        empowering industries with reliable and affordable solutions by
        promoting sustainability.”
      </div>

      <div className="sales-background" id="service">
        <div className="sales-heading">Services</div>
        <div className="key-content-wrapper">
          <div className="key-content">
            <ul>
              <li>Air-Conditioning Ventilations & Air Filtration Systems Installation & Maintenance</li>
              <li>Carpentry Workshop</li>
              <li>Electromechanical Equipment Installation and Maintenance </li>
              <li>False Ceiling & Light Partitions Installation</li>
              <li>Floor & Wall Tiling Works</li>
              <li>Plaster & Cladding Works</li>
              <li>Wall Paper Fixing</li>
            </ul>
          </div>
          <div className="image">
            <img src={gear} alt="" />
          </div>
        </div>
      </div>

      {/* <div className="image-card-group-wrapper">
        <div className="image-card-group-header">
          TEAM BEHIND OUR INITIATIVE
        </div>
        <div className="image-card-group">
          <ImageCard
            image={person}
            name="PRAMOD PRASANNAN"
            designation="Procurement Manager"
          />
          <ImageCard
            image={person}
            name="PRAMOD PRASANNAN"
            designation="Procurement Manager"
          />
          <ImageCard
            image={person}
            name="PRAMOD PRASANNAN"
            designation="Procurement Manager"
          />
          <ImageCard
            image={person}
            name="PRAMOD PRASANNAN"
            designation="Procurement Manager"
          />
        </div>
      </div> */}

      <div className="customer-service-wrapper">
        <div className="customer-service-header">CUSTOMER SERVICE</div>
        <div className="customer-service-content">
          We have a established and satisfied customers, whom we have provided
          with top notch engineering solutions, with affordable and unbeatable
          lead time. References can be provided on request (Through
          Non-Disclosure)
        </div>
      </div>
      <div className="specialisation">
        <div className="specialisation-text">
          We Specialize in Providing Top-Notch Sealing and Engineering Solutions
        </div>
        <div className="contact-button">Contact Us Now !</div>
      </div>
    </div>
  );
};

export default Home;
