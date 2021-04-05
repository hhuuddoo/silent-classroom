import React, { useState } from "react";
import { ReactComponent as Add } from "../images/add.svg";

import {
  Panel,
  QuestionInput,
  AnswerOptionInput,
  Seperator,
} from "../components";

export default function NewPoll() {
  const [question, setQuestion] = useState("");
  const [answerOptions, setAnswerOptions] = useState([]);
  const [numberOfOptions, setNumberOfOptions] = useState(2);
  const [optionList, setOptionList] = useState({ options: [1, 2] });

  // <AnswerOptionInput
  //   id={2}
  //   answerOptions={answerOptions}
  //   setAnswerOptions={setAnswerOptions}
  // />;

  const handleButtonPress = () => {
    setNumberOfOptions((prev) => ++prev);
    setOptionList((prev) => ({
      options: [...prev.options, numberOfOptions],
    }));
  };

  return (
    <Panel>
      <QuestionInput question={question} setQuestion={setQuestion} />
      <Seperator />
      {optionList.options.map((option, idx) => {
        return (
          <AnswerOptionInput
            id={option}
            key={idx}
            answerOptions={answerOptions}
            setAnswerOptions={setAnswerOptions}
          />
        );
      })}
      <div className="poll-buttons-container">
        <Add className="button--add-option" onClick={handleButtonPress} />
        <div className="right">
          <span className="button">Cancel</span>
          <span className="button button--cta">Create Poll</span>
        </div>
      </div>
    </Panel>
  );
}
