import React from "react";
import xmark from "../assets/xmark-solid.svg";

export default function Modal(props) {
  return (
    <div className="modal">
      <h3>{props.message}</h3>
      <button
        type="button"
        className="modal-close-button"
        onClick={props.closeModal}
      >
        <img src={xmark} alt="closeButton" />
      </button>
    </div>
  );
}
