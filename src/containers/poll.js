import React from "react";
import { Panel, Question, Seperator, PollOption } from "../components";

export default function Poll({ question, options }) {
  return (
    <Panel>
      <Question question={question} />
      <Seperator />
      <PollOption option="Option 1" name="some id" id="id" />
      <PollOption option="Option 2" name="some id" id="id2" />
      <PollOption option="Option 3" name="some id" id="id3" />
      <Seperator />
      <div className="right">
        <span className="button button--cta">Vote</span>
      </div>
    </Panel>
  );
}
