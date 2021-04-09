import React from "react";
import { Panel, Question, Seperator, PollOptionResult } from "../components";

// Display poll results
export default function PollResults({ question, options, totalVotes }) {
  return (
    <Panel>
      <Question>{question}</Question>
      <Seperator />

      {/* Display poll results */}
      {options.map(({ optionId, option, votes }) => {
        return (
          <PollOptionResult
            key={optionId}
            option={option}
            percentage={(votes / totalVotes) * 100}
            votes={votes}
          />
        );
      })}
    </Panel>
  );
}
