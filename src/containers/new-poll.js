import React, { useState, useEffect } from "react";
import { ReactComponent as Add } from "../images/add.svg";
import { ReactComponent as Minus } from "../images/minus.svg";
import { useStore } from "../stores/store";
import { observer } from "mobx-react-lite";

import {
  Panel,
  QuestionInput,
  PollOptionInput,
  Seperator,
} from "../components";

// New Poll Panel
const NewPoll = observer(({ setCreateNewPoll, setPolls }) => {
  // Get access to store context
  const store = useStore();

  // Get this polls unique id
  const pollId = store.blankPollId;

  const OPTION_LIMIT = 10;
  const [question, setQuestion] = useState(""); // Question for poll
  const [questionInvalid, setQuestionInvalid] = useState(false); // If question is invalid
  const [isPollSubmissionAttempt, setIsPollSubmissionAttempt] = useState(false); // A submission attempt has been made

  // Check if question is invalid
  useEffect(() => {
    if (isPollSubmissionAttempt) {
      if (question.trim() === "") {
        setQuestionInvalid(true);
      } else {
        setQuestionInvalid(false);
      }
    }
  }, [isPollSubmissionAttempt, question]);

  // Handle Create Poll button press
  const handleCreatePollClick = () => {
    const options = [];

    // // Remove all empty options
    // for (let option in pollOptions) {
    //   if (option.trim() !== "") {
    //     options.push(pollOptions[option]);
    //   }
    // }

    // An attempt has been made
    setIsPollSubmissionAttempt(true);

    // Check if new poll is valid
    if (question.trim() === "" || options.length <= 1) {
      alert("Error");
    } else {
      // Add new poll
      setPolls((prev) => [
        { question: question.trim(), options: options },
        ...prev,
      ]);

      // Close new poll panel
      setCreateNewPoll(false);
    }
  };

  return (
    <Panel>
      <QuestionInput invalid={questionInvalid} store={store} pollId={pollId} />
      <Seperator />
      {/* Display poll options */}
      {store.polls[pollId].options.map((option) => {
        return (
          <PollOptionInput
            key={option.optionId}
            optionId={option.optionId}
            pollId={pollId}
            store={store}
            invalid={false}
          />
        );
      })}
      <Seperator />
      <div className="poll-buttons-container">
        {/* Add Poll Option Button */}
        <Add
          className={`button--option-list ${
            store.polls[pollId].options.length < OPTION_LIMIT ? `` : `disabled`
          }`}
          onClick={() => store.newPollOption(pollId)}
        />

        {/* Remove poll option button */}
        <Minus
          className={`button--option-list ${
            store.polls[pollId].options.length <= 2 ? `disabled` : ``
          }`}
          onClick={() => store.removePollOption(pollId)}
        />

        <div className="right">
          {/* Cancel poll creation button */}
          <span
            className="button hide-on-mobile"
            // onClick={() => setCreateNewPoll(false)}
            onClick={() => store.cancelBlankPoll()}
          >
            Cancel
          </span>

          {/* CHANGE TO MOBX */}
          {/* Create poll button */}
          <span className="button button--cta" onClick={handleCreatePollClick}>
            Create Poll
          </span>
        </div>
      </div>
    </Panel>
  );
});

export default NewPoll;
