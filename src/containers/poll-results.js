import React from "react";
import { Panel, Question, Seperator, PollOptionResult } from "../components";

export default function PollResults({ question }) {
  return (
    <Panel>
      <Question>{question}</Question>
      <Seperator />
      <PollOptionResult option="0" percentage="30" votes="3" />
      <PollOptionResult option="1" percentage="0" votes="6" />
      <PollOptionResult option="10" percentage="100" votes="10" />
    </Panel>
  );
}
