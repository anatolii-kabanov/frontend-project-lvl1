import BaseGame from '../common/game.js';

const options = {
  maxItems: 10,
  minItems: 5,
};

class ProgressionGame extends BaseGame {
  constructor(rightAnswersToWin = 3, maxGeneratedNumber = 100) {
    super(
      rightAnswersToWin,
      maxGeneratedNumber,
      'What number is missing in the progression?',
    );
  }

  generateQuestionAndAnswer() {
    const startNumber = BaseGame.getRandomInt(this.maxGeneratedNumber);
    const progressionNumber = BaseGame.getRandomInt(this.maxGeneratedNumber);
    const arraySize = BaseGame.getRandomInt(options.maxItems, options.minItems);
    const indexToSkip = BaseGame.getRandomInt(arraySize - 1);
    const questionArray = Array.from(Array(arraySize)).map((_value, index) => (indexToSkip !== index ? startNumber + progressionNumber * index : '..'));
    const resultObject = {
      question: `${questionArray.join(' ')}`,
      answer: `${startNumber + progressionNumber * indexToSkip}`,
    };

    return resultObject;
  }
}

export default ProgressionGame;
