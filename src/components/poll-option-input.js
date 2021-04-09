import React from "react";

// Poll Option Input Text Box
export default function PollOptionInput({ id, pollOptions, setPollOptions }) {
  return (
    <>
      <input
        className={`input input--option`}
        value={pollOptions.id}
        placeholder="Enter poll option..."
        type="text"
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
