import React, { useEffect, useState } from "react";
import { NewPoll, Poll, PollResults } from "../containers";
import { AddPollButton } from "../components";

export default function PollBoard() {
  const [createNewPoll, setCreateNewPoll] = useState(false);

  const [polls, setPolls] = useState([]);

  useEffect(() => {
    setPolls([{ question: "What is 1+1?", options: ["2", "window", "1"] }]);
  }, []);

  return (
    <>
      <div className="panel-container">
        <AddPollButton
          createNewPoll={createNewPoll}
          setCreateNewPoll={setCreateNewPoll}
        />
        {createNewPoll && (
          <NewPoll setCreateNewPoll={setCreateNewPoll} setPolls={setPolls} />
        )}
        <PollResults question="What is 0 + 1" />

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

        {/* <Poll
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
        <Poll question="What is 4 + 4?" options={["16", "8", "4"]} pollId={4} /> */}
      </div>
    </>
  );
}
