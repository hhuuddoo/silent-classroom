import React from "react";
import { Panel, Question } from "../components";

export default function PollResults({ question }) {
  return (
    <Panel>
      <Question>{question}</Question>
    </Panel>
  );
}
