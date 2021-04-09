import React from "react";
import { ReactComponent as Add } from "../images/add.svg";

export default function AddPollButton({ handleNewPoll }) {
  return (
    <div className="add-poll" onClick={handleNewPoll}>
      <Add />
      <span>Add Poll</span>
    </div>
  );
}
