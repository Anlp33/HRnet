import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";

export default function Home() {
  return (
    <div className="employees-list-page">
      <div className="container">
        {/* <Link to="/employees" className="employeesList">
          <button type="button" to>View Current Employees</button>
        </Link> */}

        <h2>Create Employee</h2>

        <Form />
      </div>
    </div>
  );
}
