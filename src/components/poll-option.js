import React from "react";

// Poll option component
export default function PollOption({ option, name, id }) {
  return (
    <div className="option__container">
      <input
        className="option__radio"
        type="radio"
        name={name}
        value={option}
        id={id}
      />
      <label htmlFor={id} className="option">
        {option}
      </label>
    </div>
  );
}
