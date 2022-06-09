import React from "react";
import { Link } from "react-router-dom";
// import DataTable from "react-data-table-component";
import { DataContext } from "../utils/context/dataContext";
import { useContext } from "react";
import EmployeeTables from "../components/Table";

export default function Employees() {
  const { employeeData } = useContext(DataContext);
  console.log(employeeData);


return (
  <div id="employee-div" className="container">
    <h2>Current Employees</h2>
    <EmployeeTables employeeList={[employeeData]} />
    <Link to="/">Home</Link>
  </div>
);
}

