#!/usr/bin/env node
import EvenGame from '../src/even-game/even-game.js';

(async () => {
  const evenGame = new EvenGame();
  await evenGame.runAsync();
})();
