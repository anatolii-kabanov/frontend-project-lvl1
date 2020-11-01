import promptly from 'promptly';

const rightAnswersToWin = 3;

const game = async (greetingsMessage, generateQuestionAndAnswer) => {
  try {
    console.log('Welcome to the Brain Games!');
    const userName = await promptly.prompt('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(greetingsMessage);
    for (let i = 0; i < rightAnswersToWin; i += 1) {
      const qaObject = generateQuestionAndAnswer();
      console.log(`Question: ${qaObject.question}`);
      // eslint-disable-next-line no-await-in-loop
      const userAnswer = await promptly.prompt('Your answer: ');
      if (qaObject.answer !== userAnswer) {
        console.log(
          `'${userAnswer}' is wrong answer ;(. Correct answer was '${qaObject.answer}'.`,
        );
        console.log(`Let's try again, ${userName}!`);
        return;
      }
      console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
  } catch (error) {
    console.error(error);
  }
};

export default game;
