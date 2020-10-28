#!/usr/bin/env node
import primeGame from '../src/games/prime-game/prime-game.js';

(async () => {
  const game = primeGame();
  await game.runAsync();
})();
