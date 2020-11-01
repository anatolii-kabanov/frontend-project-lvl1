const calculate = (firstNumber, secondNumber, sign) => {
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

export default calculate;
