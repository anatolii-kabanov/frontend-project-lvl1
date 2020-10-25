#!/usr/bin/env node
import ProgressionGame from '../src/progression-game/progression-game.js';

(async () => {
  const progressionGame = new ProgressionGame();
  await progressionGame.runAsync();
})();
