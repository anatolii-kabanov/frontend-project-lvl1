const getRandomInt = (max = Number.MAX_SAFE_INTEGER, min = 0) => {
  const minNumber = Math.floor(min);
  const maxNumber = Math.floor(max);
  if (maxNumber < minNumber) {
    throw new Error(
      `Min number: ${minNumber}, can't be greate than max number: ${maxNumber}`,
    );
  }
  const difference = maxNumber - minNumber;
  return Math.floor(Math.random() * (difference + 1)) + minNumber;
};
export default getRandomInt;
