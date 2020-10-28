import BaseGame from '../../common/game.js';

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

const gcdGame = (rightAnswersToWin = 3, maxGeneratedNumber = 100) => {
  const baseGame = new BaseGame(
    rightAnswersToWin,
    maxGeneratedNumber,
    'Find the greatest common divisor of given numbers.',
  );
  baseGame.generateQuestionAndAnswer = () => {
    const firstNumber = baseGame.getRandomInt(baseGame.maxGeneratedNumber);
    const secondNumber = baseGame.getRandomInt(baseGame.maxGeneratedNumber);
    const resultObject = {
      question: `${firstNumber} ${secondNumber}`,
      answer: gcd(firstNumber, secondNumber),
    };

    return resultObject;
  };

  return baseGame;
};

export default gcdGame;
