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
          setPollOptions((prev) => ({ ...prev, [id]: target.value }))
        }
      ></input>
    </>
  );
}
