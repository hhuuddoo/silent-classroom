import React from "react";
import { Panel, Question, Seperator, PollOptionResult } from "../components";

export default function PollResults({ question }) {
  return (
    <Panel>
      <Question>{question}</Question>
      <Seperator />
      <PollOptionResult option="Option 1" percentage="50" />
    </Panel>
  );
}
