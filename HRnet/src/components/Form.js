import React, { useContext } from "react";
import { useState } from "react";
import { states } from "../data/states";
import DatePicker from "react-date-picker";
import Dropdown from "./Dropdown";
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
  const [formDisplay, setFormDisplay] = useState(true);

  const { addData } = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
    setFormDisplay(!formDisplay);

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
    console.log(employee);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleStateChange = (event) => {
    setState(event.target.value);
  };

  return (
   
    <div className="form">
      <h2>Create Employee</h2> 
      

      {formDisplay ? <form className="create-employee" onSubmit={handleSubmit}>
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

          <Dropdown
            label="State"
            className="state"
            options={states.map((state) => state.name)}
            onChange={handleStateChange}
          />
          <label htmlFor="zip-code">Zip Code</label>
          <input
            id="zip-code"
            type="number"
            onChange={(e) => setZipCode(e.target.value)}
          />
        </fieldset>
        <Dropdown
          label="Department"
          options={[
            "Sales",
            "Marketing",
            "Engineering",
            "Human Resources",
            "Legal",
          ]}
          onChange={handleDepartmentChange}
        />
        <button className="button save">Save</button>
      </form> : null}



      {openModal && (
        <Modal
          message={"Employee successfully created"}
          closeModal={() => {
            setOpenModal(false);
            setFormDisplay(!formDisplay)
          }}
        />
    )}
      
    </div>
  );
}
