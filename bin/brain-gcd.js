#!/usr/bin/env node
import gcdGame from '../src/games/gcd-game/gcd-game.js';

(async () => {
  const game = gcdGame();
  await game.runAsync();
})();
