import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-img"></div>

      <div className="header-container">
        <div className="topnav">
          {/* <a className="logo"></a> */}
          <Link to="/">Home</Link>
          <Link to="#news">News</Link>
          <Link to="#contact">Contact</Link>
          <Link to="#about">About</Link>
        </div>
        <div className="lg">
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </>
  );
}
