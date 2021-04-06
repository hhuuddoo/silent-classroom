import React from "react";
import { Panel, Question } from "../components";

export default function Poll({ question, options }) {
  return (
    <Panel>
      <Question question={question} />
    </Panel>
  );
}
