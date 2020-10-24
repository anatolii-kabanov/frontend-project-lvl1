import promptly from 'promptly';

class Game {
  constructor(rightAnswersToWin = 3, maxGeneratedNumber = 1000, greetingsMessage) {
    this.rightAnswersToWin = rightAnswersToWin;
    this.maxGeneratedNumber = maxGeneratedNumber;
    this.greetingsMessage = greetingsMessage;
    if (typeof this.runGameAsync !== 'function') {
      throw new Error('Implement runGameAsync function');
    }
  }

  static getRandomInt(max = Number.MAX_SAFE_INTEGER) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  gameGreetings() {
    console.log(this.greetingsMessage);
  }

  async readUserName() {
    this.userName = await promptly.prompt('May I have your name? ');
  }

  async runAsync() {
    console.log('Welcome to the Brain Games!');
    await this.readUserName();
    console.log(`Hello, ${this.userName}!`);
    this.gameGreetings();
    await this.runGameAsync();
  }
}

export default Game;
