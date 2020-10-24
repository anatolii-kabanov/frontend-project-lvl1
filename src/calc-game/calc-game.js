import BaseGame from '../common/game.js';

class CalcGame extends BaseGame {
  constructor(rightAnswersToWin = 5, maxGeneratedNumber = 100) {
    super(
      rightAnswersToWin,
      maxGeneratedNumber,
      'What is the result of the expression?',
    );
  }
}

export default CalcGame;
