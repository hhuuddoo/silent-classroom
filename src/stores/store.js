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
      totalVotes: 8, // Add reference to votes
      options: [
        { optionId: 1, option: "Option 1", votes: 3 },
        { optionId: 2, option: "Option 2", votes: 5 },
      ],
    },
    {
      pollId: 1,
      status: STATUS.OPEN,
      question: "Example Question? (VOTING)",
      totalVotes: 8,
      options: [
        { optionId: 1, option: "Option 1", votes: 3 },
        { optionId: 2, option: "Option 2", votes: 5 },
      ],
    },
    {
      pollId: 2,
      status: STATUS.OPEN,
      question: "Example Question 2? (VOTING)",
      totalVotes: 221,
      options: [
        { optionId: 1, option: "Option 3", votes: 90 },
        { optionId: 2, option: "Option 4", votes: 131 },
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
      totalVotes: 0,
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

  // Change blank poll status to open
  addNewPoll(pollId) {
    this.blankPollCreated = false;
    this.polls[pollId].options = this.polls[pollId].options.filter(
      (option) => option.option.trim() !== ""
    );
    this.polls[pollId].status = STATUS.OPEN;
  }

  // Set the question of a given poll
  setQuestion(question, pollId) {
    this.polls[pollId].question = question;
  }

  // Get all completed polls
  get completedPolls() {
    return this.polls.filter((poll) => poll.status === STATUS.CLOSED);
  }

  // Get all open polls
  get openPolls() {
    return this.polls.filter((poll) => poll.status === STATUS.OPEN);
  }

  // Check if new poll question is valid
  get isQuestionValid() {
    return this.polls[this.blankPollId].question.trim() !== "";
  }

  // Check if new poll options are valid
  get validOptionCount() {
    return this.polls[this.blankPollId].options.filter(
      (option) => option.option.trim() !== ""
    ).length;
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
