#!/usr/bin/env node
import progressionGame from '../src/games/progression-game/progression-game.js';

(async () => {
  const game = progressionGame();
  await game.runAsync();
})();
