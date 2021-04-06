import React from "react";
import { Panel, Question, Seperator, PollOption } from "../components";

export default function Poll({ question, options, pollId }) {
  return (
    <Panel>
      <Question question={question} />
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
      {/* <PollOption option="Option 1" name="some id" id="id" />
      <PollOption option="Option 2" name="some id" id="id2" />
      <PollOption option="Option 3" name="some id" id="id3" /> */}
      <Seperator />
      <div className="right">
        <span className="button button--cta">Vote</span>
      </div>
    </Panel>
  );
}
