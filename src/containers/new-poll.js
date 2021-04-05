import React, { useEffect, useState } from "react";
import {
  Panel,
  QuestionInput,
  AnswerOptionInput,
  Seperator,
} from "../components";

export default function NewPoll() {
  const [question, setQuestion] = useState("");
  const [answerOptions, setAnswerOptions] = useState([]);

  console.log(answerOptions);

  return (
    <Panel>
      <QuestionInput question={question} setQuestion={setQuestion} />
      <Seperator />
      <AnswerOptionInput
        id={1}
        answerOptions={answerOptions}
        setAnswerOptions={setAnswerOptions}
      />
      <AnswerOptionInput
        id={2}
        answerOptions={answerOptions}
        setAnswerOptions={setAnswerOptions}
      />
    </Panel>
  );
}
