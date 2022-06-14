import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

export default function Modal(props) {
  return (
    <div className="modal">
      <h3>{props.message}</h3>
      <button
        type="button"
        className="modal-close-button"
        onClick={props.closeModal}
      >
        <FontAwesomeIcon icon={faCircleXmark} />
      </button>
    </div>
  );
}
