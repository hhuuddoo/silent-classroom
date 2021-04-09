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
    const newPoll = { pollId: this.polls.length, question: "", options: [] };
    this.polls.push(newPoll);
    this.blankPollCreated = true;
  }

  get getPolls() {
    return this.polls;
  }

  // get poll(pollId) {
  //   return this.polls.find((poll) => poll.pollId === pollId);
  // }

  addOption(option, pollId) {
    const targetPoll = this.polls.find((poll) => poll.pollId === pollId);
    targetPoll.options.push(option);
  }

  setQuestion(question, pollId) {
    const targetPollIndex = this.polls.findIndex(
      (poll) => poll.pollId === pollId
    );
    console.log(this.polls[targetPollIndex].question);
    this.polls[targetPollIndex].question = question;

    // targetPoll.question = question;
    console.log(`TARGET POLL QUESTION ${question}`);
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
