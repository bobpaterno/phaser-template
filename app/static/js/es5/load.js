
Game.Load = function() {};

Game.Load.prototype = {
  preload: function () {
  	// create loading screen
  	game.stage.backgroundColor = '#225';

  	var bar = game.add.sprite(200, 145, 'loadbar');
  	bar.x -= game.world.width/2 / 2 - 5;
  	bar.anchor.setTo(0, 0.5);

  	game.load.setPreloadSprite(bar);

  	// load everything
  	game.load.image('square-green', 'img/square-green.png');
  	game.load.image('square-blue', 'img/square-blue.png');
  	game.load.image('square-orange', 'img/square-orange.png');
  	game.load.image('square-purple', 'img/square-purple.png');
  	game.load.image('square-pink', 'img/square-pink.png');
  	game.load.image('square-lime', 'img/square-lime.png');


  },

  create: function () {
    game.add.sprite(300,300,'square-green');

// game.state.start('Menu');
  }
};
