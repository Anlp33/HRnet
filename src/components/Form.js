import React, { useContext } from "react";
import { DataContext } from "../utils/context/dataContext";
import { useState } from "react";
import DatePicker from "react-date-picker";
import Header from "./Header";
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
  const [street, setCity] = useState("");
  const [city, setStreet] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [formDisplay, setFormDisplay] = useState(true);

  const { addData } = useContext(DataContext);

  const birthdateStr = birthDate.toDateString();
  const startDateStr = startDate.toDateString();

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
    setFormDisplay(!formDisplay);


    const employee = {
      firstName,
      lastName,
      birthdateStr,
      startDateStr,
      street,
      city,
      zipCode,
    };
    addData(employee);
  };

  return (
    <div className="form">
      <Header />
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
            required={true}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            className="start-date"
            onChange={setStartDate}
            value={startDate}
            required={true}
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
           
            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              required="required"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </fieldset>

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
