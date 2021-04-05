import React, { useState, useEffect } from "react";
import { ReactComponent as Add } from "../images/add.svg";
import { ReactComponent as Minus } from "../images/minus.svg";

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
  const [optionUpdateType, setOptionUpdateType] = useState("");

  useEffect(() => {
    if (optionUpdateType === "ADD") {
      setOptionList((prev) => ({
        options: [...prev.options, numberOfOptions],
      }));
    } else if (optionUpdateType === "REMOVE") {
      setOptionList((prev) => {
        const options = [...prev.options];
        options.splice(numberOfOptions);
        return { options: options };
      });
    }
  }, [numberOfOptions, optionUpdateType]);

  // Add poll option
  const addOption = () => {
    setNumberOfOptions((prev) => prev + 1);
    setOptionUpdateType("ADD");
  };

  // Remove most recent option (if there are more than two)
  const removeOption = () => {
    if (numberOfOptions > 2) {
      setNumberOfOptions((prev) => prev - 1);
      setOptionUpdateType("REMOVE");
    }
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
        <Add className="button--option-list" onClick={addOption} />
        <Minus className="button--option-list" onClick={removeOption} />
        <div className="right">
          <span className="button">Cancel</span>
          <span className="button button--cta">Create Poll</span>
        </div>
      </div>
    </Panel>
  );
}
