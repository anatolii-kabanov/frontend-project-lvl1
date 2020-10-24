import BaseGame from '../common/game.js';

const mathSigns = {
  0: '+',
  1: '-',
  2: '*',
};

class CalcGame extends BaseGame {
  constructor(rightAnswersToWin = 5, maxGeneratedNumber = 100) {
    super(
      rightAnswersToWin,
      maxGeneratedNumber,
      'What is the result of the expression?',
    );
  }

  static calculate(firstNumber, secondNumber, sign) {
    switch (sign) {
      case '+':
        return `${firstNumber + secondNumber}`;
      case '-':
        return `${firstNumber - secondNumber}`;
      case '*':
        return `${firstNumber * secondNumber}`;
      default:
        return null;
    }
  }

  generateQuestionAndAnswer() {
    const firstNumber = BaseGame.getRandomInt(this.maxGeneratedNumber);
    const secondNumber = BaseGame.getRandomInt(this.maxGeneratedNumber);
    const signToUse = mathSigns[BaseGame.getRandomInt(3)];
    const resultObject = {
      question: `${firstNumber} ${signToUse} ${secondNumber}`,
      answer: CalcGame.calculate(firstNumber, secondNumber, signToUse),
    };

    return resultObject;
  }
}

export default CalcGame;
