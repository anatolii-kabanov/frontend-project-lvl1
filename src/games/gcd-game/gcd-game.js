import baseGame from '../../common/game.js';
import getRandomInt from '../../utils/random-int.js';
import gcd from '../../utils/gcd.js';

const maxGeneratedNumber = 100;

const gcdGame = async () => {
  const generateQuestionAndAnswer = () => {
    const firstNumber = getRandomInt(maxGeneratedNumber);
    const secondNumber = getRandomInt(maxGeneratedNumber);
    const resultObject = {
      question: `${firstNumber} ${secondNumber}`,
      answer: gcd(firstNumber, secondNumber),
    };

    return resultObject;
  };

  await baseGame(
    'Find the greatest common divisor of given numbers.',
    generateQuestionAndAnswer,
  );
};

export default gcdGame;
