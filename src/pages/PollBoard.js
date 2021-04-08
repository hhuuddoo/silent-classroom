import React, { useEffect, useState } from "react";
import { NewPoll, Poll, PollResults } from "../containers";
import { AddPollButton } from "../components";

export default function PollBoard() {
  const [createNewPoll, setCreateNewPoll] = useState(false);
  const [polls, setPolls] = useState([]);

  return (
    <>
      <div className="panel-container">
        {/* Display add poll button */}
        <AddPollButton
          createNewPoll={createNewPoll}
          setCreateNewPoll={setCreateNewPoll}
        />

        {/* Display new poll panel */}
        {createNewPoll && (
          <NewPoll setCreateNewPoll={setCreateNewPoll} setPolls={setPolls} />
        )}

        {/* Display poll results */}
        <PollResults question="What is 0 + 1" />

        {/* Display polls */}
        {polls.map(({ question, options }, idx) => {
          return (
            <Poll
              question={question}
              options={options}
              key={idx}
              pollId={idx}
            />
          );
        })}
      </div>
    </>
  );
}
