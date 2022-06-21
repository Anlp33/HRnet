import React, { useContext } from "react";
import { DataContext } from "../utils/context/dataContext";
import { useState } from "react";
import { states } from "../data/states";
import DatePicker from "react-date-picker";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import Modal from "modal-component-anlp33/dist/Modal";

/**
 * This component create a Form
 * @returns {JSX} react component
 */
export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [state, setState] = useState("Alabama");
  const [street, setCity] = useState("");
  const [city, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("Sales");
  const [openModal, setOpenModal] = useState(false);
  const [formDisplay, setFormDisplay] = useState(true);

  const { addData } = useContext(DataContext);

  const birthdateStr = birthDate.toDateString();
  const startDateStr = startDate.toDateString();
  const departmentStr = department.toString();

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
    setFormDisplay(!formDisplay);

    const employee = {
      firstName,
      lastName,
      birthdateStr,
      startDateStr,
      state,
      street,
      city,
      zipCode,
      departmentStr,
    };
    addData(employee);
    console.log(employee);
  };

  return (
    <div className="form">
      <h2>Create Employee</h2>

      {formDisplay ? (
        <form className="create-employee" onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            required="required"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            required="required"
            id="last-name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>

          <DatePicker
            className="date-of-birth"
            onChange={setBirthDate}
            value={birthDate}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            className="start-date"
            onChange={setStartDate}
            value={startDate}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              required="required"
              onChange={(e) => setStreet(e.target.value)}
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              required="required"
              onChange={(e) => setCity(e.target.value)}
            />
            <br />
            <label htmlFor="state">State</label>
            <Dropdown
              placeholder="Select an option"
              className="state"
              options={states.map((state) => state.name)}
              value="Alabama"
              onSelect={(value) => setState(value)}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              required="required"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Dropdown
            placeholder="Select an option"
            className="department"
            options={[
              "Sales",
              "Marketing",
              "Engineering",
              "Human Resources",
              "Legal",
            ]}
            value="Sales"
            onSelect={(value) => setDepartment(value)}
          />

          <button className="button save">Save</button>
        </form>
      ) : null}

      {openModal && (
        <Modal
          message={"Employee successfully created"}
          onClose={() => {
            setOpenModal(false);
            setFormDisplay(!formDisplay);
          }}
        />
      )}
    </div>
  );
}
