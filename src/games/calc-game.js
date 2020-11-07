import runGameEngine from '../common/game-engine.js';
import getRandomInt from '../utils/random-int.js';

const mathSigns = ['+', '-', '*'];

const maxGeneratedNumber = 100;

const calculate = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      throw new Error(`Math operation doesn't exist: ${sign}`);
  }
};

const generateQuestionAndAnswer = () => {
  const firstNumber = getRandomInt(maxGeneratedNumber);
  const secondNumber = getRandomInt(maxGeneratedNumber);
  const signToUse = mathSigns[getRandomInt(mathSigns.length - 1)];
  return {
    question: `${firstNumber} ${signToUse} ${secondNumber}`,
    answer: calculate(firstNumber, secondNumber, signToUse).toString(),
  };
};

const gameTaskMessage = 'What is the result of the expression?';

const runCalcGame = () => {
  runGameEngine(gameTaskMessage, generateQuestionAndAnswer);
};

export default runCalcGame;
