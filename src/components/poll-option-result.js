import React from "react";

export default function PollOptionResult({ option, percentage }) {
  return (
    <div className="poll-result">
      <div className="poll-result__bar" style={{ width: `${percentage}%` }}>
        <span className="poll-result__option">{option}</span>
      </div>
      <span className="poll-result__percentage">{percentage}%</span>
    </div>
  );
}
