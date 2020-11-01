const gcd = (firstNumber, secondNumber) => {
  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    throw new Error('Put numbers to this function');
  }
  let x = Math.abs(firstNumber);
  let y = Math.abs(secondNumber);
  while (y) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return `${x}`;
};

export default gcd;
