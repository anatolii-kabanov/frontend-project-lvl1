import baseGame from '../../common/game.js';
import getRandomInt from '../../utils/random-int.js';
import convertToAnswerString from '../../utils/boolean-to-yes-no-string.js';

const isEven = (number) => {
  if (typeof number !== 'number') {
    throw new Error('Put number to this function');
  }
  return number % 2 === 0;
};

const maxGeneratedNumber = 100;

const evenGame = async () => {
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

  await baseGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestionAndAnswer,
  );
};

export default evenGame;
