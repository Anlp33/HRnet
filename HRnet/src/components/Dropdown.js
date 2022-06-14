import React from "react";


export default function Dropdown({ label, options, onChange }) {
  return (
    <div className="dropdown">
      <label>
        {label}
        <select onChange={onChange}>
          {options.map((option, index) => (
            <option value={option} key={index}>{option}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
