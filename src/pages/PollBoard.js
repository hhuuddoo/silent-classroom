import React, { useState } from "react";
import { NewPoll } from "../containers";
import { AddPollButton } from "../components";

export default function PollBoard() {
  const [createNewPoll, setCreateNewPoll] = useState(false);
  return (
    <>
      <div className="panel-container">
        <AddPollButton
          createNewPoll={createNewPoll}
          setCreateNewPoll={setCreateNewPoll}
        />
        <NewPoll />
      </div>
    </>
  );
}
