#!/usr/bin/env node
import evenGame from '../src/games/even-game/even-game.js';

(async () => {
  const game = evenGame();
  await game.runAsync();
})();
