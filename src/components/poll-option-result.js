import React from "react";

// Poll option result bar
export default function PollOptionResult({
  option,
  percentage = 0,
  votes = 0,
}) {
  return (
    <div className="poll-result-container">
      <div className="poll-result">
        <div className="poll-result__bar" style={{ width: `${percentage}%` }}>
          <span className="poll-result__option">{option}</span>
        </div>
        <span className="poll-result__percentage">{percentage}%</span>
      </div>
      <span className="poll-votes">{votes} votes</span>
    </div>
  );
}
