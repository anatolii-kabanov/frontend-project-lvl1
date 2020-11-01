import promptly from 'promptly';
import gameResult from '../constants/game-result.constant.js';

const rightAnswersToWin = 3;

const game = async (greetingsMessage, generateQuestionAndAnswer) => {
  const runGameAsync = async () => {
    for (let i = 0; i < rightAnswersToWin; i += 1) {
      const qaObject = generateQuestionAndAnswer();
      console.log(`Question: ${qaObject.question}`);
      // eslint-disable-next-line no-await-in-loop
      const userAnswer = await promptly.prompt('Your answer: ');
      if (qaObject.answer !== userAnswer) {
        console.log(
          `'${userAnswer}' is wrong answer ;(. Correct answer was '${qaObject.answer}'.`,
        );
        return gameResult.FAIL;
      }
      console.log('Correct!');
    }
    return gameResult.SUCCESS;
  };

  try {
    console.log('Welcome to the Brain Games!');
    const userName = await promptly.prompt('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(greetingsMessage);
    const result = await runGameAsync();
    switch (result) {
      case gameResult.SUCCESS:
        console.log(`Congratulations, ${userName}!`);
        break;
      case gameResult.FAIL:
        console.log(`Let's try again, ${userName}!`);
        break;
      default:
        break;
    }
  } catch (error) {
    console.error(error);
  }
};

export default game;
