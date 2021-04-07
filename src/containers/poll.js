import React from "react";
import { Panel, Question, Seperator, PollOption } from "../components";

export default function Poll({ question, options, pollId }) {
  return (
    <Panel>
      <Question>{question}</Question>
      <Seperator />
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
