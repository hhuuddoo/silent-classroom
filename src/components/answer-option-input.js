import React from "react";

export default function AnswerOptionInput({
  id,
  answerOptions,
  setAnswerOptions,
}) {
  return (
    <>
      <input
        className="input input--option"
        value={answerOptions.id}
        placeholder="Enter poll option..."
        onFocus={({ target }) => (target.placeholder = "")}
        onBlur={({ target }) => (target.placeholder = "Enter poll option...")}
        onChange={({ target }) =>
          setAnswerOptions((prev) => ({ ...prev, [id]: target.value }))
        }
      ></input>
    </>
  );
}
