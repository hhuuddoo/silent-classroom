import React, { useState, useEffect } from "react";
import { NewPoll } from "../containers";

export default function PollBoard() {
  const [polls, setPolls] = useState([]);

  return (
    <>
      <div className="panel-container">
        <NewPoll />
        <NewPoll />
      </div>
    </>
  );
}
