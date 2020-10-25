#!/usr/bin/env node
import GcdGame from '../src/gcd-game/gcd-game.js';

(async () => {
  const gcdGame = new GcdGame();
  await gcdGame.runAsync();
})();
