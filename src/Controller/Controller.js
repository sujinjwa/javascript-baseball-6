import OutputView from '../View/OutputView.js';
import InputView from '../View/InputView.js';

import User from '../Model/User.js';
import Computer from '../Model/Computer.js';
import HintCounter from '../Model/HintCounter.js';
import RandomNumbersMaker from '../Model/RandomNumbersMaker.js';

import ErrorCatcher from '../ErrorCatcher.js';

class Controller {
  constructor() {
    this.user = new User();
    this.computer = new Computer();
  }

  async init() {
    OutputView.printStartMessage();

    await this.readNumbers();
  }

  async readNumbers() {
    const numbers = await InputView.readNumbers();

    this.validateNumbers(numbers);
  }

  validateNumbers(numbers) {
    try {
      ErrorCatcher.validateType(numbers);
      ErrorCatcher.validateLength(numbers);
      ErrorCatcher.validateUnique(numbers);

      this.setUserAnswer(numbers);
    } catch (error) {
      OutputView.printError(error);
      throw new Error(error);
    }
  }

  setUserAnswer(numbers) {
    this.user.setAnswer(numbers);

    this.setComputerAnswer();
  }

  setComputerAnswer() {
    const randomNumbersMaker = new RandomNumbersMaker();
    this.computer.setAnswer(randomNumbersMaker.makeNumbers());

    this.compareUserToComputer();
  }

  compareUserToComputer() {
    const hintCounter = new HintCounter();
    hintCounter.countHint(this.user.getAnswer(), this.computer.getAnswer());

    this.printHint(hintCounter);
  }

  printHint(hintCounter) {
    OutputView.printMessage(hintCounter.getHint());
  }
}

export default Controller;
