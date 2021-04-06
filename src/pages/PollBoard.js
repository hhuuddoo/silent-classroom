import React, { useState } from "react";
import { NewPoll } from "../containers";

export default function PollBoard() {
  const [polls, setPolls] = useState([]);

  return (
    <>
      <div className="panel-container">
        <NewPoll />
        <NewPoll />
        <NewPoll />
      </div>
    </>
  );
}
