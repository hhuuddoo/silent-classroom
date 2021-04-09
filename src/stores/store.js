import { makeAutoObservable } from "mobx";
import * as STATUS from "../constants/poll-status";
import React from "react";

class PollStore {
  // variable to store polls in application
  polls = [
    {
      pollId: 0,
      status: STATUS.CLOSED,
      question: "Example Question? (CLOSED)",
      options: [
        { optionId: 1, option: "Option 1", votes: 3 },
        { optionId: 2, option: "Option 2", votes: 5 },
      ],
    },
    {
      pollId: 1,
      status: STATUS.VOTING,
      question: "Example Question? (VOTING)",
      options: [
        { optionId: 1, option: "Option 1", votes: 3 },
        { optionId: 2, option: "Option 2", votes: 5 },
      ],
    },
  ];

  // If a new poll is currently being created
  blankPollCreated = false;

  constructor() {
    makeAutoObservable(this);
  }

  // Adds a blank poll to polls array
  createBlankPoll() {
    const blankPoll = {
      pollId: this.polls.length,
      status: STATUS.CREATE,
      question: "",
      options: [
        { optionId: 0, option: "", votes: 0 },
        { optionId: 1, option: "", votes: 0 },
      ],
    };
    this.polls.push(blankPoll);
    this.blankPollCreated = true;
  }

  // Cancel the creation of a new poll
  cancelBlankPoll() {
    if (this.blankPollCreated) {
      this.blankPollCreated = false;
      this.polls.pop();
    }
  }

  // Get the id of the blank poll if it exists
  get blankPollId() {
    if (!this.blankPollCreated) return -1;
    return this.polls.length - 1;
  }

  // Get all polls
  get getPolls() {
    return this.polls;
  }

  // Add a new poll option to a given poll
  newPollOption(pollId) {
    const blankOption = {
      optionId: this.polls[pollId].options.length,
      option: "",
      votes: 0,
    };
    this.polls[pollId].options.push(blankOption);
  }

  // Set value of poll option
  setPollOption(option, optionId, pollId) {
    this.polls[pollId].options[optionId].option = option;
  }

  // Remove most recent poll option from a given poll
  removePollOption(pollId) {
    console.log(this.polls[pollId].options.pop());
  }

  // Set the question of a given poll
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
