import React, { useState } from "react";
import { Panel, QuestionInput, Seperator } from "../components";

export default function NewPoll() {
  const [question, setQuestion] = useState("");

  return (
    <Panel>
      <QuestionInput question={question} setQuestion={setQuestion} />
      <Seperator />
    </Panel>
  );
}
