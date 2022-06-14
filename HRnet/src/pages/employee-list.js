import React from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../utils/context/dataContext";
import { useContext } from "react";
import { useTable } from "react-table";

export default function Employees() {
  const { employeeData } = useContext(DataContext);
  console.log(employeeData);

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

  const data = React.useMemo(
    () => [
      {
        firstName: "firstname",
        lastName: "lastname",
      },
    ],
    []
  );
  function Table({ columns, data }) {
    // Use the useTable Hook to send the columns and data to build the table
    const {
      getTableProps, // table props from react-table
      getTableBodyProps, // table body props from react-table
      headerGroups, // headerGroups, if your table has groupings
      rows, // rows for the table based on the data passed
      prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    } = useTable({
      columns,
      data,
    });
  }

  return (
    <div id="employee-div" className="container">
      <h2>Current Employees</h2>
      {/* <Styles>{ employeeData.length? <Table columns={columns} data={employeeData} /> : null}</Styles> */}
      <Table columns={columns} data={data} />
      <Link to="/">Home</Link>
    </div>
  );
}
