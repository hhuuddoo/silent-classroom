import { makeAutoObservable } from "mobx";
import React from "react";

class PollStore {
  // variable to store polls in application
  polls = [
    {
      pollId: 0,
      question: "My Question",
      options: [
        { optionId: 1, option: "Option 1", votes: 3 },
        { optionId: 2, option: "Option 2", votes: 5 },
      ],
    },
  ];

  blankPollCreated = false;

  constructor() {
    makeAutoObservable(this);
  }

  // Adds a blank poll to polls array
  createBlankPoll() {
    const blankPoll = {
      pollId: this.polls.length,
      question: "",
      options: [
        { optionId: 0, option: "", votes: 0 },
        { optionId: 1, option: "", votes: 0 },
      ],
    };
    this.polls.push(blankPoll);
    this.blankPollCreated = true;
  }

  get blankPollId() {
    if (!this.blankPollCreated) return -1;
    return this.polls.length - 1;
  }

  get getPolls() {
    return this.polls;
  }

  addNewOption(pollId) {
    const blankOption = {
      optionId: this.polls[pollId].options.length,
      option: "",
      votes: 0,
    };
    console.log(this.polls[pollId]);
    this.polls[pollId].options.push(blankOption);
  }

  setQuestion(question, pollId) {
    this.polls[pollId].question = question;
  }
}

const StoreContext = React.createContext();

const StoreProvider = ({ store, children }) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const useStore = () => {
  return React.useContext(StoreContext);
};

export { PollStore, StoreProvider, useStore };
