import React from "react";
import { Panel, Question, Seperator, PollOption } from "../components";

// Poll container
export default function Poll({ question, options, pollId }) {
  return (
    <Panel>
      <Question>{question}</Question>
      <Seperator />

      {/* Display options on poll panel */}
      {options.map((option, idx) => {
        return (
          <PollOption
            key={idx}
            option={option}
            name={pollId}
            id={`${pollId}_${idx}`}
          />
        );
      })}

      <Seperator />
      <div className="right">
        <span className="button button--cta">Vote</span>
      </div>
    </Panel>
  );
}
