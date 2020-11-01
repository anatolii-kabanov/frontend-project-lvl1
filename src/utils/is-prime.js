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

export default isPrime;
