import BaseGame from '../common/game.js';

const gcd = (firstNumber, secondNumber) => {
  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    throw new Error('Put numbers to this function');
  }
  let x = Math.abs(firstNumber);
  let y = Math.abs(secondNumber);
  while (y) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return `${x}`;
};

class GcdGame extends BaseGame {
  constructor(rightAnswersToWin = 3, maxGeneratedNumber = 100) {
    super(
      rightAnswersToWin,
      maxGeneratedNumber,
      'Find the greatest common divisor of given numbers.',
    );
  }

  generateQuestionAndAnswer() {
    const firstNumber = BaseGame.getRandomInt(this.maxGeneratedNumber);
    const secondNumber = BaseGame.getRandomInt(this.maxGeneratedNumber);
    const resultObject = {
      question: `${firstNumber} ${secondNumber}`,
      answer: gcd(firstNumber, secondNumber),
    };

    return resultObject;
  }
}

export default GcdGame;
