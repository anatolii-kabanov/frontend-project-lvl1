import promptly from 'promptly';
import gameResult from '../constants/game-result.constant.js';
import answer from '../constants/answer.constant.js';

class Game {
  constructor(
    rightAnswersToWin = 3,
    maxGeneratedNumber = 1000,
    greetingsMessage,
  ) {
    this.rightAnswersToWin = rightAnswersToWin;
    this.maxGeneratedNumber = maxGeneratedNumber;
    this.greetingsMessage = greetingsMessage;
    if (typeof this.generateQuestionAndAnswer !== 'function') {
      throw new Error('Implement generateQuestionAndAnswer function');
    }
  }

  static convertToAnswerString(flag) {
    return flag ? answer.YES : answer.NO;
  }

  static getRandomInt(max = Number.MAX_SAFE_INTEGER, startNumber = 0) {
    return Math.floor(Math.random() * Math.floor(max)) + startNumber;
  }

  gameGreetings() {
    console.log(this.greetingsMessage);
  }

  async readUserName() {
    this.userName = await promptly.prompt('May I have your name? ');
  }

  async runGameAsync() {
    for (let i = 0; i < this.rightAnswersToWin; i += 1) {
      const qaObject = this.generateQuestionAndAnswer();
      console.log(`Question: ${qaObject.question}`);
      // eslint-disable-next-line no-await-in-loop
      const userAnswer = await promptly.prompt('Your answer: ');
      if (qaObject.answer !== userAnswer) {
        console.log(
          `'${userAnswer}' is wrong answer ;(. Correct answer was '${qaObject.answer}'.`,
        );
        return gameResult.FAIL;
      }
      console.log('Correct!');
    }
    return gameResult.SUCCESS;
  }

  async runAsync() {
    console.log('Welcome to the Brain Games!');
    await this.readUserName();
    console.log(`Hello, ${this.userName}!`);
    this.gameGreetings();
    const result = await this.runGameAsync();
    switch (result) {
      case gameResult.SUCCESS:
        console.log(`Congratulations, ${this.userName}!`);
        break;
      case gameResult.FAIL:
        console.log(`Let's try again, ${this.userName}!`);
        break;
      default:
        break;
    }
  }
}

export default Game;
