import BaseGame from '../../common/game.js';

const mathSigns = {
  0: '+',
  1: '-',
  2: '*',
};

const calcGame = (rightAnswersToWin = 3, maxGeneratedNumber = 100) => {
  const baseGame = new BaseGame(
    rightAnswersToWin,
    maxGeneratedNumber,
    'What is the result of the expression?',
  );

  baseGame.calculate = (firstNumber, secondNumber, sign) => {
    switch (sign) {
      case '+':
        return `${firstNumber + secondNumber}`;
      case '-':
        return `${firstNumber - secondNumber}`;
      case '*':
        return `${firstNumber * secondNumber}`;
      default:
        return null;
    }
  };

  baseGame.generateQuestionAndAnswer = () => {
    const firstNumber = baseGame.getRandomInt(baseGame.maxGeneratedNumber);
    const secondNumber = baseGame.getRandomInt(baseGame.maxGeneratedNumber);
    const signToUse = mathSigns[baseGame.getRandomInt(3)];
    const resultObject = {
      question: `${firstNumber} ${signToUse} ${secondNumber}`,
      answer: baseGame.calculate(firstNumber, secondNumber, signToUse),
    };

    return resultObject;
  };

  return baseGame;
};

export default calcGame;
