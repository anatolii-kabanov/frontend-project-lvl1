import runGameEngine from '../common/game-engine.js';
import getRandomInt from '../utils/random-int.js';

const maxGeneratedNumber = 100;

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

const generateQuestionAndAnswer = () => {
  const firstNumber = getRandomInt(maxGeneratedNumber);
  const secondNumber = getRandomInt(maxGeneratedNumber);
  return {
    question: `${firstNumber} ${secondNumber}`,
    answer: gcd(firstNumber, secondNumber),
  };
};

const gameTaskMessage = 'Find the greatest common divisor of given numbers.';

const runGcdGame = () => {
  runGameEngine(gameTaskMessage, generateQuestionAndAnswer);
};

export default runGcdGame;
