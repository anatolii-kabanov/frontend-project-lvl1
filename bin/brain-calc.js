#!/usr/bin/env node
import CalcGame from '../src/calc-game/calc-game.js';

(async () => {
  const calcGame = new CalcGame();
  await calcGame.runAsync();
})();
