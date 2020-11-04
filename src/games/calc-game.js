import baseGame from '../common/game.js';
import getRandomInt from '../utils/random-int.js';
import calculate from '../utils/calculator.js';

const mathSigns = {
  0: '+',
  1: '-',
  2: '*',
};

const maxGeneratedNumber = 100;

const generateQuestionAndAnswer = () => {
  const firstNumber = getRandomInt(maxGeneratedNumber);
  const secondNumber = getRandomInt(maxGeneratedNumber);
  const signToUse = mathSigns[getRandomInt(3)];
  const resultObject = {
    question: `${firstNumber} ${signToUse} ${secondNumber}`,
    answer: calculate(firstNumber, secondNumber, signToUse),
  };

  return resultObject;
};

const runCalcGame = () => {
  baseGame('What is the result of the expression?', generateQuestionAndAnswer);
};

export default runCalcGame;
