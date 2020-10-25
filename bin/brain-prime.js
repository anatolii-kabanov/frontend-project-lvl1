#!/usr/bin/env node
import PrimeGame from '../src/prime-game/prime-game.js';

(async () => {
  const primeGame = new PrimeGame();
  await primeGame.runAsync();
})();
