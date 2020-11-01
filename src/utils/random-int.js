const getRandomInt = (max = Number.MAX_SAFE_INTEGER, startNumber = 0) => (
  Math.floor(Math.random() * Math.floor(max)) + startNumber
);
export default getRandomInt;
