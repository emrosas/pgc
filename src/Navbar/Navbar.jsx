import React from "react";
import "./Navbar.css";
import Logo from "../assets/logo.svg";

const Navbar = ({ handleGameEnd }) => {
  return (
    <nav>
      <div className="logo-wrapper">
        <img src={Logo} alt="Trophy App Logo" />
        <div className="navbar-title-holder">
          <h2>Party Game Companion</h2>
          <p className="slogan">“Who’s keeping score?” NO MORE...</p>
        </div>
      </div>
      <button className="btn-secondary" onClick={handleGameEnd}>
        End Game
      </button>
    </nav>
  );
};

export default Navbar;
