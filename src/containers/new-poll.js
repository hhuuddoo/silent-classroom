import React, { useState } from "react";
import { Panel, QuestionInput } from "../components";

export default function NewPoll() {
  const [question, setQuestion] = useState("");
  return (
    <Panel>
      <QuestionInput question={question} setQuestion={setQuestion} />
    </Panel>
  );
}
