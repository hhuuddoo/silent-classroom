import React, { useEffect, useState } from "react";
import { NewPoll, Poll, PollResults } from "../containers";
import { AddPollButton } from "../components";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

const PollBoard = observer(() => {
  // Access store context
  const store = useStore();
  const [polls, setPolls] = useState([]);

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
            question={poll.question}
            options={poll.options}
            totalVotes={poll.totalVotes}
          />
        ))}

        {/* <PollResults question="What is 0 + 1" /> */}

        {/* Display polls */}
        {polls.map(({ question, options }, idx) => {
          return (
            <Poll
              question={question}
              options={options}
              key={idx}
              pollId={idx} // CHANGE TO POLL ID FROM FIREBASE
            />
          );
        })}
      </div>
    </>
  );
});

export default PollBoard;
