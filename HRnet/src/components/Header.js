import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

/**
 * This component create a Header
 * @returns {JSX} react component
 */
export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" className="logo"></img>
      </Link>
    </div>
  );
}
