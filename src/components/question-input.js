import React from "react";
import { observer } from "mobx-react-lite";

// Input for entering questions
const QuestionInput = observer(({ invalid, store }) => {
  return (
    <input
      className={`input input--question ${invalid ? `invalid` : ``}`}
      autoFocus={true}
      placeholder="Enter a question here..."
      value={store.polls[store.polls.length - 1].question}
      onChange={({ target }) =>
        store.setQuestion(target.value, store.polls.length - 1)
      }
    ></input>
  );
});

export default QuestionInput;
