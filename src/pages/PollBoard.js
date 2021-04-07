import React, { useState } from "react";
import { NewPoll, Poll, PollResults } from "../containers";
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
        <PollResults question="What is 0 + 1" />
        <Poll
          question="What is 1 + 1?"
          options={["2", "Window", "1"]}
          pollId={1}
        />
        <Poll
          question="What is 2 + 2?"
          options={["2", "Fish", "4"]}
          pollId={2}
        />
        <Poll question="What is 3 + 3?" options={["9", "6", "3"]} pollId={3} />
        <Poll question="What is 4 + 4?" options={["16", "8", "4"]} pollId={4} />
      </div>
    </>
  );
}
