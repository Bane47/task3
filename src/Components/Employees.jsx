import { useState } from "react";
import EmployeeDetails from './Details.json';
import React from "react";

export default function Details() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handlePreviousClick() {
    setIndex(index - 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore); // true
  }

  let employee = EmployeeDetails[index];

  return (
    <div style={{ marginLeft: 150, marginTop: 50 }}>
 
      <span>
        <button
          onClick={handlePreviousClick}
          className="btn btn-warning ms-5"
          style={{ borderRadius: 70 }}
        >Click here</button>
      </span>
      <button
        onClick={handleNextClick}
        className="btn btn-warning ms-5"
        style={{ borderRadius: 70 }}
      >Click here</button>

      <h2 className="m-5">
        <i>{employee.name} </i>
      </h2>

      <h3 className="ms-5">
        ({index + 1} of {EmployeeDetails.length})
      </h3>

      <button onClick={handleMoreClick} className="btn btn-primary m-5">
        {showMore ? "Hide" : "Show"}
      </button>

      <br />

      {/* Both conditions must satisfy */}
      {showMore && <p className="ms-5">Name:{employee.name} Role:{employee.role}</p>}
      <img className="image" src={employee.url} alt="" />
    </div>
  );
}
