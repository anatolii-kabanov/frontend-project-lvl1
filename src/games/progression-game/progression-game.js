import BaseGame from '../../common/game.js';

const options = {
  maxItems: 10,
  minItems: 5,
};

const progressionGame = (rightAnswersToWin = 3, maxGeneratedNumber = 100) => {
  const baseGame = new BaseGame(
    rightAnswersToWin,
    maxGeneratedNumber,
    'What number is missing in the progression?',
  );
  baseGame.generateQuestionAndAnswer = () => {
    const startNumber = baseGame.getRandomInt(baseGame.maxGeneratedNumber);
    const progressionNumber = baseGame.getRandomInt(baseGame.maxGeneratedNumber);
    const arraySize = baseGame.getRandomInt(options.maxItems, options.minItems);
    const indexToSkip = baseGame.getRandomInt(arraySize - 1);
    const questionArray = Array.from(Array(arraySize)).map((_value, index) => (indexToSkip !== index ? startNumber + progressionNumber * index : '..'));
    const resultObject = {
      question: `${questionArray.join(' ')}`,
      answer: `${startNumber + progressionNumber * indexToSkip}`,
    };

    return resultObject;
  };

  return baseGame;
};

export default progressionGame;
