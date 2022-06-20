import React from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../utils/context/dataContext";
import { useContext } from "react";
import Table from "../components/Table";
import styled from "styled-components";

export default function Employees() {
  const { employeeData } = useContext(DataContext);

  console.log(employeeData);

  const Styles = styled.div`
    padding: 1rem;
    .table-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }
    .table-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      
    }
    table {
      background: floralwhite;
      border-spacing: 0;
      border-radius: 3px;
      border: 1px solid black;
      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }
      th,
      td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid black;
        border-right: 1px solid black;
        :last-child {
          border-right: 0;
        }
      }
    }
  `;
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Start Date",
        accessor: "startDate",
      },
      {
        Header: "Department",
        accessor: "department",
      },
      {
        Header: "Date of Birth",
        accessor: "birthDate",
      },
      {
        Header: "Street",
        accessor: "street",
      },
      {
        Header: "City",
        accessor: "city",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Zip Code",
        accessor: "zipCode",
      },
    ],
    []
  );

  const data = React.useMemo(() => [employeeData], [employeeData]);

  return (
    <div id="employeeList" className="employeeList">
      <h2>Current Employees</h2>

      <Styles>{data && <Table columns={columns} data={data} />}</Styles>
      <Link to="/">Home</Link>
    </div>
  );
}
