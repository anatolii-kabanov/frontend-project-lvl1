import BaseGame from '../common/game.js';
import answer from '../constants/answer.constant.js';

const isEven = (num) => num % 2 === 0;

const convertToAnswerString = (flag) => (flag ? answer.YES : answer.NO);

class EvenGame extends BaseGame {
  constructor(rightAnswersToWin = 3, maxGeneratedNumber = 100) {
    super(
      rightAnswersToWin,
      maxGeneratedNumber,
      'Answer "yes" if the number is even, otherwise answer "no".',
    );
  }

  generateQuestionAndAnswer() {
    const number = BaseGame.getRandomInt(this.maxGeneratedNumber);
    const isNumberEven = isEven(number);
    const correctAnswer = convertToAnswerString(isNumberEven);
    const resultObject = {
      question: `${number}`,
      answer: correctAnswer,
    };

    return resultObject;
  }
}

export default EvenGame;
