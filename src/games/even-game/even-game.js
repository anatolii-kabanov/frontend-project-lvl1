import BaseGame from '../../common/game.js';

const isEven = (number) => {
  if (typeof number !== 'number') {
    throw new Error('Put number to this function');
  }
  return number % 2 === 0;
};

const evenGame = (rightAnswersToWin = 3, maxGeneratedNumber = 100) => {
  const baseGame = new BaseGame(
    rightAnswersToWin,
    maxGeneratedNumber,
    'Answer "yes" if the number is even, otherwise answer "no".',
  );
  baseGame.generateQuestionAndAnswer = () => {
    const number = baseGame.getRandomInt(baseGame.maxGeneratedNumber);
    const isNumberEven = isEven(number);
    const correctAnswer = baseGame.convertToAnswerString(isNumberEven);
    const resultObject = {
      question: `${number}`,
      answer: correctAnswer,
    };

    return resultObject;
  };

  return baseGame;
};

export default evenGame;
