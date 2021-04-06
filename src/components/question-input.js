import React from "react";

// Input for entering questions
export default function QuestionInput({ question, setQuestion }) {
  return (
    <input
      className="input input--question"
      autoFocus={true}
      value={question}
      placeholder="Enter a question here..."
      onChange={({ target }) => setQuestion(target.value)}
    ></input>
  );
}
