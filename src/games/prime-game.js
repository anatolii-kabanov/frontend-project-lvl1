import runGameEngine from '../common/game-engine.js';
import getRandomInt from '../utils/random-int.js';

const maxGeneratedNumber = 100;

const isPrime = (number) => {
  if (typeof number !== 'number') {
    throw new Error('Put number to this function');
  }
  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const answer = {
  YES: 'yes',
  NO: 'no',
};

const generateQuestionAndAnswer = () => {
  const number = getRandomInt(maxGeneratedNumber);
  const isNumberPrime = isPrime(number);
  const correctAnswer = isNumberPrime ? answer.YES : answer.NO;
  return {
    question: number.toString(),
    answer: correctAnswer,
  };
};

const gameTaskMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrimeGame = () => {
  runGameEngine(gameTaskMessage, generateQuestionAndAnswer);
};

export default runPrimeGame;
