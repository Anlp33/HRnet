import React from "react";
import { Link } from "react-router-dom";

import Form from "../components/Form";

export default function Home() {
  return (
    <div className="employees-list-page">
      <div className="main">
        <Link to="/employees" className="employeesList">
          <button type="button" className="button employeeslist">
            View Current Employees
          </button>
        </Link>
        <Form />
      </div>
    </div>
  );
}
