import baseGame from '../common/game.js';
import getRandomInt from '../utils/random-int.js';
import convertToAnswerString from '../utils/boolean-to-yes-no-string.js';

const maxGeneratedNumber = 100;

const isEven = (number) => {
  if (typeof number !== 'number') {
    throw new Error('Put number to this function');
  }
  return number % 2 === 0;
};

const generateQuestionAndAnswer = () => {
  const number = getRandomInt(maxGeneratedNumber);
  const isNumberEven = isEven(number);
  const correctAnswer = convertToAnswerString(isNumberEven);
  return {
    question: number.toString(),
    answer: correctAnswer,
  };
};

const gameTaskMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => {
  baseGame(gameTaskMessage, generateQuestionAndAnswer);
};

export default runEvenGame;
