import React from "react";
import { NewPoll, Poll, PollResults } from "../containers";
import { AddPollButton } from "../components";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

const PollBoard = observer(() => {
  // Access store context
  const store = useStore();

  return (
    <>
      <div className="panel-container">
        {/* Display add poll button */}
        {!store.blankPollCreated && (
          <AddPollButton handleNewPoll={() => store.createBlankPoll()} />
        )}

        {/* Display new poll panel */}
        {store.blankPollCreated && <NewPoll />}

        {/* Display poll results */}
        {store.completedPolls.map((poll) => (
          <PollResults
            key={poll.pollId}
            question={poll.question}
            options={poll.options}
            totalVotes={poll.totalVotes}
          />
        ))}

        {/* Display open polls */}
        {store.openPolls.map((poll) => (
          <Poll
            key={poll.pollId}
            pollId={poll.pollId}
            question={poll.question}
            options={poll.options}
          />
        ))}
      </div>
    </>
  );
});

export default PollBoard;
