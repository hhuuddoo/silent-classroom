import React from "react";
import { Panel, Question, Seperator, PollOptionResult } from "../components";

// Display poll results
export default function PollResults({ question, optionResults }) {
  return (
    <Panel>
      <Question>{question}</Question>
      <Seperator />

      {/* Display poll option results */}
      {/* {optionResults.map(({ option, percentage, votes }) => {
        <PollOptionResult
          option={option}
          percentage={percentage}
          votes={votes}
        />;
      })} */}

      <PollOptionResult option="0" percentage="30" votes="3" />
      <PollOptionResult option="1" percentage="30" votes="6" />
      <PollOptionResult option="10" percentage="100" votes="10" />
    </Panel>
  );
}
