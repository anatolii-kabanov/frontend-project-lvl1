import baseGame from '../../common/game.js';
import getRandomInt from '../../utils/random-int.js';
import convertToAnswerString from '../../utils/boolean-to-yes-no-string.js';
import isPrime from '../../utils/is-prime.js';

const maxGeneratedNumber = 100;

const primeGame = async () => {
  const generateQuestionAndAnswer = () => {
    const number = getRandomInt(maxGeneratedNumber);
    const isNumberPrime = isPrime(number);
    const correctAnswer = convertToAnswerString(isNumberPrime);
    const resultObject = {
      question: `${number}`,
      answer: correctAnswer,
    };

    return resultObject;
  };

  await baseGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    generateQuestionAndAnswer,
  );
};

export default primeGame;
