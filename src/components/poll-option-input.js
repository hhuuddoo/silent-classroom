import React from "react";
import { observer } from "mobx-react-lite";

// Poll Option Input Text Box
const PollOptionInput = observer(({ store, pollId, optionId }) => {
  return (
    <>
      <input
        className={`input input--option`}
        value={store.polls[pollId].options[optionId].option}
        placeholder="Enter poll option..."
        type="text"
        onChange={({ target }) =>
          store.setPollOption(target.value, optionId, pollId)
        }
      ></input>
    </>
  );
});

export default PollOptionInput;
