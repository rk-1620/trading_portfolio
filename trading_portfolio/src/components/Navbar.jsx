// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="bg-img"></div>

      <div className="header-container">
        <div className="topnav">
          {/* <a className="logo"></a> */}
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
        <div className="lg">
          <a>Login</a>
        </div>
      </div>
    </>
  );
}
