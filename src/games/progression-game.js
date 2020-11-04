import baseGame from '../common/game.js';
import getRandomInt from '../utils/random-int.js';

const options = {
  maxItems: 10,
  minItems: 5,
};

const maxGeneratedNumber = 100;

const generateQuestionAndAnswer = () => {
  const startNumber = getRandomInt(maxGeneratedNumber);
  const progressionNumber = getRandomInt(maxGeneratedNumber);
  const arraySize = getRandomInt(options.maxItems, options.minItems);
  const indexToSkip = getRandomInt(arraySize - 1);
  const questionArray = Array.from(Array(arraySize)).map((_value, index) => (indexToSkip !== index ? startNumber + progressionNumber * index : '..'));
  const resultObject = {
    question: `${questionArray.join(' ')}`,
    answer: `${startNumber + progressionNumber * indexToSkip}`,
  };

  return resultObject;
};

const runProgressionGame = () => {
  baseGame(
    'What number is missing in the progression?',
    generateQuestionAndAnswer,
  );
};

export default runProgressionGame;
