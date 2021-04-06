import React, { useState } from "react";
import { NewPoll, Poll } from "../containers";
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
        {createNewPoll && <NewPoll setCreateNewPoll={setCreateNewPoll} />}
        <Poll question="My Question?" />
      </div>
    </>
  );
}
