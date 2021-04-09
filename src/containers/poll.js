import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store";
import { Panel, Question, Seperator, PollOption } from "../components";

// Poll container
const Poll = observer(({ question, options, pollId }) => {
  // Access store
  const store = useStore();

  // Holds the OptionId of the selected radio button
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  return (
    <Panel>
      <Question>{question}</Question>
      <Seperator />

      {/* Display options on poll panel */}
      {options.map(({ option, optionId }) => {
        return (
          <PollOption
            key={optionId}
            option={option}
            optionId={optionId}
            setSelectedOptionId={setSelectedOptionId}
            name={`options_${pollId}`}
            id={`option_${pollId}_${optionId}`}
          />
        );
      })}

      <Seperator />
      <div className="right">
        <span
          className="button button--cta"
          onClick={() => store.addVote(pollId, selectedOptionId)}
        >
          Vote
        </span>
      </div>
    </Panel>
  );
});

export default Poll;
