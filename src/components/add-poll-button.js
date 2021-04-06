import React from "react";
import { ReactComponent as Add } from "../images/add.svg";

export default function AddPollButton({ createNewPoll, setCreateNewPoll }) {
  return (
    <div
      className={`add-poll ${createNewPoll ? `active` : ``}`}
      onClick={() => setCreateNewPoll((prev) => !prev)}
    >
      <Add />
      <span className="hide-on-mobile">Add Poll</span>
    </div>
  );
}
