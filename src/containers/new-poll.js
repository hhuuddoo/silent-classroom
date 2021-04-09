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
const NewPoll = observer(() => {
  // Get access to store context
  const store = useStore();

  // Get this polls unique id
  const pollId = store.blankPollId;

  // Max number of options
  const OPTION_LIMIT = 10;

  // Handle Create Poll button press
  const handleCreatePollClick = () => {
    // Remove all empty options
    // Check if poll question is valid
    // Close new poll panel
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
