import React from "react";

// Poll option component
export default function PollOption({
  option,
  name,
  id,
  optionId,
  setSelectedOptionId,
}) {
  return (
    <div className="option__container">
      <input
        className="option__radio"
        type="radio"
        name={name}
        onFocus={() => setSelectedOptionId(optionId)}
        value={option}
        id={id}
      />
      <label htmlFor={id} className="option">
        {option}
      </label>
    </div>
  );
}
