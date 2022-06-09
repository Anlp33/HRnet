import React, { useContext } from "react";
import { useState } from "react";
import { states } from "../data/states";
import DatePicker from "react-date-picker";
import { Dropdown } from "react-dropdown-now";
import "react-dropdown-now/style.css";
import Modal from "./Modal";
import { DataContext } from "../utils/context/dataContext";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [state, setState] = useState("");
  const [street, setCity] = useState("");
  const [city, setStreet] = useState("");
  const [zipCode, setZipCode] = useState();
  const [department, setDepartment] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const { addData } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(!openModal)
    console.log(openModal)

    const employee = {
      firstName,
      lastName,
      birthDate,
      startDate,
      state,
      street,
      city,
      zipCode,
      department,
    };
    addData(employee);
  };

  return (
    <div className="form">
      <form className="create-employee" onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          type="text"
          id="first-name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="last-name">Last Name</label>
        <input
          type="text"
          id="last-name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          className="date-of-birth"
          onChange={(date) => setBirthDate(date)}
          value={birthDate}
        />
        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          className="start-date"
          onChange={(date) => setStartDate(date)}
          value={startDate}
        />
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            onChange={(e) => setStreet(e.target.value)}
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            onChange={(e) => setCity(e.target.value)}
          />

          <label htmlFor="state">State</label>
          <Dropdown
            placeholder="Select an option"
            className="state"
            options={states.map((state) => state.name)}
            value="Alabama"
            onSelect={(value) => setState(value)} // always fires once a selection happens even if there is no change
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
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
          value="Select an option"
          onSelect={(value) => setDepartment(value)} // always fires once a selection happens even if there is no change
        />

        <button>Save</button>
      </form>

      {openModal && (
        <Modal
          message={"Employee successfully created"}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </div>
  );
}
