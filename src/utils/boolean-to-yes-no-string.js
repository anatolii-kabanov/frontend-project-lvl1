import answer from '../constants/answer.constant.js';

const convertToAnswerString = (flag) => (flag ? answer.YES : answer.NO);

export default convertToAnswerString;
