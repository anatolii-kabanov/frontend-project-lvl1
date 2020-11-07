import runGameEngine from '../common/game-engine.js';
import getRandomInt from '../utils/random-int.js';

const options = {
  maxItems: 10,
  minItems: 5,
};

const maxGeneratedNumber = 100;

const getProgression = (firstStep, step, progressionLength) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstStep + step * i);
  }
  return progression;
};

const generateQuestionAndAnswer = () => {
  const firstStep = getRandomInt(maxGeneratedNumber);
  const step = getRandomInt(maxGeneratedNumber);
  const progressionLength = getRandomInt(options.maxItems, options.minItems);
  const indexToSkip = getRandomInt(progressionLength - 1);
  const progression = getProgression(firstStep, step, progressionLength);
  const answer = progression[indexToSkip];
  progression[indexToSkip] = '..';
  return {
    question: progression.join(' '),
    answer: answer.toString(),
  };
};

const gameTaskMessage = 'What number is missing in the progression?';

const runProgressionGame = () => {
  runGameEngine(
    gameTaskMessage,
    generateQuestionAndAnswer,
  );
};

export default runProgressionGame;
