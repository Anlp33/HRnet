import React from "react";
import { useState } from "react";
import DatePicker from "react-date-picker";



export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [startDate, setStartDate] = useState();

    //dropdown
    const [optionValue, setOptionValue] = useState("");
    
    const handleSelect = (e) => {
      console.log(e.target.value);
      setOptionValue(e.target.value);
    };

  return (
    <div className="form">
      <form className="create-employee">
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
          <input id="street" type="text" />

          <label htmlFor="city">City</label>
          <input id="city" type="text" />

          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>

        <label htmlFor="department">Department</label>
        {/* <Dropdown
          formLabel="Choose a service"
          buttonText="Send form"
          onChange={handleSelect}
          action="/"
        >
          <Option selected value="Click to see options" />
          <Option value="Sales" />
          <Option value="Marketing" />
          <Option value="Engineering" />
          <Option value="Human Resources" />
          <Option value="Legal" />
        </Dropdown> */}
      </form>

      <button>Save</button>
    </div>
  );
}
