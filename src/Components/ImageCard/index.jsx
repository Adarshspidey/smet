import React from "react";
import "./style.css";

const ImageCard = ({ image, name, designation }) => {
  return (
    <div className="image-card-body">
      <img className="round-image" src={image} alt="" />
      <div>
        <div className="name">{name}</div>
        <div className="designation">{designation}</div>
      </div>
    </div>
  );
};

export default ImageCard;
