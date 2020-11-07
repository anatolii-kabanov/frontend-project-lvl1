import runGameEngine from '../common/game-engine.js';
import getRandomInt from '../utils/random-int.js';

const maxGeneratedNumber = 100;

const isEven = (number) => {
  if (typeof number !== 'number') {
    throw new Error('Put number to this function');
  }
  return number % 2 === 0;
};

const answer = {
  YES: 'yes',
  NO: 'no',
};

const generateQuestionAndAnswer = () => {
  const number = getRandomInt(maxGeneratedNumber);
  const isNumberEven = isEven(number);
  const correctAnswer = isNumberEven ? answer.YES : answer.NO;
  return {
    question: number.toString(),
    answer: correctAnswer,
  };
};

const gameTaskMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const runEvenGame = () => {
  runGameEngine(gameTaskMessage, generateQuestionAndAnswer);
};

export default runEvenGame;
