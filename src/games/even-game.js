import baseGame from '../common/game.js';
import getRandomInt from '../utils/random-int.js';
import convertToAnswerString from '../utils/boolean-to-yes-no-string.js';
import isEven from '../utils/is-even.js';

const maxGeneratedNumber = 100;

const generateQuestionAndAnswer = () => {
  const number = getRandomInt(maxGeneratedNumber);
  const isNumberEven = isEven(number);
  const correctAnswer = convertToAnswerString(isNumberEven);
  const resultObject = {
    question: `${number}`,
    answer: correctAnswer,
  };

  return resultObject;
};

const runEvenGame = () => {
  baseGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestionAndAnswer,
  );
};

export default runEvenGame;
