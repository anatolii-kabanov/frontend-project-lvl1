import baseGame from '../common/game.js';
import getRandomInt from '../utils/random-int.js';

const mathSigns = {
  0: '+',
  1: '-',
  2: '*',
};

const maxGeneratedNumber = 100;

const calculate = (firstNumber, secondNumber, sign) => {
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
};

const generateQuestionAndAnswer = () => {
  const firstNumber = getRandomInt(maxGeneratedNumber);
  const secondNumber = getRandomInt(maxGeneratedNumber);
  const signToUse = mathSigns[getRandomInt(3)];
  return {
    question: `${firstNumber} ${signToUse} ${secondNumber}`,
    answer: calculate(firstNumber, secondNumber, signToUse),
  };
};

const gameTaskMessage = 'What is the result of the expression?';

const runCalcGame = () => {
  baseGame(gameTaskMessage, generateQuestionAndAnswer);
};

export default runCalcGame;
