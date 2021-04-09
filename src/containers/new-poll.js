import React, { useState } from "react";
import { ReactComponent as Add } from "../images/add.svg";
import { ReactComponent as Minus } from "../images/minus.svg";
import { useStore } from "../store";
import { observer } from "mobx-react-lite";

import {
  Panel,
  QuestionInput,
  PollOptionInput,
  Seperator,
} from "../components";

// New Poll Panel
const NewPoll = observer(() => {
  // Get access to store context
  const store = useStore();

  // Get this polls unique id
  const pollId = store.blankPollId;

  // Max number of options
  const OPTION_LIMIT = 10;
  const MIN_OPTIONS = 2;

  // Create error state variable
  const [error, setError] = useState("");

  // Handle Create Poll button press
  const handleCreatePollClick = () => {
    // Check if poll question is valid
    if (!store.isQuestionValid) {
      setError("Invalid Question Entered");
      return;
    }

    // Check if options are invalid
    if (store.validOptionCount < MIN_OPTIONS) {
      setError("You must enter at least 2 options");
      return;
    }

    // Reset error state
    setError("");

    // Add poll
    store.addNewPoll(pollId);
  };

  return (
    <Panel>
      <QuestionInput invalid={false} store={store} pollId={pollId} />
      <Seperator />

      {/* Display poll options */}
      {store.polls[pollId].options.map((option) => {
        return (
          <PollOptionInput
            key={option.optionId}
            optionId={option.optionId}
            pollId={pollId}
            store={store}
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
            className="button"
            // onClick={() => setCreateNewPoll(false)}
            onClick={() => store.cancelBlankPoll()}
          >
            Cancel
          </span>

          {/* Create poll button */}
          <span className="button button--cta" onClick={handleCreatePollClick}>
            Create Poll
          </span>
        </div>
      </div>

      {/* Display Error Text */}
      {error !== "" ? <span className="error-text center">{error}</span> : null}
    </Panel>
  );
});

export default NewPoll;
