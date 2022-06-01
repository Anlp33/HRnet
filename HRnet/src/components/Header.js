import React from "react";
import logo from "../assets/logo.PNG";

export default function Header() {
    return (
      <div className="header">
        <img src={logo} alt="logo" width={250}></img>
        <h1 className="title">HRnet</h1>
      </div>
    );
}