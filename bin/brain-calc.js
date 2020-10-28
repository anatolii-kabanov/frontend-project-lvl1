#!/usr/bin/env node
import calcGame from '../src/games/calc-game/calc-game.js';

(async () => {
  const game = calcGame();
  await game.runAsync();
})();
