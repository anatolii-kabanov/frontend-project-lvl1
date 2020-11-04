import baseGame from '../common/game.js';
import getRandomInt from '../utils/random-int.js';
import gcd from '../utils/gcd.js';

const maxGeneratedNumber = 100;

const generateQuestionAndAnswer = () => {
  const firstNumber = getRandomInt(maxGeneratedNumber);
  const secondNumber = getRandomInt(maxGeneratedNumber);
  const resultObject = {
    question: `${firstNumber} ${secondNumber}`,
    answer: gcd(firstNumber, secondNumber),
  };

  return resultObject;
};

const runGcdGame = () => {
  baseGame(
    'Find the greatest common divisor of given numbers.',
    generateQuestionAndAnswer,
  );
};

export default runGcdGame;
