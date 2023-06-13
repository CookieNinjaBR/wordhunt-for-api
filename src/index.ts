import Phaser from 'phaser';
import config from './config';
import EndGame from './scenes/EndGame'
import GameModeSelect from './scenes/GameModeSelect'
import MainMenu from './scenes/MainMenu'
import WordHuntGame from './WordHuntGame'

new Phaser.Game(
  Object.assign(config, {
    scene: [MainMenu, GameModeSelect, WordHuntGame, EndGame]
  })
);
