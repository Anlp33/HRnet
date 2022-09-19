import React from "react";
import { Link } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";

/**
 * This component create a Header
 * @returns {JSX} react component
 */
export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">HRnet</Link>
      </div>
      <Link to="/employees" className="employeesList">
        <button type="button" className="button employeeslist">
          View Current Employees <BsPeopleFill size={28} />
        </button>
      </Link>
    </div>
  );
}
