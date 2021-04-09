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
        const percentage =
          Math.round(((votes / totalVotes) * 100 + Number.EPSILON) * 100) / 100;
        return (
          <PollOptionResult
            key={optionId}
            option={option}
            percentage={percentage}
            votes={votes}
          />
        );
      })}
    </Panel>
  );
}
