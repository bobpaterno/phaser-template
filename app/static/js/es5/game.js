/* global Game, Phaser */

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

game.state.add('Boot', Game.Boot);
game.state.add('Load', Game.Load);

game.state.start('Boot');
