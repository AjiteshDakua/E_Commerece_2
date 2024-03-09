import React from "react";
import "./navbar.css";
import navlogo from "../../assets/nav-logo.svg";
import navprofile from "../../assets/nav-profile.svg";
const navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="navlogo" />
      <img src={navprofile} className="navprofile" alt="" />
    </div>
  );
};

export default navbar;
