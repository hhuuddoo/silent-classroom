import React from "react";

export default function PollOptionInput({ id, pollOptions, setPollOptions }) {
  return (
    <>
      <input
        className="input input--option"
        value={pollOptions.id}
        placeholder="Enter poll option..."
        onFocus={({ target }) => (target.placeholder = "")}
        onBlur={({ target }) => (target.placeholder = "Enter poll option...")}
        onChange={({ target }) =>
          setPollOptions((prev) => {
            if (target.value.trim() !== "") {
              return { ...prev, [id]: target.value.trim() };
            }
            return prev;
          })
        }
      ></input>
    </>
  );
}
