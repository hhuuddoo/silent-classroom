import React from "react";

// Input for entering questions
export default function QuestionInput({ question, setQuestion }) {
  return (
    <input
      className="input input--question"
      value={question}
      placeholder="Enter a question here..."
      onFocus={({ target }) => (target.placeholder = "")}
      onBlur={({ target }) => (target.placeholder = "Enter a question here...")}
      onChange={({ target }) => setQuestion(target.value)}
    ></input>
  );
}
