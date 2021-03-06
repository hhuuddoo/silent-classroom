import React from "react";
import { observer } from "mobx-react-lite";

// Input for entering questions
const QuestionInput = observer(({ invalid, store, pollId }) => {
  return (
    <input
      className={`input input--question ${invalid ? `invalid` : ``}`}
      autoFocus={true}
      placeholder="Enter a question here..."
      value={store.polls[pollId].question}
      onChange={({ target }) => store.setQuestion(target.value, pollId)}
    ></input>
  );
});

export default QuestionInput;
