import React from "react";
import "./offers.css";
import exclucive_image from "../assets/exclusive_image.png";
const offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1> offers for you </h1>
        <p>Only on best sellers products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  );
};

export default offers;
