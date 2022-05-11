import React from "react";
import { Link } from "react-router-dom";
import BrandLogo from "../../assets/Svgs/BrandLogo";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/about" className="BrandLink">
          <BrandLogo width={168} height={67} />
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="menus">asdssdsd</div>
        <div className="navbarBtns">
          <button>dasd</button>
          <button className="startFreeBtn" type="button">dasdasd</button>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
