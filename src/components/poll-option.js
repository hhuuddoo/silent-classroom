import React from "react";

export default function PollOption({ option, name }) {
  return (
    <div className="option__container">
      <input
        className="option__radio"
        type="radio"
        name={name}
        value={option}
      />
      <span className="option">{option}</span>
    </div>
  );
}
