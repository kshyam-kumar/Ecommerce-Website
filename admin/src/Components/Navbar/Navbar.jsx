import React from "react";
import "./Navbar.css";
import navLogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navLogo} alt="logo" />
      <img src={navProfile} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
