import React, { useState, useEffect } from "react";
import { ReactComponent as Add } from "../images/add.svg";
import { ReactComponent as Minus } from "../images/minus.svg";

import {
  Panel,
  QuestionInput,
  PollOptionInput,
  Seperator,
} from "../components";

// New Poll Panel
export default function NewPoll({ setCreateNewPoll, setPolls }) {
  const OPTION_LIMIT = 10;
  const [question, setQuestion] = useState(""); // Question for poll
  const [questionInvalid, setQuestionInvalid] = useState(false);
  const [pollOptions, setPollOptions] = useState([]); // Options for poll
  const [numberOfOptions, setNumberOfOptions] = useState(2); // Number of options in poll
  const [optionList, setOptionList] = useState({ options: [1, 2] }); // Option components
  const [optionUpdateType, setOptionUpdateType] = useState(""); // Holds whether to add or remove option
  const [isPollSubmissionAttempt, setIsPollSubmissionAttempt] = useState(false); // A submission attempt has been made

  // Set question invalid state
  useEffect(() => {
    if (isPollSubmissionAttempt) {
      if (question.trim() === "") {
        setQuestionInvalid(true);
      } else {
        setQuestionInvalid(false);
      }
    }
  }, [isPollSubmissionAttempt, question]);

  // Execute when create poll button is clicked
  const handleCreatePollClick = () => {
    const options = [];

    for (let option in pollOptions) {
      if (option.trim() !== "") {
        options.push(pollOptions[option]);
      }
    }

    setIsPollSubmissionAttempt(true);

    console.log("HERE");
    console.log(options);

    if (question.trim() === "" || options.length <= 1) {
      alert("Error");
    } else {
      setPolls((prev) => [
        { question: question.trim(), options: options },
        ...prev,
      ]);
      setCreateNewPoll(false);
    }
  };

  // Update Poll Option Component List
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
    if (numberOfOptions < OPTION_LIMIT) {
      setNumberOfOptions((prev) => prev + 1);
      setOptionUpdateType("ADD");
    }
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
      <QuestionInput
        question={question}
        setQuestion={setQuestion}
        invalid={questionInvalid}
      />
      <Seperator />
      {optionList.options.map((option, idx) => {
        return (
          <PollOptionInput
            id={option}
            key={idx}
            pollOptions={pollOptions}
            setPollOptions={setPollOptions}
          />
        );
      })}
      <Seperator />
      <div className="poll-buttons-container">
        <Add
          className={`button--option-list ${
            numberOfOptions < OPTION_LIMIT ? `` : `disabled`
          }`}
          onClick={addOption}
        />
        <Minus
          className={`button--option-list ${
            numberOfOptions <= 2 ? `disabled` : ``
          }`}
          onClick={removeOption}
        />
        <div className="right">
          <span
            className="button hide-on-mobile"
            onClick={() => setCreateNewPoll(false)}
          >
            Cancel
          </span>
          <span className="button button--cta" onClick={handleCreatePollClick}>
            Create Poll
          </span>
        </div>
      </div>
    </Panel>
  );
}
