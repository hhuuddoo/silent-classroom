import React from "react";
import { Panel, Question, Seperator, PollOptionResult } from "../components";

export default function PollResults({ question }) {
  return (
    <Panel>
      <Question>{question}</Question>
      <Seperator />
      <PollOptionResult option="0" percentage="30" />
      <PollOptionResult option="1" percentage="60" />
      <PollOptionResult option="10" percentage="10" />
    </Panel>
  );
}
