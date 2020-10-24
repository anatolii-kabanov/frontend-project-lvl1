import promptly from 'promptly';
import gameResult from '../constants/game-result.constant.js';
import answer from '../constants/answer.constant.js';

const rightAnswersToWin = 3;
const maxNumber = 1000;

const getRandomInt = (max = Number.MAX_SAFE_INTEGER) => Math.floor(Math.random() * Math.floor(max));

const isEven = (num) => num % 2 === 0;

const convertToAnswerString = (flag) => (flag ? answer.YES : answer.NO);

const runGame = async () => {
  for (let i = 0; i < rightAnswersToWin; i += 1) {
    const number = getRandomInt(maxNumber);
    console.log(`Question: ${number}`);
    // eslint-disable-next-line no-await-in-loop
    const userAnswer = await promptly.prompt('Your answer: ');
    const isCorrectInput = Object.values(answer).includes(userAnswer);
    const isNumberEven = isEven(number);
    const correctAnswer = convertToAnswerString(isNumberEven);
    if (!isCorrectInput || correctAnswer !== userAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      return gameResult.FAIL;
    }
    console.log('Correct!');
  }
  return gameResult.SUCCESS;
};

export default async () => {
  console.log('Welcome to the Brain Games!');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const result = await runGame();
  if (result === gameResult.SUCCESS) console.log(`Congratulations, ${name}!`);
};
