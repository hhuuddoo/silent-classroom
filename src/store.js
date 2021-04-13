import { makeAutoObservable } from "mobx";
import * as STATUS from "./constants/poll-status";
import React from "react";

class PollStore {
  MAX_POLLS = 10;
  MIN_POLLS = 2;

  // Variable to store polls
  polls = [];

  pollTitle = "Some Poll Title";

  // Whether a new poll is currently being created
  blankPollCreated = false;

  // initialise PollStore class
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
    if (this.polls[pollId].options.length >= this.MAX_POLLS) return;
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
    if (this.polls[pollId].options.length <= this.MIN_POLLS) return;
    this.polls[pollId].options.pop();
  }

  // Open poll for voting
  addNewPoll(pollId) {
    this.blankPollCreated = false;
    this.polls[pollId].options = this.polls[pollId].options.filter(
      (option) => option.option.trim() !== ""
    );
    this.polls[pollId].status = STATUS.OPEN;
  }

  // Add vote to given option
  addVote(pollId, optionId) {
    const poll = this.polls[pollId];
    poll.options[optionId].votes++;
    poll.totalVotes++;
    poll.status = STATUS.CLOSED;
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
