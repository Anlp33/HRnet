import React, { useContext } from "react";
import { useState } from "react";
import { states } from "../data/states";
import Modal from "modal-simple-component/dist/Modal";
import { DataContext } from "../utils/context/dataContext";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [state, setState] = useState("Alabama");
  const [street, setCity] = useState("");
  const [city, setStreet] = useState("");
  const [zipCode, setZipCode] = useState();
  const [department, setDepartment] = useState("Sales");
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
          <input
            className="form-input"
            type="date"
            required="required"
            id="date-of-birth"
            onChange={(e) => setBirthDate(e.target.value)}
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            className="form-input"
            type="date"
            id="start-date"
            required="required"
            onChange={(e) => setStartDate(e.target.value)}
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
            <select
              name="state"
              onChange={(e) => setState(e.target.value)}
              id="state"
            >
              {states.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation} defaultValue="N/A">  
                  {state.name}
                </option>
              ))}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              required="required"
              onChange={(e) => setZipCode(e.target.value)}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            name="department"
            onChange={(e) => setDepartment(e.target.value)}
            id="department"
          >
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>

          <button className="button save">Save</button>
        </form>
      ) : null}

      {openModal && (
        <Modal
          message={"Employee successfully created"}
          closeModal={() => {
            setOpenModal(false);
            setFormDisplay(!formDisplay);
          }}
        />
      )}
    </div>
  );
}
